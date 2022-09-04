import { likeCard, dislikeCard, userId, deleteServerCard } from "./api.js";
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
  cardLikeButton.addEventListener('click', likedCard)
  ///Delete///
  cardDeleteButton.addEventListener('click', deleteCard)
  if (cardNew.ownerId !== userId) {
    cardDeleteButton.remove()
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


export function deleteCard(card) {
  return deleteServerCard(card.target.closest('.card__item').id)
    .then(() => {
      card.target.closest('.card__item').remove();
    })
    .catch((err) => {
      console.log(err);
    })
}

export function likedCard(card) {
  if (card.target.classList.contains('card__like-button_active')) {
    dislikeCard(userId, card.target.closest('.card__item').id);
    card.target.classList.remove('card__like-button_active');
    card.target.closest('.card__item').querySelector('.card__like-counter').textContent = Number(card.target.closest('.card__item').querySelector('.card__like-counter').textContent) - 1;
  } else {
    likeCard(userId, card.target.closest('.card__item').id);
    card.target.classList.add('card__like-button_active');
    card.target.closest('.card__item').querySelector('.card__like-counter').textContent = Number(card.target.closest('.card__item').querySelector('.card__like-counter').textContent) + 1;
  }
}