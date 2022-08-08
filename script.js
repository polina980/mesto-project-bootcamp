// POP-UP
// Edit-button
const buttonOpenEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popupEdit');
const userName = document.querySelector('.profile__title');
const userAbout = document.querySelector('.profile__text');
const inputUserName = popupEdit.querySelector('.form__item_user-name');
const inputUserAbout = popupEdit.querySelector('.form__item_user-about');
const formEdit = popupEdit.querySelector('#edit-profile');

// Add-button
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popupAdd');
const formAdd = popupAdd.querySelector('#add-new-place');


// Functions
function closePopup(event) {
  const popup = event.target.closest('.popup');
  popup.classList.add('popup_hidden');
}

function openPopup(popup) {
  const buttonClose = popup.querySelector('.popup__close-button');
  buttonClose.addEventListener('click', closePopup);
  popup.classList.remove('popup_hidden');

  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
}

// Buttons
buttonOpenAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});

buttonOpenEdit.addEventListener('click', function () {
  openPopup(popupEdit);
});

// Forms
formEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;

  closePopup(event);
});

formAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;

  closePopup(event);
});

// CARDS
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

const cardTemplate = document.querySelector('#card-template').content;
const cards = document.querySelector('.cards');
const cardElement = cardTemplate.querySelector('.card__item');

// Initial cards
initialCards.forEach(function (element) {
const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
cardElement.querySelector('.card__image').src = element.link;
cardElement.querySelector('.card__title').textContent = element.name;

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

// Add new card
///////////////


// Pop-up Full image
const buttonOpenImage = cardElement.querySelector('.card__image');
const popupImage = document.querySelector('#popupImage');
buttonOpenImage.addEventListener('click', function () {
const fullscreenImage = document.querySelector('.popup__image-set');
fullscreenImage.querySelector('.popup__image-set_full').src = element.link;
fullscreenImage.querySelector('.popup__image-set_description').textContent = element.name;
openPopup(popupImage);
});

cards.prepend(cardElement);
});