
// const cookieParser = require('cookie-parser');
const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const { celebrate, Joi } = require('celebrate');
// const { errors } = require('celebrate');
// const { requestLogger, errorLogger } = require('./middlewares/logger');


const { corsConfig } = require('./middlewares/cors');
// require('dotenv').config();
// const app = express();
// const users = require('./routes/users.js');
// const cards = require('./routes/cards.js');
// const { createUser, login } = require('./controllers/users');
// const auth = require('./middlewares/auth');
// const NotFoundError = require('./errors/notFoundError.js');
// const { PORT = 3000 } = process.env;


// mongoose.connect('mongodb://localhost:27017/mestodb', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(requestLogger);

// app.use('*', cors(corsConfig));


// app.get('/crash-test', () => {
//   setTimeout(() => {
//     throw new Error('Сервер сейчас упадёт');
//   }, 0);
// });

// app.post('/signin', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().min(4),
//   }),
// }), login);

// app.post('/signup', celebrate({
//   body: Joi.object().keys({
//     email: Joi.string().required().email(),
//     password: Joi.string().required().min(4),
//   }),
// }), createUser);


// app.use('/', auth, users);
// app.use('/', auth, cards);

// app.use(() => {
//   throw new NotFoundError({ message: 'Запрашиваемый ресурс не найден' });
// });

// app.use(errorLogger);

// app.use(errors());

// app.use((err, req, res, next) => {
//   if (err.status) {
//     res.status(err.status).send(err.message);
//     return;
//   }
//   res.status(500).send({ message: `На сервере произошла ошибка: ${err.message}` });
//   next();
// });

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });


require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const { errors } = require('celebrate');
const users = require('./routes/users.js');
const cards = require('./routes/cards.js');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { validateUser, validateLogin } = require('./middlewares/requestValidation');
const NotFoundError = require('./errors/NotFoundError.js');
require('dotenv').config();

const { PORT = 3000 } = process.env;

const app = express();



app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Слишком много запросов с вашего IP, попробуйте повторить попытку позже',
});

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);

app.use('*', cors(corsConfig));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validateLogin, login);
app.post('/signup', validateUser, createUser);

app.use('/', auth, users);
app.use('/', auth, cards);

app.use(() => {
  throw new NotFoundError({ message: 'Запрашиваемый ресурс не найден' });
});

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
    return;
  }
  res.status(500).send({ message: `На сервере произошла ошибка: ${err.message}` });
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});