import {
  profileAvatar, userName, userAbout,
  cardsContainer, inputAvatarUrl,
  inputUserName, inputUserAbout,
  inputPlaceName, inputPlaceUrl, popupAvatar, popupEdit, popupAdd,

} from "./variables.js";
import { createCard } from "./card.js";

export let userId = '';

const config = {
  baseUrl: `https://nomoreparties.co/v1/wbc-cohort-1`,
  headers: {
    authorization: '61650a97-0198-4977-9b18-131273aaff2f',
    'Content-Type': 'application/json'
  }
}

export function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function handleError(err) {
  console.log(err);
};

function savingPopup(saving, popup) {
  const popupSave = popup.querySelector('.form__submit-button')
  if (saving) {
    popupSave.textContent = 'Сохранение...'
  } else {
    popupSave.textContent = 'Сохранить'
  }
}

////Загрузка информации о пользователе с сервера////
export function getServerUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then(handleResponse)
    .then((result) => {
      userId = result._id;
      userName.textContent = result.name;
      userAbout.textContent = result.about;
      profileAvatar.style.backgroundImage = `url(${result.avatar})`;
    })
    .catch(handleError);
}

////Загрузка карточек с сервера////
export function getServerInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then(handleResponse)
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        cardsContainer.append(createCard(result[i]))
      }
      console.log(result)
    })
    .catch(handleError);
}

////Редактирование профиля////
export function patchUserData() {
  savingPopup(true, popupEdit)
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: inputUserName.value,
      about: inputUserAbout.value,
    })
  })
    .then(handleResponse)
    .then(getServerUserData)
    .catch(handleError)
    .finally(function () {
      savingPopup(false, popupEdit)
    })
}

////Обновление аватара пользователя////
export function patchUserAvatar() {
  savingPopup(true, popupAvatar)
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: inputAvatarUrl.value
    })
  })
    .then(handleResponse)
    .then(getServerUserData)
    .catch(handleError)
    .finally(function () {
      savingPopup(false, popupAvatar)
    })
}

////Добавление новой карточки////
export function postNewCard() {
  savingPopup(true, popupAdd)
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: inputPlaceName.value,
      link: inputPlaceUrl.value
    })
  })
    .then(handleResponse)
    .then((result) => {
      cardsContainer.prepend(createCard(result));
    })
    .catch(handleError)
    .finally(function () {
      savingPopup(false, popupAdd)
    })
}

////Удаление только своей карточки////
export function deleteServerCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      id: cardId
    })
  })
    .then(handleResponse)
}

////Добавление лайка////
export function likeCard(userId, cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
    body: JSON.stringify({
      id: cardId,
      likes: userId
    })
  })
    .then(handleResponse)
}

////Удаление лайка////
export function dislikeCard(userId, cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      id: cardId,
      likes: userId
    })
  })
    .then(handleResponse)
}