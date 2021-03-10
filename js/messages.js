import { closePopUp } from './upload-picture.js';
import { hideElement } from './util.js';

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

const showMessage = (message) => {
  if (message === 'Error') {
    main.appendChild(getErrorMessageFragment());
    const errorButton = document.querySelector('.error__button');
    const errorSection = document.querySelector('.error');
    const closeErrorMessage = () => {
      hideElement(errorSection);
      errorButton.removeEventListener('click', closeErrorMessage);
    }
    errorButton.addEventListener('click', closeErrorMessage)
  }
  if (message === 'Success') {
    main.appendChild(getSuccessMessageFragment());
    const successButton = document.querySelector('.success__button');
    const successSection = document.querySelector('.success');
    const closeSuccessMessage = () => {
      hideElement(successSection);
      successButton.removeEventListener('click', closeSuccessMessage);
    }
    successButton.addEventListener('click', closeSuccessMessage);
  }
}

const renderSuccess = () => {
  showMessage('Success');
  closePopUp();
}

const renderError = () => {
  showMessage('Error');
  closePopUp();
}

export { renderSuccess, renderError }
