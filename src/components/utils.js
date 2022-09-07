export function renderLoading(loading, popup) {
  const popupSave = popup.querySelector('.form__submit-button')
  if (loading) {
    popupSave.textContent = 'Сохранение...'
  } else {
    popupSave.textContent = 'Сохранить'
  }
}