import { closePopUp } from './upload-picture.js';
import { ESCAPE, hideElement, onPressedKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');

const getSuccessMessageFragment = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const successMessageFragment = document.createDocumentFragment();
  successMessageFragment.appendChild(successMessageElement);
  return successMessageFragment;
}

const getErrorMessageFragment = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorMessageFragment = document.createDocumentFragment();
  errorMessageFragment.appendChild(errorMessageElement);
  return errorMessageFragment;
}

const closeSuccessByEsc = (evt) => {
  onPressedKey(evt,ESCAPE,closeSuccessMessage)
}

const closeErrorByEsc = (evt) => {
  onPressedKey(evt,ESCAPE,closeErrorMessage)
}

const closeMessageByEmptyClick = (evt) => {
  if (evt.target === document.querySelector('.success')) {
    closeSuccessMessage();
  }
  if (evt.target === document.querySelector('.error')) {
    closeErrorMessage();
  }
}
const closeSuccessMessage = () => {
  hideElement(document.querySelector('.success'));
  document.querySelector('.success__button').removeEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', closeSuccessByEsc);
  document.removeEventListener('click', closeMessageByEmptyClick);
}

const renderSuccess = () => {
  main.appendChild(getSuccessMessageFragment());
  document.querySelector('.success__button').addEventListener('click', closeSuccessMessage);
  closePopUp();
  document.addEventListener('keydown', closeErrorByEsc);
  document.addEventListener('click', closeMessageByEmptyClick);
}

const closeErrorMessage = () => {
  hideElement(document.querySelector('.error'));
  document.querySelector('.error__button').removeEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', closeErrorByEsc);
  document.removeEventListener('click', closeMessageByEmptyClick);
}

const renderError = () => {
  main.appendChild(getErrorMessageFragment());
  document.querySelector('.error__button').addEventListener('click', closeErrorMessage);
  closePopUp();
  document.addEventListener('keydown', closeErrorByEsc);
  document.addEventListener('click', closeMessageByEmptyClick);
}

export { renderSuccess, renderError }
