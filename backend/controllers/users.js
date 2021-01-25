const User = require('../models/user');
const bcrypt = require('bcryptjs'); // импортируем bcrypt.
const jwt = require('jsonwebtoken');
const BadRequestError = require('../errors/badRequestError');
const NotFoundError = require('../errors/notFoundError');
const AlreadyExistError = require('../errors/alreadyExistError');
const NotAuthorizedError = require('../errors/notAuthorizedError');
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
  .then((users) => res.send({ data: users }))
  .catch(next);
}

// module.exports.getProfile = (req, res, next) => {
//   User.findOne({ _id: req.params.userId })
//   .then((user) => {
//     if (!user) {
//       // если такого пользователя нет
//       throw new NotFoundError('Нет пользователя с таким id');
//     }
//     res.send(user);
//   })
//   .catch(next); // добавили catch
// }

// module.exports.getProfile = (req, res, next) => {
//   User.findById(req.params._id)
//     .orFail()
//     .catch(() => {
//       throw new NotFoundError({ message: 'Нет пользователя с таким id' });
//     })
//     .then((user) => res.send({ data: user }))
//     .catch(next);
// };

// module.exports.createUser = (req, res, next) => {

//   const { name, about, email, password, avatar } = req.body;

//   bcrypt.hash(password, 10)
//     .then( hash => User.create({
//       name,
//       about,
//       avatar,
//       email,
//       password: hash, // записываем хеш в базу
//     }))

//     .catch((err) => {
//       if (err.name === 'MongoError' || err.code === 11000) {
//         throw new AlreadyExistError({ message: 'Пользователь с таким email уже зарегистрирован' });
//       } else next(err);
//     })

//     .then((user) => res.status(201).send({
//       data: {
//         name: user.name, about: user.about, avatar, email: user.email,
//       },
//     }))

//     .catch(next);

// };

// module.exports.login = (req, res, next) => {
//   const { email, password } = req.body;

//   return User.findUserByCredentials(email, password)
//     .then((user) => {
//       const token = jwt.sign(
//         { _id: user._id },
//         NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
//         { expiresIn: '7d' },
//       );
//       res
//         .cookie('jwt', token, {
//           maxAge: 3600000 * 24 * 7,
//           httpOnly: true,
//           sameSite: true,
//         })
//         .send({ message: 'Успешная авторизация' });
//     })
//     .catch(next);
// };

// module.exports.updateUser = (req, res, next) => {
//   const { name, about} = req.body;

//   User.findByIdAndUpdate( req.user._id, name, about )
//   .orFail(() => new NotFoundError({ message: 'Нет пользователя с таким id' }))
//   .catch((err) => {
//     if (err instanceof NotFoundError) {
//       throw err;
//     }
//     throw new BadRequestError({ message: `Указаны некорректные данные при обновлении пользователя: ${err.message}` });
//   })
//   .then((user) => res.send({ data: user }))
//   .catch(next);
// };

// module.exports.updateAvatar = (req, res) => {

//   const { avatar } = req.body;

//   User.findByIdAndUpdate(req.user._id, avatar)

//     .orFail(() => new NotFoundError({ message: 'Нет пользователя с таким id' }))
//     .catch((err) => {
//       if (err instanceof NotFoundError) {
//         throw err;
//       }
//       throw new BadRequestError({ message: `Указаны некорректные данные при обновлении аватара: ${err.message}` });
//     })
//     .then((updAvatar) => res.send({ data: updAvatar }))
//     .catch(next);
// };



const createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    email,
    password,
  } = req.body;

  User.findOne({ email })
    .then((existedUser) => {
      if (existedUser) {
        throw new BadRequestError('Пользователь с таким email уже существует');
      }

      bcrypt.hash(password, 10)
        .then((hash) => User.create({
          name,
          about,
          avatar,
          email,
          password: hash,
        }))
        .then((createdUser) => {
          if (!createdUser) {
            throw new BadRequestError('Переданы некорректные данные');
          }

          User.findOne({ email })
            .then((user) => res.send(user));
        });
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((existedUser) => {
      const token = jwt.sign(
        { _id: existedUser._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );

      User.findOne({ email })
        .then((user) => res.cookie('jwt', token, {
          httpOnly: true,
          sameSite: true,
          maxAge: (3600 * 24 * 7),
        })
          .send(user));
    })
    .catch(next);
};

// const signout = (req, res) => res.clearCookie('jwt', { httpOnly: true, sameSite: true }).send({ message: 'Signed Out' });

const getCurrentUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.send(user))
    .catch(next);
};

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

const getProfile = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }

      res.send(user);
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Переданы некорректные данные');
      }

      res.send(user);
    })
    .catch(next);
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Переданы некорректные данные');
      }

      res.send(user);
    })
    .catch(next);
};

module.exports = {
  createUser,
  login,
  // signout,
  getCurrentUserInfo,
  getUsers,
  getProfile,
  updateUser,
  updateAvatar,
};
