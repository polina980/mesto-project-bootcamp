export const formElement = document.querySelector('.form');

export const showInputError = (inputElement, errorMessage, selectors) => {
  const formError = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  formError.classList.add(selectors.errorClass);
  formError.textContent = errorMessage;
};

export const hideInputError = (inputElement, selectors) => {
  const formError = document.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  formError.classList.remove(selectors.errorClass);
  formError.textContent = '';
};

export const checkInputValidity = (inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(inputElement, selectors);
  }
};

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

export function revalidateForm (formElement, selectors) {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonSubmit = formElement.querySelector(selectors.submitButtonSelector);
  inputList.forEach(function (inputElement) {
    hideInputError(inputElement, selectors);
  });
  toggleButtonState(inputList, buttonSubmit, selectors);
};

export const toggleButtonState = (inputList, buttonSubmit, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonSubmit.classList.add(selectors.inactiveButtonClass);
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.classList.remove(selectors.inactiveButtonClass);
    buttonSubmit.disabled = false;
  }
};

export const setEventListeners = (selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.formSelector));
  const buttonSubmit = formElement.querySelector(selectors.submitButtonSelector);
  toggleButtonState(inputList, buttonSubmit, selectors);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, selectors);
      toggleButtonState(inputList, buttonSubmit, selectors);
    });
  });
};

export function enableValidation (selectors) {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement, selectors);
  });
};