const body = document.querySelector('body');

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  body.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', closePopupEsc);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  body.classList.add('overflow-hidden');
  document.addEventListener('keydown', closePopupEsc);
}

export function closePopupEsc(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}
