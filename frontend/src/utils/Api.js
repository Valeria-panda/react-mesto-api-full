// import { apiOptions } from './constant';

// class Api {
//   constructor(apiOptions) {
//     this._url = apiOptions.baseUrl;
//     this._headers = apiOptions.headers;
//     this._credentials = apiOptions.credentials;
//   }

//  //Отправить запрос
//  _sendRequest(path, parameters) {
//   return fetch(`${this._url}${path}`, parameters).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(res.status);
//   });
// }

//   //Получить данные пользователя
//   getUserInfo() {
//     return this._sendRequest(`/users/me`, {
//       headers: this._headers,
//       credentials: this._credentials,
//     });
//   }

//    //Получить карточки
//    getInitialCards() {
//     return this._sendRequest(`/cards`, {
//       headers: this._headers,
//       credentials: this._credentials,
//     });
//   }


//   //Обновить информацию о пользователе
//   updateUserInfo(newUserInfo) {
//     return this._sendRequest(`/users/me`, {
//       method: 'PATCH',
//       headers: this._headers,
//       credentials: this._credentials,
//       body: JSON.stringify({
//         name: newUserInfo.name,
//         about: newUserInfo.about,
//       }),
//     });
//   }

//   //Добавить новую карточку
//   postNewCard(newCard) {
//     return this._sendRequest(`/cards`, {
//       method: 'POST',
//       body: JSON.stringify({
//         name: newCard.title,
//         link: newCard.link,
//       }),
//       headers: this._headers,
//       credentials: this._credentials,
//     });
//   }

//   changeLikeCardStatus(id, isLiked) {
//     return this._sendRequest(`/cards/likes/${id}`, {
//       method: `${isLiked ? 'PUT' : 'DELETE'}`,
//       headers: this._headers,
//       credentials: this._credentials,
//     });
//   }

//   //Удалить фото
//   deleteCard(id) {
//     return this._sendRequest(`/cards/${id}`, {
//       method: 'DELETE',
//       headers: this._headers,
//       credentials: this._credentials,
//     });
//   }


//   //Обновить аватар
//   updateUserAvatar(avatar) {
//     return this._sendRequest(`/users/me/avatar`, {
//       method: 'PATCH',
//       body: JSON.stringify({ avatar: avatar.url }),
//       headers: this._headers,
//       credentials: this._credentials,
//     });
//   }
// }

// export const api = new Api(apiOptions);

import { apiOptions } from './constant';

class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._credentials = options.credentials;
  }

  //Отправить запрос
  _sendRequest(path, parameters) {
    return fetch(`${this._url}${path}`, parameters).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  }

  //Получить данные пользователя
  getUserInfo(token) {
    return this._sendRequest(`users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    });
  }

  //Получить карточки
  getInitialCards(token) {
    return this._sendRequest(`cards`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    });
  }

  //Обновить информацию о пользователе
  updateUserInfo(token, newUserInfo) {
    return this._sendRequest(`users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: newUserInfo.name,
        about: newUserInfo.about,
      }),
    });
  }

  //Добавить новую карточку
  postNewCard(token, newCard) {
    return this._sendRequest(`cards`, {
      method: 'POST',
      body: JSON.stringify({
        name: newCard.title,
        link: newCard.link,
      }),
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    });
  }

  changeLikeCardStatus(token, id, isLiked) {
    return this._sendRequest(`cards/${id}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    });
  }

  //Удалить фото
  deleteCard(token, id) {
    return this._sendRequest(`cards/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    });
  }

  //Обновить аватар
  updateUserAvatar(token, newUserAvatar) {
    return this._sendRequest(`users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({ avatar: newUserAvatar.avatar }),
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`
      },
    });
  }
}

export const api = new Api(apiOptions);
