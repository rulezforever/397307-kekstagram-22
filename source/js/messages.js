import { onCancelClick } from './upload-picture.js';
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
  onPressedKey(evt,ESCAPE,onSuccessBtnClick)
}

const onErrorCloseByEsc = (evt) => {
  onPressedKey(evt,ESCAPE,onErrorBtnClick)
}

const onMessageCloseByEmptyClick = (evt) => {
  if (evt.target === document.querySelector('.success')) {
    onSuccessBtnClick();
  }
  if (evt.target === document.querySelector('.error')) {
    onErrorBtnClick();
  }
}
const onSuccessBtnClick = () => {
  document.querySelector('.success__button').removeEventListener('click', onSuccessBtnClick);
  document.removeEventListener('keydown', onSuccessCloseByEsc);
  document.removeEventListener('click', onMessageCloseByEmptyClick);
  document.querySelector('.success').remove();
}

const renderSuccess = () => {
  mainElement.appendChild(getSuccessMessageFragment());
  document.querySelector('.success__button').addEventListener('click', onSuccessBtnClick);
  onCancelClick();
  document.addEventListener('keydown', onSuccessCloseByEsc);
  document.addEventListener('click', onMessageCloseByEmptyClick);
}

const onErrorBtnClick = () => {
  document.querySelector('.error__button').removeEventListener('click', onErrorBtnClick);
  document.removeEventListener('keydown', onErrorCloseByEsc);
  document.removeEventListener('click', onMessageCloseByEmptyClick);
  document.querySelector('.error').remove();
}

const renderError = () => {
  mainElement.appendChild(getErrorMessageFragment());
  document.querySelector('.error__button').addEventListener('click', onErrorBtnClick);
  onCancelClick();
  document.addEventListener('keydown', onErrorCloseByEsc);
  document.addEventListener('click', onMessageCloseByEmptyClick);
}

export { renderSuccess, renderError }
