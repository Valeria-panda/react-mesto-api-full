const users = require('express').Router();
const { validateId, validateUserUpdate, validateAvatar } = require('../middlewares/requestValidation');
const {
  getUsers,
  getCurrentUser,
  updateUser,
  updateAvatar,
  getUserById,
} = require('../controllers/users');

users.get('/users', getUsers);
users.get('/users/me', getCurrentUser);

users.get('/users/:_id', validateId, getUserById);
users.patch('/users/me', validateUserUpdate, updateUser);
users.patch('/users/me/avatar', validateAvatar, updateAvatar);

module.exports = users;
