import { closePopup } from './utils.js';
import { createCard } from './card.js';

export const userName = document.querySelector('.profile__title');
export const userAbout = document.querySelector('.profile__text');
export const inputUserName = document.querySelector('#person-input');
export const inputUserAbout = document.querySelector('#about-input');
export const inputPlaceName = document.querySelector('#place-input');
export const inputPlaceUrl = document.querySelector('#url-input');
export const popupEdit = document.querySelector('#popupEdit');
export const popupAdd = document.querySelector('#popupAdd');
export const cardsContainer = document.querySelector('.cards');

export function submitFormEdit(event) {
  event.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;
  closePopup(popupEdit);
};

export function submitFormAdd(event) {
  event.preventDefault();
  cardsContainer.insertAdjacentElement('afterbegin', createCard(inputPlaceUrl.value, inputPlaceName.value));
  closePopup(popupAdd);
};

export function closePopupOverlay(popup) {
  if (popup.target === popup.currentTarget) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

export function closePopupEsc(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};