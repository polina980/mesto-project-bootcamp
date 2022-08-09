// Переменная cards
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Pop-up edit-button
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popupEdit');
const userName = document.querySelector('.profile__title');
const userAbout = document.querySelector('.profile__text');
const inputUserName = popupEdit.querySelector('.form__item_user-name');
const inputUserAbout = popupEdit.querySelector('.form__item_user-about');
const formEdit = popupEdit.querySelector('.form');

// Pop-up add-button
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popupAdd');
const inputPlaceName = popupAdd.querySelector('.form__item_place-name');
const inputPlaceUrl = popupAdd.querySelector('.form__item_place-url');
const formAdd = popupAdd.querySelector('.form');

// Images
const popupImage = document.querySelector('#popupImage');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards');
const cardElement = cardTemplate.querySelector('.card__item');

// Function close pop-up
function closePopup(event) {
  const popup = event.target.closest('.popup');
  popup.classList.remove('popup_opened');
}

// Function open pop-up
function openPopup(popup) {
  const buttonClose = popup.querySelector('.popup__close-button');
  buttonClose.addEventListener('click', closePopup);
  popup.classList.add('popup_opened');
  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
}

// Open buttons
buttonOpenAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});

buttonOpenEdit.addEventListener('click', function () {
  openPopup(popupEdit);
});

// Edit form
formEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;
  closePopup(event);
});

// Add form
formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  addCard(inputPlaceUrl.value, inputPlaceName.value);
  formAdd.reset();
  closePopup(event);
});

// Initial cards
initialCards.forEach(function (element) {
  addCard(element.link, element.name);
});

function addCard(link, name) {
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').setAttribute('alt', name);
  cardElement.querySelector('.card__title').textContent = name;

  // Like
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('card__like-button_active');
  }); 

  // Delete Card
  const deleteCard = cardElement.querySelector('.card__trash-button');
  deleteCard.addEventListener('click', function () {
    deleteCard.parentNode.remove();
  });

  // Pop-up Full image
  const buttonOpenImage = cardElement.querySelector('.card__image');
  buttonOpenImage.addEventListener('click', function () {
    const fullscreenImage = document.querySelector('.popup__set');
    fullscreenImage.querySelector('.popup__image').src = link;
    fullscreenImage.querySelector('.popup__image').setAttribute('alt', name);
    fullscreenImage.querySelector('.popup__text').textContent = name;
    openPopup(popupImage);
  });

  cardsContainer.prepend(cardElement);

}