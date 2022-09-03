import {
  profileAvatar, userName, userAbout,
  cardsContainer, inputAvatarUrl,
  inputUserName, inputUserAbout,
  inputPlaceName, inputPlaceUrl
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

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

//////////Загрузка информации о пользователе с сервера//////////
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
    .catch((err) => {
      console.log(err);
    });
}

/////////////////Загрузка карточек с сервера/////////////////
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
    .catch((err) => {
      console.log(err);
    });
}

///////////////////Редактирование профиля///////////////////
export function patchUserData() {
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
    .catch((err) => {
      console.log(err);
    });
}

//////////////Обновление аватара пользователя//////////////
export function patchUserAvatar() {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: inputAvatarUrl.value
    })
  })
    .then(handleResponse)
    .then(getServerUserData)
    .catch((err) => {
      console.log(err);
    });
}

////////////////Добавление новой карточки/////////////////
export function postNewCard() {
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
    .catch((err) => {
      console.log(err);
    });
}

////////////////Удаление только своей карточки/////////////////
export function deleteCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(handleResponse)
}

export function handleDeleteCard(card) {
  return deleteCard(card.id)
    .then(() => {
      card.remove();
    })
    .catch((err) => {
      console.log(err);
    })
}

////////////////////Добавление лайка///////////////////
export function likeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(handleResponse)
    .then(() => {
      const cardLikeButton = cardNew.querySelector('.card__like-button');
      const likesCounter = cardNew.querySelector('.card__like-counter');
      cardLikeButton.classList.add('card__like-button_active');
      likesCounter.textContent = Number(likesCounter.textContent) + 1;
    })
    .catch((err) => {
      console.log(err);
    })
}

//////////////////Удаление лайка///////////////////
export function dislikeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(handleResponse)
    .then(() => {
      const cardLikeButton = cardNew.querySelector('.card__like-button');
      const likesCounter = cardNew.querySelector('.card__like-counter');
      cardLikeButton.classList.remove('card__like-button_active');
      likesCounter.textContent = Number(likesCounter.textContent) - 1;
    })
    .catch((err) => {
      console.log(err);
    })
}

// function toggleText(button) {
//   var el = document.getElementById(button_id);
//    if (document.getElementById('button_id').textContent == "Сохранить") 
//    {
//     document.getElementById('button_id').textContent = "Сохранить";
//    } else {
//     document.getElementById('button_id').textContent = "Сохранение...";
//    }
// }