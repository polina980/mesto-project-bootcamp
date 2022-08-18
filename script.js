// Массив cards
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
const inputUserName = popupEdit.querySelector('#person-input');
const inputUserAbout = popupEdit.querySelector('#about-input');
const formEdit = popupEdit.querySelector('#edit');
const inputEdit = formEdit.querySelector('.form__input');


// Pop-up add-button
const buttonOpenAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popupAdd');
const inputPlaceName = popupAdd.querySelector('#place-input');
const inputPlaceUrl = popupAdd.querySelector('#url-input');
const formAdd = popupAdd.querySelector('#add');
const inputAdd = formAdd.querySelector('.form__input');


// Images
const popupImage = document.querySelector('#popupImage');
const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.cards');
const cardNew = cardTemplate.querySelector('.card__input');


// Function close pop-up
function closePopup(event) {
  const popup = event.target.closest('.popup');
  popup.classList.remove('popup_opened');
}


// Function open pop-up
function openPopupEdit(popup) {
  const buttonClose = popup.querySelector('.popup__close-button');
  buttonClose.addEventListener('click', closePopup);
  popup.classList.add('popup_opened');
  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
}

function openPopupAdd(popup) {
  const buttonClose = popup.querySelector('.popup__close-button');
  buttonClose.addEventListener('click', closePopup);
  popup.classList.add('popup_opened');
}

function openPopupImage(popup) {
  const buttonClose = popup.querySelector('.popup__close-button');
  buttonClose.addEventListener('click', closePopup);
  popup.classList.add('popup_opened');
}


// Open buttons
buttonOpenAdd.addEventListener('click', function () {
  openPopupAdd(popupAdd);
});

buttonOpenEdit.addEventListener('click', function () {
  openPopupEdit(popupEdit);
});


// Edit form
const showInputEditError = (formEdit, inputEdit, errorMessage) => {
  const formEditError = formEdit.querySelector(`.${inputEdit.id}-error`);
  inputEdit.classList.add('form__input_type-error');
  formEditError.textContent = errorMessage;
  formEditError.classList.add('.form__input-error');
};

const hideInputEditError = (formEdit, inputEdit) => {
  const formEditError = formEdit.querySelector(`.${inputEdit.id}-error`);
  inputEdit.classList.remove('form__input_type-error');
  formEditError.classList.remove('.form__input-error');
  formEditError.textContent = '';
};

const checkInputEditValidity = (formEdit, inputEdit) => {  
  if (!inputEdit.validity.valid) {
    showInputEditError(formEdit, inputEdit, inputEdit.validationMessage);
  } else {
    hideInputEditError(formEdit, inputEdit);
  }
};

const hasInvalidInputEdit = (inputListEdit) => {
  return inputListEdit.some((inputEdit) => {
    return !inputEdit.validity.valid;
  })
};

const toggleButtonStateEdit = (inputListEdit, buttonSubmitEdit) => {
  if (hasInvalidInputEdit(inputListEdit)) {
    buttonSubmitEdit.classList.add('form__submit-button_inactive');
    buttonSubmitEdit.disabled = true;
  } else {
    buttonSubmitEdit.classList.remove('form__submit-button_inactive');
    buttonSubmitEdit.disabled = false;
  }
};

const setEventEditListeners = (formEdit) => {
  const inputListEdit = Array.from(formEdit.querySelectorAll('.form__input'));
  const buttonSubmitEdit = formEdit.querySelector('.form__submit-button');
  toggleButtonStateEdit(inputListEdit, buttonSubmitEdit);
  inputListEdit.forEach((inputEdit) => {
    inputEdit.addEventListener('input', function () {
      checkInputEditValidity(formEdit, inputEdit);
      toggleButtonStateEdit(inputListEdit, buttonSubmitEdit);
    });
  });
};

const enableValidationEdit = () => {
  const formListEdit = Array.from(document.querySelectorAll('#edit'));
  formListEdit.forEach((formEdit) => {
    formEdit.addEventListener('submit', function (event) {
      event.preventDefault();
      userName.textContent = inputUserName.value;
      userAbout.textContent = inputUserAbout.value;
      closePopup(event);
    });
    setEventEditListeners(formEdit);
  });
};
enableValidationEdit();


// Add form
const showInputAddError = (formAdd, inputAdd, errorMessage) => {
  const formAddError = formAdd.querySelector(`.${inputAdd.id}-error`);
  inputAdd.classList.add('form__input_type-error');
  formAddError.textContent = errorMessage;
  formAddError.classList.add('.form__input-error');
};

const hideInputAddError = (formAdd, inputAdd) => {
  const formAddError = formAdd.querySelector(`.${inputAdd.id}-error`);
  inputAdd.classList.remove('form__input_type-error');
  formAddError.classList.remove('.form__input-error');
  formAddError.textContent = '';
};

const checkInputAddValidity = (formAdd, inputAdd) => {
  if (!inputAdd.validity.valid) {
    showInputAddError(formAdd, inputAdd, inputAdd.validationMessage);
  } else {
    hideInputAddError(formAdd, inputAdd);
  }
};

const hasInvalidInputAdd = (inputListAdd) => {
  return inputListAdd.some((inputAdd) => {
    return !inputAdd.validity.valid;
  })
};

const toggleButtonStateAdd = (inputListAdd, buttonSubmitAdd) => {
  if (hasInvalidInputAdd(inputListAdd)) {
    buttonSubmitAdd.classList.add('form__submit-button_inactive');
    buttonSubmitAdd.disabled = true;
  } else {
    buttonSubmitAdd.classList.remove('form__submit-button_inactive');
    buttonSubmitAdd.disabled = false;
  }
};

const setEventAddListeners = (formAdd) => {
  const inputListAdd = Array.from(formAdd.querySelectorAll('.form__input'));
  const buttonSubmitAdd = formAdd.querySelector('.form__submit-button');
  toggleButtonStateAdd(inputListAdd, buttonSubmitAdd);
  inputListAdd.forEach((inputAdd) => {
    inputAdd.addEventListener('input', () => {
      checkInputAddValidity(formAdd, inputAdd);
      toggleButtonStateAdd(inputListAdd, buttonSubmitAdd);
    });
  });
};

const enableValidationAdd = () => {
  const formListAdd = Array.from(popupAdd.querySelectorAll('#add'));
  formListAdd.forEach((formAdd) => {
    formAdd.addEventListener('submit', function (event) {
      event.preventDefault();
      createCard(inputPlaceUrl.value, inputPlaceName.value);
      formAdd.reset();
      closePopup(event);
    });
    setEventAddListeners(formAdd);
  });
};
enableValidationAdd();


// Initial cards
initialCards.forEach(function (element) {
  createCard(element.link, element.name);
});

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