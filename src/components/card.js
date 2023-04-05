import { handleError, likeCard, dislikeCard, deleteServerCard } from "./api.js";
import { closePopup, openPopup } from './modal.js';
import { popupDelete, popupImage, popupImg, popupTxt } from './variables.js';
import { userId } from './index.js'

export let deletedServerCard = null;

export function createCard(card) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardNew = cardTemplate.querySelector('.card__item').cloneNode(true);
  const cardImage = cardNew.querySelector('.card__image');
  const cardDeleteButton = cardNew.querySelector('.card__delete-button');
  const cardLikeButton = cardNew.querySelector('.card__like-button');
  const likeCounter = cardNew.querySelector('.card__like-counter');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardNew.id = card._id;
  cardNew.querySelector('.card__title').textContent = card.name;
  likeCounter.textContent = card.likes.length;

  cardLikeButton.addEventListener('click', function () {
    if (cardLikeButton.classList.contains('card__like-button_active')) {
      deleteLike(cardNew, cardLikeButton, likeCounter)
    } else {
      addLike(cardNew, cardLikeButton, likeCounter)
    }
  })
  for (let i = 0; i < card.likes.length; i++) {
    if (card.likes[i]._id === userId) {
      cardLikeButton.classList.add('card__like-button_active');
    }
  }

  cardDeleteButton.addEventListener('click', function (event) {
    deletedServerCard = event.target.closest('.card__item')
    openPopup(popupDelete);
  })
  if (card.owner._id !== userId) {
    cardDeleteButton.remove()
  }

  cardImage.addEventListener('click', function () {
    popupImg.src = card.link;
    popupImg.alt = card.name;
    popupTxt.textContent = card.name;
    openPopup(popupImage);
  });

  return cardNew;
}

export function deleteCard(event) {
  event.preventDefault();
  return deleteServerCard(deletedServerCard.id)
    .then(function () {
      deletedServerCard.remove();
      closePopup(popupDelete);
      deletedServerCard = null;
    })
    .catch(handleError)
}

function addLike(cardNew, cardLikeButton, likeCounter) {
  return likeCard(cardNew.id)
    .then((card) => {
      cardLikeButton.classList.add('card__like-button_active');
      likeCounter.textContent = card.likes.length;
    })
    .catch(handleError)
}

function deleteLike(cardNew, cardLikeButton, likeCounter) {
  return dislikeCard(cardNew.id)
    .then((card) => {
      cardLikeButton.classList.remove('card__like-button_active');
      likeCounter.textContent = card.likes.length;
    })
    .catch(handleError)
}
