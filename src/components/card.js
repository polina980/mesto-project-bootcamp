import { handleLikeCard, handleDislikeCard, handleDeleteCard, userId, dislikeCard, likeCard } from "./api.js";
import { openPopup } from "./modal.js";
import { popupImage, popupImg, popupTxt } from "./variables.js";


export function createCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardNew = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardNew.querySelector('.card__image');
  const cardDeleteButton = cardNew.querySelector('.card__delete-button');
  const cardLikeButton = cardNew.querySelector('.card__like-button');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardNew.id = card._id;
  cardNew.ownerId = card.owner._id;
  cardNew.querySelector('.card__title').textContent = card.name;
  cardNew.querySelector('.card__like-counter').textContent = card.likes.length;
  ///Like///
  cardLikeButton.addEventListener('click', function () {
    if (cardLikeButton.classList.contains('card__like-button_active')) {
      handleDislikeCard(cardNew);
    } else {
      handleLikeCard(cardNew);
    }
  })
  ///Delete///
  if (cardNew.ownerId !== userId) {
    cardDeleteButton.remove();
  } else {
    cardDeleteButton.addEventListener('click', function () {
      handleDeleteCard(cardNew)
    })
  }
  ///Full Image///
  cardImage.addEventListener('click', function () {
    popupImg.src = card.link;
    popupImg.alt = card.name;
    popupTxt.textContent = card.name;
    openPopup(popupImage);
  });
  ///New card///
  return cardNew;
};