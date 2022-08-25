import '../pages/index.css';

import {
  popupEdit, popupAdd, popupImage,
  buttonOpenEdit, buttonOpenAdd,
  formEdit, formAdd,
  userName, userAbout,
  inputUserName, inputUserAbout,
  inputPlaceName, inputPlaceUrl, cardsContainer,
  buttonCloseAdd, buttonCloseEdit, buttonCloseImage
} from './variables.js';
import { initialCards } from './data.js';
import { createCard } from './card.js';
import { revalidateForm, enableValidation } from './validate.js';
import {
  closePopup, openPopup,
  closePopupOverlay
} from './modal.js';

const mestoSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type-error',
  errorClass: 'form__input-error_active',
};

initialCards.forEach(function (element) {
  cardsContainer.prepend(createCard(element.link, element.name));
});

buttonOpenEdit.addEventListener('click', openPopupEdit);
buttonOpenAdd.addEventListener('click', openPopupAdd);
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);
popupEdit.addEventListener('click', closePopupOverlay);
popupAdd.addEventListener('click', closePopupOverlay);
popupImage.addEventListener('click', closePopupOverlay);

buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});
buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});
buttonCloseImage.addEventListener('click', function () {
  closePopup(popupImage);
});

function submitFormEdit(event) {
  event.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;
  closePopup(popupEdit);
};

function submitFormAdd(event) {
  event.preventDefault();
  cardsContainer.prepend(createCard(inputPlaceUrl.value, inputPlaceName.value));
  closePopup(popupAdd);
};

function openPopupEdit() {
  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
  revalidateForm(formEdit, mestoSelectors);
  openPopup(popupEdit);
};

function openPopupAdd() {
  inputPlaceName.value = '';
  inputPlaceUrl.value = '';
  revalidateForm(formAdd, mestoSelectors);
  openPopup(popupAdd);
};

enableValidation(mestoSelectors);