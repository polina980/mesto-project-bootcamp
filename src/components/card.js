import { openPopup } from "./utils";


export const popupImage = document.querySelector('#popupImage');

export function createCard(cardLink, cardName) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardNew = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardNew.querySelector('.card__image');
  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardNew.querySelector('.card__title').textContent = cardName;
  cardNew.querySelector('.card__like-button').addEventListener('click', function (event) {
    event.target.classList.toggle('card__like-button_active');
  });
  cardNew.querySelector('.card__delete-button').addEventListener('click', function (event) {
    event.target.closest('.card__item').remove();
  });
  cardImage.addEventListener('click', function () {
    popupImage.querySelector('.popup__image').src = cardLink;
    popupImage.querySelector('.popup__text').textContent = cardName;
    openPopup(popupImage);
  });
  return cardNew;
};