import { closePopup } from './utils.js';
import { createCard } from './card';

export const userName = document.querySelector('.profile__title');
export const userAbout = document.querySelector('.profile__text');
export const inputUserName = document.querySelector('#person-input');
export const inputUserAbout = document.querySelector('#about-input');
export const inputPlaceName = document.querySelector('#place-input');
export const inputPlaceUrl = document.querySelector('#url-input');
export const popupEdit = document.querySelector('#popupEdit');
export const popupAdd = document.querySelector('#popupAdd');

export function submitFormEdit(event) {
  event.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;
  closePopup(popupEdit);
};

export function submitFormAdd(event) {
  event.preventDefault();
  createCard(inputPlaceUrl.value, inputPlaceName.value);
  closePopup(popupAdd);
};