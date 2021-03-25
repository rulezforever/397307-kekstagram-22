import { onPopupClose } from './upload-picture.js';
import { ESCAPE, onPressedKey } from './util.js';

const successMessageTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplateElement = document.querySelector('#error').content.querySelector('.error');
const mainElement = document.querySelector('main');

const getSuccessMessageFragment = () => {
  const successMessageElement = successMessageTemplateElement.cloneNode(true);
  const successMessageFragment = document.createDocumentFragment();
  successMessageFragment.appendChild(successMessageElement);
  return successMessageFragment;
}

const getErrorMessageFragment = () => {
  const errorMessageElement = errorMessageTemplateElement.cloneNode(true);
  const errorMessageFragment = document.createDocumentFragment();
  errorMessageFragment.appendChild(errorMessageElement);
  return errorMessageFragment;
}

const onSuccessCloseByEsc = (evt) => {
  onPressedKey(evt,ESCAPE,onSuccessMessageClose)
}

const onErrorCloseByEsc = (evt) => {
  onPressedKey(evt,ESCAPE,onErrorMessageClose)
}

const onMessageCloseByEmptyClick = (evt) => {
  if (evt.target === document.querySelector('.success')) {
    onSuccessMessageClose();
  }
  if (evt.target === document.querySelector('.error')) {
    onErrorMessageClose();
  }
}
const onSuccessMessageClose = () => {
  document.querySelector('.success__button').removeEventListener('click', onSuccessMessageClose);
  document.removeEventListener('keydown', onSuccessCloseByEsc);
  document.removeEventListener('click', onMessageCloseByEmptyClick);
  document.querySelector('.success').remove();
}

const renderSuccess = () => {
  mainElement.appendChild(getSuccessMessageFragment());
  document.querySelector('.success__button').addEventListener('click', onSuccessMessageClose);
  onPopupClose();
  document.addEventListener('keydown', onSuccessCloseByEsc);
  document.addEventListener('click', onMessageCloseByEmptyClick);
}

const onErrorMessageClose = () => {
  document.querySelector('.error__button').removeEventListener('click', onErrorMessageClose);
  document.removeEventListener('keydown', onErrorCloseByEsc);
  document.removeEventListener('click', onMessageCloseByEmptyClick);
  document.querySelector('.error').remove();
}

const renderError = () => {
  mainElement.appendChild(getErrorMessageFragment());
  document.querySelector('.error__button').addEventListener('click', onErrorMessageClose);
  onPopupClose();
  document.addEventListener('keydown', onErrorCloseByEsc);
  document.addEventListener('click', onMessageCloseByEmptyClick);
}

export { renderSuccess, renderError }
