import { handleError, userId, likeCard, dislikeCard, deleteServerCard } from "./api.js";
import { openPopup } from "./modal.js";
import { popupImage, popupImg, popupTxt } from "./variables.js";

export function createCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardNew = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardNew.querySelector('.card__image');
  const cardDeleteButton = cardNew.querySelector('.card__delete-button');
  const cardLikeButton = cardNew.querySelector('.card__like-button');
  const likeCounter = cardNew.querySelector('.card__like-counter')
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardNew.id = card._id;
  cardNew.querySelector('.card__title').textContent = card.name;
  cardNew.querySelector('.card__like-counter').textContent = card.likes.length;
  ////Like////
  cardLikeButton.addEventListener('click', function () {
    likedCard(cardNew, cardLikeButton, likeCounter)
  })
  for (let i = 0; i < card.likes.length; i++) {
    if (card.likes[i]._id === userId) {
      cardLikeButton.classList.add('card__like-button_active');
    }
  }
  ////Delete////
  cardDeleteButton.addEventListener('click', function () {
    deleteCard(cardNew)
  })
  if (card.owner._id !== userId) {
    cardDeleteButton.remove()
  }
  ////Full Image////
  cardImage.addEventListener('click', function () {
    popupImg.src = card.link;
    popupImg.alt = card.name;
    popupTxt.textContent = card.name;
    openPopup(popupImage);
  });
  ////New card////
  return cardNew;
};

////Delete////
export function deleteCard(cardNew) {
  return deleteServerCard(cardNew.id)
    .then(() => {
      cardNew.remove();
    })
    .catch(handleError)
}

////Like////
export function likedCard(cardNew, cardLikeButton, likeCounter) {
  if (cardLikeButton.classList.contains('card__like-button_active')) {
    dislikeCard(userId, cardNew.id);
    cardLikeButton.classList.remove('card__like-button_active');
    likeCounter.textContent = Number(likeCounter.textContent) - 1;
  } else {
    likeCard(userId, cardNew.id);
    cardLikeButton.classList.add('card__like-button_active');
    likeCounter.textContent = Number(likeCounter.textContent) + 1;
  }
}