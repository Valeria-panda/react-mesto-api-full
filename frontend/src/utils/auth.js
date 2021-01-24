import BadRequestError from '../errors/badRequestError';
import NotAuthorizedError from '../errors/notAuthorizedError';

// export const baseUrl = 'https://auth.nomoreparties.co';
export const baseUrl = 'http://www.api.lera.students.nomoredomains.rocks';

// запрос на регистрацию

export const register = (password, email) => fetch(`${baseUrl}/signup`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ password, email }),
})
  .then((res) => {
    if (!res.ok) {
      return res.json()
        .then((err) => {
          if (err.error) {
            throw new BadRequestError(err.error);
          } else {
            throw new BadRequestError(err.message);
          }
        });
    }
    return res.json();
  });

// Отправляем запрос за авторизацию

  export const authorize = (password, email) => fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      if (res.status === 400) {
        throw new BadRequestError('Не передано одно из полей');
      }
      else if (res.status === 401) {
        throw new NotAuthorizedError('Пользователь с таким email не найден');
      }
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data.token;
      }
    });

// Отправляем запрос за получение токена

  export const getContent = (token) => fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        return res.json()
          .then((err) => {
            throw new NotAuthorizedError(err.message);
          });
      }
      return res.json()
    })
    .then((data) => data);