import { closePopUp } from './upload-picture.js';
import { ESCAPE, hideElement, onPressedKey } from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');
const successButton = document.querySelector('.success__button');
const successSection = document.querySelector('.success');
const errorButton = document.querySelector('.error__button');
const errorSection = document.querySelector('.error');

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

const closeSuccessByEmptyClick = (evt) => {
  if (evt.target === successSection) {
    closeSuccessMessage();
  }
}

const closeErrorByEmptyClick = (evt) => {
  if (evt.target === errorSection) {
    closeErrorMessage();
  }
}
const closeSuccessMessage = () => {
  hideElement(successSection);
  successButton.removeEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', closeSuccessByEsc);
  document.removeEventListener('click', closeSuccessByEmptyClick);
}

const renderSuccess = () => {
  main.appendChild(getSuccessMessageFragment());
  // const successButton = document.querySelector('.success__button');
  // const successSection = document.querySelector('.success');

  // const closeSuccessMessage = () => {
  //   hideElement(successSection);
  //   successButton.removeEventListener('click', closeSuccessMessage);
  //   document.removeEventListener('keydown', (evt) => {
  //     if (evt.key === ESCAPE) {
  //       closeSuccessMessage();
  //     }
  //   });
  //   document.removeEventListener('click', (evt) => {
  //     if (evt.target === successSection) {
  //       closeSuccessMessage();
  //     }
  //   });
  // }

  successButton.addEventListener('click', closeSuccessMessage);
  closePopUp();
  document.addEventListener('keydown', closeErrorByEsc);
  document.addEventListener('click', closeSuccessByEmptyClick);
}

const closeErrorMessage = () => {
  hideElement(errorSection);
  errorButton.removeEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', closeErrorByEsc);
  document.removeEventListener('click', closeErrorByEmptyClick);
}

const renderError = () => {
  main.appendChild(getErrorMessageFragment());
  // const errorButton = document.querySelector('.error__button');
  // const errorSection = document.querySelector('.error');

  // const closeErrorMessage = () => {
  //   hideElement(errorSection);
  //   errorButton.removeEventListener('click', closeErrorMessage);
  //   document.removeEventListener('keydown', (evt) => {
  //     if (evt.key === ESCAPE) {
  //       closeErrorMessage();
  //     }
  //   });
  //   document.removeEventListener('click', (evt) => {
  //     if (evt.target === errorSection) {
  //       closeErrorMessage();
  //     }
  //   });
  // }

  errorButton.addEventListener('click', closeErrorMessage);
  closePopUp();
  document.addEventListener('keydown', closeErrorByEsc);
  document.addEventListener('click', closeErrorByEmptyClick);
}

export { renderSuccess, renderError }
