
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../errors/badRequestError');
const NotFoundError = require('../errors/notFoundError');
const ConflictError = require('../errors/conflictError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.getUsers = (req, res, next) => {
  User.find({})
    // не моя строка
    // .then((users) => res.send(users))
    .then((users) => res.send({ data: users }))
    .catch(next);
};

// module.exports.getCurrentUser = (req, res, next) => {
//   User.findById(req.params._id)
//     .orFail()
//     .catch(() => {
//       throw new NotFoundError({ message: 'Нет пользователя с таким id' });
//     })
//     .then((user) => res.send({ data: user }))
//     .catch(next);
// };

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    // .then((user) => res.send(user))
    .then((user) => res.send({ data: user }))
    .catch(next);
};

// module.exports.createUser = (req, res, next) => {
//   const { name, about, avatar, email, password } = req.body;

//   bcrypt.hash(password, 10)
//     .then((hash) => User.create({
//       name, about, avatar, email, password: hash,
//     }))
//     .catch((err) => {
//       if (err.name === 'MongoError' || err.code === 11000) {
//         throw new ConflictError({ message: 'Пользователь с таким email уже зарегистрирован' });
//       } else next(err);
//     })
//     .then((user) => res.status(201).send({
//       data: {
//         name: user.name, about: user.about, avatar, email: user.email,
//       },
//     }))
//     .catch(next);
// };

// не мой кусок кода
module.exports.createUser = (req, res, next) => {
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
            .then((user) => res.send({
                    data: {
                      name: user.name, about: user.about, avatar, email: user.email,
                    },
                  }))
        });
    })
    .catch(next);
};


module.exports.updateUser = (req, res, next) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    })
    .orFail(() => new NotFoundError({ message: 'Нет пользователя с таким id' }))
    .catch((err) => {
      if (err instanceof NotFoundError) {
        throw err;
      }
      throw new BadRequestError({ message: `Указаны некорректные данные при обновлении пользователя: ${err.message}` });
    })
    .then((user) => res.send({ data: user }))
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    })
    .orFail(() => new NotFoundError({ message: 'Нет пользователя с таким id' }))
    .catch((err) => {
      if (err instanceof NotFoundError) {
        throw err;
      }
      throw new BadRequestError({ message: `Указаны некорректные данные при обновлении аватара: ${err.message}` });
    })
    .then((newAvatar) => res.send({ data: newAvatar }))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .send({
          data: {
            name: user.name, about: user.about, avatar: user.avatar, email: user.email,
          },
        });
    })
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      res.send({ data: user })
    })
    .catch(next);
};

