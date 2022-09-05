import '../pages/index.css';

import {
  popupAvatar, popupEdit, popupAdd, popupImage,
  profileAvatar, buttonOpenEdit, buttonOpenAdd,
  formAvatar, formEdit, formAdd,
  inputAvatarUrl,
  userName, userAbout, inputUserName, inputUserAbout,
  inputPlaceName, inputPlaceUrl,
  buttonCloseAvatar, buttonCloseAdd, buttonCloseEdit, buttonCloseImage,
  cardsContainer
} from './variables.js';
// import { initialCards } from './data.js';
 import { createCard } from './card.js';
import { revalidateForm, enableValidation } from './validate.js';
import {
  closePopup, openPopup,
  closePopupOverlay
} from './modal.js';
import {
  getServerUserData, getServerInitialCards,
  patchUserData, patchUserAvatar, postNewCard,
  userId
} from './api.js';

const mestoSelectors = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_inactive',
  inputErrorClass: 'form__input_type-error',
  errorClass: 'form__input-error_active',
};

profileAvatar.addEventListener('click', openPopupAvatar);
buttonOpenEdit.addEventListener('click', openPopupEdit);
buttonOpenAdd.addEventListener('click', openPopupAdd);
//buttonOpenDelete.addEventListener('click', openPopupDelete);
formAvatar.addEventListener('submit', submitFormAvatar);
formEdit.addEventListener('submit', submitFormEdit);
formAdd.addEventListener('submit', submitFormAdd);
//formDelete.addEventListener('submit', submitFormDelete);
popupAvatar.addEventListener('click', closePopupOverlay);
popupEdit.addEventListener('click', closePopupOverlay);
popupAdd.addEventListener('click', closePopupOverlay);
popupImage.addEventListener('click', closePopupOverlay);

buttonCloseAvatar.addEventListener('click', function () {
  closePopup(popupAvatar);
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
// buttonCloseDelete.addEventListener('click', function () {
//   closePopup(popupDelete);
// });

function submitFormAvatar(event) {
  event.preventDefault();
  patchUserAvatar();
  closePopup(popupAvatar);
};

function submitFormEdit(event) {
  event.preventDefault();
  patchUserData();
  closePopup(popupEdit);
};

function submitFormAdd(event) {
  event.preventDefault();
  postNewCard();
  closePopup(popupAdd);
};

function openPopupAvatar(event) {
  event.preventDefault();
  inputAvatarUrl.value = '';
  revalidateForm(formAvatar, mestoSelectors);
  openPopup(popupAvatar);
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


getServerUserData();
getServerInitialCards();

/////////////API/////////////
// export let userId;

// Promise.all([getServerUserData(), getServerInitialCards()])
//   .then((result) => {
//     userId = result._id;
//     userName.textContent = result.name;
//     userAbout.textContent = result.about;
//     profileAvatar.style.backgroundImage = `url(${result.avatar})`;

    
// //       Лайк

// //       Карточки?

// })
// .catch((err) => {
//   console.log(err);
// })