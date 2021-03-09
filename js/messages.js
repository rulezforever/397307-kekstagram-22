
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const main = document.querySelector('main');

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const successMessageFragment = document.createDocumentFragment();
  successMessageFragment.appendChild(successMessageElement);
  return successMessageFragment;
}

const showErrorMessage = () => {
  const errorMessageElement = errorMessageTemplate.cloneNode(true);
  const errorMessageFragment = document.createDocumentFragment();
  errorMessageFragment.appendChild(errorMessageElement);
  return errorMessageFragment;
}
main.appendChild(showErrorMessage());

export { showSuccessMessage, showErrorMessage}



