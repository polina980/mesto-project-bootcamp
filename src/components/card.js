export {createCard};

function createCard(cardLink, cardName) {
  const cardNew = cardTemplate.querySelector('.card__item').cloneNode(true);
  cardNew.querySelector('.card__image').src = cardLink;
  cardNew.querySelector('.card__image').setAttribute('alt', cardName);
  cardNew.querySelector('.card__title').textContent = cardName;
  renderCard(cardNew);


  // Like
  const likeButton = cardNew.querySelector('.card__like-button');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('card__like-button_active');
  }); 


  // Delete Card
  const deleteCard = cardNew.querySelector('.card__trash-button');
  deleteCard.addEventListener('click', function () {
    cardNew.remove();
  });


  // Pop-up Full image
  const buttonOpenImage = cardNew.querySelector('.card__image');
  buttonOpenImage.addEventListener('click', function () {
  const fullscreenImage = document.querySelector('.popup__set');
  fullscreenImage.querySelector('.popup__image').src = cardLink;
  fullscreenImage.querySelector('.popup__image').setAttribute('alt', cardName);
  fullscreenImage.querySelector('.popup__text').textContent = cardName;
  openPopupImage(popupImage);
  });

  function renderCard(cardNew) {
    cardsContainer.prepend(cardNew);
  }
}