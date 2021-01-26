
// const router = require('express').Router();
// const { celebrate, Joi } = require('celebrate');
// const { getUsers, getProfile, updateUser,  updateAvatar, getCurrentUserInfo } = require('../controllers/users.js')


// router.get('/', getUsers);// вернем всех пользователей

// router.get('/users/me', getCurrentUserInfo);

// router.get('/users/:_id', celebrate({
//     params: Joi.object().keys({
//     _id: Joi.string().alphanum().length(24).hex(),
//     }),
//   }), getProfile);// вернем текущего пользователя

// router.patch('/users/me', celebrate({
//     body: Joi.object().keys({
//     name: Joi.string().required().min(2).max(30),
//     about: Joi.string().required().min(2).max(30),
//     }),
//   }), updateUser); // обновим профиль пользователя

// router.patch('/users/me/avatar', celebrate({
//     body: Joi.object().keys({
//     avatar: Joi.string().required().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/),
//     }),
//   }), updateAvatar); // обновим аватар пользователя

// module.exports = router;





const users = require('express').Router();
const { validateId, validateUserUpdate, validateAvatar } = require('../middlewares/requestValidation');
const {
  getUsers,
  getCurrentUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/:_id', validateId, getCurrentUser);
users.patch('/users/me', validateUserUpdate, updateUser);
users.patch('/users/me/avatar', validateAvatar, updateAvatar);

module.exports = users;