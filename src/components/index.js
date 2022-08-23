import '../pages/index.css';

import { initialCards } from './data.js';
import { createCard, popupImage } from './card.js';
import { closePopup, openPopup, closePopupOverlay } from './utils.js';
import { revalidateForm, enableValidation } from './validate.js';
import {
  userName, userAbout,
  inputUserName, inputUserAbout,
  inputPlaceName, inputPlaceUrl,
  submitFormEdit, submitFormAdd,
  popupAdd, popupEdit
} from './modal.js';

const mestoSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type-error',
  errorClass: 'form__input-error_active',
};

const buttonOpenEdit = document.querySelector('.profile__edit-button');
const buttonOpenAdd = document.querySelector('.profile__add-button');
const formEdit = document.querySelector('#edit');
const formAdd = document.querySelector('#add');
const cardsContainer = document.querySelector('.cards');
const buttonCloseAdd = popupAdd.querySelector('.popup__close-button');
const buttonCloseEdit = popupEdit.querySelector('.popup__close-button');
const buttonCloseImage = popupImage.querySelector('.popup__close-button');

initialCards.forEach(function (element) {
  cardsContainer.prepend(createCard(element.link, element.name));
});

formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);

buttonOpenEdit.addEventListener('click', function () {
  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
  revalidateForm(formEdit, mestoSelectors);
  openPopup(popupEdit);
});

buttonOpenAdd.addEventListener('click', function () {
  inputPlaceName.value = '';
  inputPlaceUrl.value = '';
  revalidateForm(formAdd, mestoSelectors);
  openPopup(popupAdd);
});

buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});

buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

popupEdit.addEventListener('click', closePopupOverlay);
popupAdd.addEventListener('click', closePopupOverlay);
popupImage.addEventListener('click', closePopupOverlay);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
});

enableValidation(mestoSelectors);