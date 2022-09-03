import { likeCard, dislikeCard, handleDeleteCard, userId } from "./api.js";
import { openPopup } from "./modal.js";
import { popupImage, popupImg, popupTxt } from "./variables.js";


export function createCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardNew = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardNew.querySelector('.card__image');
  const cardDeleteButton = cardNew.querySelector('.card__delete-button');
  const cardLikeButton = cardNew.querySelector('.card__like-button');
  const likesCounter = cardNew.querySelector('.card__like-counter');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardNew.id = card._id;
  cardNew.likes = card.likes.length;
  cardNew.ownerId = card.owner._id;
  cardNew.querySelector('.card__title').textContent = card.name;
  ///Like///
  cardLikeButton.addEventListener('click', function () {
    if (cardLikeButton.classList.contains('card__like-button_active')) { //dislike
      cardLikeButton.classList.remove('card__like-button_active');
      likesCounter.textContent = Number(likesCounter.textContent) - 1;
    } else { //like
      cardLikeButton.classList.add('card__like-button_active');
      likesCounter.textContent = Number(likesCounter.textContent) + 1;
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