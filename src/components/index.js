import '../pages/index.css';

import {
  popups, popupAvatar, popupEdit, popupAdd,
  profileAvatar, buttonOpenEdit, buttonOpenAdd,
  formAvatar, formEdit, formAdd,
  userName, userAbout, inputUserName, inputUserAbout,
  inputAvatarUrl, inputPlaceName, inputPlaceUrl,
  cardsContainer,
  formDelete
} from './variables.js';
import { createCard, deleteCard } from './card.js';
import { revalidateForm, enableValidation } from './validate.js';
import { closePopup, openPopup } from './modal.js';
import {
  getServerUserData, getServerInitialCards,
  patchUserAvatar, patchUserData, postNewCard,
  handleError
} from './api.js';
import { renderLoading } from './utils.js'

export let userId;
export let deletedServerCard = null;

const mestoSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type-error',
  errorClass: 'form__input-error_active',
}

profileAvatar.addEventListener('click', openPopupAvatar);
buttonOpenEdit.addEventListener('click', openPopupEdit);
buttonOpenAdd.addEventListener('click', openPopupAdd);
formAvatar.addEventListener('submit', submitFormAvatar);
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);
formDelete.addEventListener('submit', deleteCard);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (event.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
})

function submitFormAvatar(event) {
  event.preventDefault();
  renderLoading(true, popupAvatar);
  patchUserAvatar(inputAvatarUrl.value)
    .then((userData) => {
      profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
    })
    .then(closePopup(popupAvatar))
    .finally(() => {
      renderLoading(false, popupAvatar)
    })
}

function submitFormEdit(event) {
  event.preventDefault();
  renderLoading(true, popupEdit)
  patchUserData(inputUserName.value, inputUserAbout.value)
    .then((userData) => {
      userName.textContent = userData.name;
      userAbout.textContent = userData.about;
    })
    .then(closePopup(popupEdit))
    .finally(() => {
      renderLoading(false, popupEdit)
    })
}

function submitFormAdd(event) {
  event.preventDefault();
  renderLoading(true, popupAdd)
  postNewCard(inputPlaceName.value, inputPlaceUrl.value)
    .then((cards) => {
      cardsContainer.prepend(createCard(cards));
    })
    .then(closePopup(popupAdd))
    .finally(() => {
      renderLoading(false, popupAdd)
    })
}

function openPopupAvatar() {
  formAvatar.reset();
  revalidateForm(formAvatar, mestoSelectors);
  openPopup(popupAvatar);
}

function openPopupEdit() {
  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
  revalidateForm(formEdit, mestoSelectors);
  openPopup(popupEdit);
}

function openPopupAdd() {
  formAdd.reset();
  revalidateForm(formAdd, mestoSelectors);
  openPopup(popupAdd);
}

enableValidation(mestoSelectors);

Promise.all([getServerUserData(), getServerInitialCards()])
  .then(function ([userData, cards]) {
    userId = userData._id;
    userName.textContent = userData.name;
    userAbout.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
    console.log(userData)

    for (let i = 0; i < cards.length; i++) {
      cardsContainer.append(createCard(cards[i]))
    }
    console.log(cards)
  })
  .catch(handleError)