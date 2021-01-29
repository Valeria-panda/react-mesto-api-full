
import React, { useState }  from 'react';
import {
  Route, Switch, useLocation, Redirect, useHistory,
} from 'react-router-dom';

import '../index.css';
import { api } from '../utils/Api.js';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import ImagePopup from '../components/ImagePopup.js';
import EditAvatarPopup from '../components/EditAvatarPopup.js';
import EditProfilePopup from '../components/EditProfilePopup.js';
import AddPlacePopup from '../components/AddPlacePopup.js';
import ConfirmPopup from './ConfirmPopup.js';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import * as auth from '../utils/auth';
import { CurrentUserContext }  from '../contexts/CurrentUserContext.js'
import Login from './Login';
import Register from './Register';
import resolvePath from '../images/resolve.svg';
import rejectPath from '../images/reject.svg';
import loading from '../images/loading.svg';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    link: '',
    name: '',
  });

  const [currentUser, setCurrentUser] = useState({})
  const [cardToDelete, setCardToDelete] = useState({});
  const [isLoading, setLoading] = useState(false);

  // авторизация
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [isAuthInfoOpened, setAuthInfoOpened] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [message, setMessage] = useState({
    iconPath: loading,
    text: ''
  });

  const [token, setToken]= useState('');


  const location = useLocation();
  const history = useHistory();

  const escape = require('escape-html');



  // Проверить токен.
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          setToken(jwt);
          setLoggedIn(true);
          history.push('/');
        })
        .catch(err => console.log(err));
    }
  }, []);


// поучить данные пользователя
React.useEffect(() => {
  if (loggedIn) {
    api
      .getUserInfo(token)
      .then((res) => {
        console.log(res)
        setCurrentUser(res);
        console.log(currentUser)
      })
      .catch((err) => console.log(`Ошибка при загрузке информации о пользователе: ${err}`));
    }
}, [loggedIn, token]);

// Регистрация
function handleRegister(password, email) {
  auth.register(escape(password), email)
    .then(() => {
      setMessage({ iconPath: resolvePath, text: 'Вы успешно зарегистрировались!' });
      history.push('/signin');
    })
    .catch((err) => setMessage({ iconPath: rejectPath, text: err.message }));
  setInfoTooltipOpen(true);
}

// Авторизация
function handleLogin(password, email) {
  auth.authorize(escape(password), email)
    .then((data) => {

      localStorage.setItem('jwt', data.token);

      setToken(data.token);
      setCurrentUser({
        name:data.name,
        about:data.about,
        avatar:data.avatar
      });
      setEmail(data.email);
      setLoggedIn(true);
      setMessage({ iconPath: resolvePath, text: 'Вы успешно вошли в приложение!' });


      history.push('/');
    })
    .catch((err) => setMessage({ iconPath: rejectPath, text: err.message }))
  setInfoTooltipOpen(true);
}

  // Выход
  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    setEmail('');
    history.push('/signin');
  }

  // Получить карточки
  React.useEffect(() => {
    if (loggedIn) {
      api
        .getInitialCards(token)
        .then((cardData) => {
          setCards(cardData);
        })
        .catch((err) => console.log(`Ошибка при загрузке карточек: ${err}`));
      }
  }, [loggedIn, token]);

  //Обновить аватар
  function handleUpdateAvatar(newAvatar) {
      setLoading(true);
      api
        // .setUserAvatar(token, newAvatar)
        .updateUserAvatar(token, newAvatar)
        .then((res) => {
          setCurrentUser(res);
          closeAllPopups();
        })
        .catch((err) => console.log(`Ошибка при обновлении аватара: ${err}`))
        .finally(() => setLoading(false));

  }
  //Обновить данные пользователя
  function handleUpdateUser(userData) {
      setLoading(true);
      api
        .updateUserInfo(token, userData)
        .then((newUser) => {
          setCurrentUser(newUser);
          closeAllPopups();
        })
        .catch((err) => `Ошибка при обновлении информации о пользователе: ${err}`)
        .finally(() => setLoading(false));

  }

  function handleAddPlace(card) {
    setLoading(true)
      api
        .postNewCard(token, card)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        })
        .catch((err) =>
          console.log(`Ошибка при добавлении новой карточки: ${err}`)
        )
        .finally(() => setLoading(false));

  }

  //Открыть попап аватара
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  //Открыть попап профииля
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  //Открыть попап карточки
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  // открыть фулсайз фото
  function handleCardClick(card) {
    const { link, name } = card;
    setSelectedCard({ isImageOpen: true, link: link, name: name });
  }
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(token, card._id, !isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch((err) =>
        console.log(`Ошибка при постановке лайка: ${err}`)
    );
  }
   //Удалить карточку после подтверждения
   function handleConfirm() {
    api
      .deleteCard(token, cardToDelete._id)
      .then(() =>{
        setCards(cards.filter((item) => item !== cardToDelete))
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`));

  }

  //Кликнуть на удаление карточки
  function handleCardDelete(card) {
    setConfirmPopupOpen(true);
    setCardToDelete(card);
  }
  //Закрыть все попапы
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
    setConfirmPopupOpen(false);
    setInfoTooltipOpen(false)
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
          <div className="page">
          {(loggedIn && isAuthInfoOpened)}

            <Header loggedIn={loggedIn}
                    locaction={location}
                    email={email}
                    signOut={handleSignOut}
                    isAuthInfoOpened={isAuthInfoOpened}
            />
            <Switch>

            <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main}
                    cards={cards}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
            />
          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>

          <Route path='/signup'>
            <Register onRegister={handleRegister} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
          </Route>
        </Switch>

        <Footer />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          loggedIn={loggedIn}
          message={message}
        />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
              isLoading={isLoading}
            />
            <EditAvatarPopup
              onUpdateAvatar={handleUpdateAvatar}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              isLoading={isLoading}
            />
            <AddPlacePopup
              onAddPlace={handleAddPlace}
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}

            />
            <ConfirmPopup
              isOpen={isConfirmPopupOpen}
              onClose={closeAllPopups}
              onConfirmDelete={handleConfirm}
            />

            <ImagePopup
            name={selectedCard.name}
            link={selectedCard.link}
            isOpen={selectedCard.isImageOpen}
            onClose={closeAllPopups}
            />

          </div>
        </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
