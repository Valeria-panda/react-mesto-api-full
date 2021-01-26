
const jwt = require('jsonwebtoken');
const NotAuthorizedError = require('../errors/notAuthorizedError');
const { NODE_ENV, JWT_SECRET } = process.env;

// module.exports = (req, res, next) => {
//   const token = req.cookies.jwt;
//   let payload;
//   try {
//     payload = jwt.verify(token, `${NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'}`);
//   } catch (err) {
//     throw new NotAuthorizedError({ message: 'Необходима авторизация' });
//   }
//   req.user = payload;

//   next();
// };

const auth = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError('Токен не передан или передан не в том формате');
  }

  const token = req.cookies.jwt;

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new NotAuthorizedError('Передан некорректный токен');
  }

  req.user = payload;

  return next();
};

module.exports = auth;