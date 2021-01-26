// import BadRequestError from '../errors/badRequestError';
// import NotAuthorizedError from '../errors/notAuthorizedError';
// старый вариант
// export const BASE_URL = 'https://auth.nomoreparties.co';

export const BASE_URL = 'https://api.advent.students.nomoredomains.rocks';



// // Отправляем запрос за регистрацию
// export const register = (password, email) => fetch(`${BASE_URL}/signup`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ password, email }),
//   credentials: 'include',
// })
//   .then((res) => {
//     if (!res.ok) {
//       return res.json()
//         .then((err) => {
//           if (err.error) {
//             throw new BadRequestError(err.error);
//           } else {
//             throw new BadRequestError(err.message);
//           }
//         });
//     }
//     return res.json();
//   });

// // // Отправляем запрос за авторизацию
// export const authorize = (password, email) => fetch(`${BASE_URL}/signin`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ password, email }),
//   credentials: 'include',
// })
//   .then((res) => {
//     if (res.status === 400) {
//       throw new BadRequestError('Не передано одно из полей');
//     }
//     else if (res.status === 401) {
//       throw new NotAuthorizedError('Пользователь с таким email не найден');
//     }
//     return res.json();
//   })

// // Отправляем запрос на получение токена
// export const getContent = () => fetch(`${BASE_URL}/users/me`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     // 'Authorization': `Bearer ${jwt}`,
//     credentials: 'include',
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       return res.json()
//         .then((err) => {
//           throw new NotAuthorizedError(err.message);
//         });
//     }
//     return res.json()
//   })



// не мое
  

export function handlePromiseRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };


  export const headers = {
    'Content-Type': 'application/json; charset=utf-8',
  };


  export function register({ email, password }) {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        password
      }),
      credentials: 'include',
    })
      .then((res) => handlePromiseRes(res))
  }
  
  export function authorize({ email, password }) {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        password
      }),
      credentials: 'include',
    })
      .then((res) => handlePromiseRes(res))
  }
  
  export function signout() {
    return fetch(`${BASE_URL}/signout`, {
      headers,
      credentials: 'include',
    })
      .then((res) => handlePromiseRes(res))
  }
  
  export function getUserInfo() {
    return fetch(`${BASE_URL}/users/me`, {
      headers,
      credentials: 'include',
    })
      .then((res) => handlePromiseRes(res))
  }
  
  export function updateUserInfo({ name, about }) {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => handlePromiseRes(res))
  }
  
  export function setUserAvatar({ avatar }) {
    return fetch(`${BASE_URL}/users/me/avatar`, {
      method: 'PATCH',
      headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar
      })
    })
    .then(res => handlePromiseRes(res))
  }
  
  export function getInitialCards() {
    return fetch(`${BASE_URL}/cards`, {
      headers,
      credentials: 'include',
    })
    .then(res => handlePromiseRes(res))
  }
  
  export function postNewCard({ name, link }) {
    return fetch(`${BASE_URL}/cards`, {
      method: 'POST',
      headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => handlePromiseRes(res))
  }
  
  export function deleteCard({ _id }) {
    return fetch(`${BASE_URL}/cards/${_id}`, {
      method: 'DELETE',
      headers,
      credentials: 'include',
    })
    .then(res => handlePromiseRes(res))
  }
  
  export function changeLikeCardStatus({ _id }, method) {
    return fetch(`${BASE_URL}/cards/${_id}/likes`, {
      method,
      headers,
      credentials: 'include',
    })
    .then(res => handlePromiseRes(res))
  }


