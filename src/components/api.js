///Config///
export const config = {
  baseUrl: `https://nomoreparties.co/v1/wbc-cohort-1`,
  headers: {
    authorization: '61650a97-0198-4977-9b18-131273aaff2f',
    'Content-Type': 'application/json'
  }
}

///Функция проверки ответа///
export function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

///Ошибки, которые попадают в .catch///
export function handleError(err) {
  console.log(err);
}

//Загрузка информации о пользователе с сервера////
export function getServerUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
    .then(handleResponse)
}

////Загрузка карточек с сервера////
export function getServerInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
    .then(handleResponse)
}

////Обновление аватара пользователя////
export function patchUserAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar })
  })
    .then(handleResponse)
}

////Редактирование профиля////
export function patchUserData(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ name, about })
  })
    .then(handleResponse)
}

////Добавление новой карточки////
export function postNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ name, link })
  })
    .then(handleResponse)
}

////Удаление только своей карточки////
export function deleteServerCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(handleResponse)
}

////Добавление лайка////
export function likeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(handleResponse)
}

////Удаление лайка////
export function dislikeCard(id) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(handleResponse)
}