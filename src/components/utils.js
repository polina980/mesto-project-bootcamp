export function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
};

export function closePopupOverlay(popup) {
  if (popup.target === popup.currentTarget) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};