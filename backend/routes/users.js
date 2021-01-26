
const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getUsers, getProfile, updateUser,  updateAvatar, getCurrentUserInfo } = require('../controllers/users.js')


router.get('/', getUsers);// вернем всех пользователей

router.get('/users/me', getCurrentUserInfo);

router.get('/users/:_id', celebrate({
    params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
    }),
  }), getProfile);// вернем текущего пользователя

router.patch('/users/me', celebrate({
    body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
    }),
  }), updateUser); // обновим профиль пользователя

router.patch('/users/me/avatar', celebrate({
    body: Joi.object().keys({
    avatar: Joi.string().required().regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/),
    }),
  }), updateAvatar); // обновим аватар пользователя

module.exports = router;





