const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorizedError');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    console.log('Fuck!');
  }

  const token = authorization.replace('Bearer ', '');

  // const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, `${NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'}`);
  } catch (err) {
    throw new UnauthorizedError({ message: 'Необходима авторизация' });
  }
  req.user = payload;

  return next();
};
