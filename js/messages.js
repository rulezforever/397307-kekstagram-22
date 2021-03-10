import { closePopUp } from './upload-picture.js';
import { ESCAPE, hideElement } from './util.js';

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

const renderSuccess = () => {
  main.appendChild(getSuccessMessageFragment());
  const successButton = document.querySelector('.success__button');
  const successSection = document.querySelector('.success');
  const closeSuccessMessage = () => {
    hideElement(successSection);
    successButton.removeEventListener('click', closeSuccessMessage);
  }
  successButton.addEventListener('click', closeSuccessMessage);
  closePopUp();
  document.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      closeSuccessMessage();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target === successSection) {
      closeSuccessMessage();
    }
  });
}

const renderError = () => {
  main.appendChild(getErrorMessageFragment());
  const errorButton = document.querySelector('.error__button');
  const errorSection = document.querySelector('.error');
  const closeErrorMessage = () => {
    hideElement(errorSection);
    errorButton.removeEventListener('click', closeErrorMessage);
  }
  errorButton.addEventListener('click', closeErrorMessage);
  closePopUp();
  document.addEventListener('keydown', (evt) => {
    if (evt.key === ESCAPE) {
      closeErrorMessage();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target === errorSection) {
      closeErrorMessage();
    }
  });
}

export { renderSuccess, renderError }
