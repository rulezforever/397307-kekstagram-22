import { showElement, hideElement, ESCAPE, onPressedKey } from './util.js';
import { onEffectsClick, effectsList, uploadPreview } from './effects.js';
import { scaleValue, SCALE_VALUE } from './scale.js';
import { sliderElement } from './slider.js';
import { hashtagInput, comment, blockEscPress } from './form-validation.js';

const upload = document.querySelector('#upload-file');
const changePicture = document.querySelector('.img-upload__overlay');
const cancel = document.querySelector('#upload-cancel');
const body = document.body;

const openPopup = () => {

  effectsList.addEventListener('change', onEffectsClick);
  document.addEventListener('keydown',onEscPress)
  cancel.addEventListener('click', closePopUp)
  showElement(changePicture);
  body.classList.add('modal-open');
}

const closePopUp = () => {
  hideElement(changePicture);
  body.classList.remove('modal-open');
  upload.value = '';
  document.removeEventListener('keydown',onEscPress)
  cancel.removeEventListener('click', closePopUp)
  effectsList.removeEventListener('change', onEffectsClick);
  hashtagInput.removeEventListener('keydown', blockEscPress);
  comment.removeEventListener('keydown', blockEscPress);
  uploadPreview.className = 'img-upload__preview';
  uploadPreview.style.filter = 'none';
  scaleValue.value = SCALE_VALUE;
  uploadPreview.style.transform = 'none';
  sliderElement.classList.add('visually-hidden');
}

const onEscPress = (evt) => {
  onPressedKey(evt,ESCAPE,closePopUp)
}

upload.addEventListener('change', openPopup);

export { openPopup, closePopUp}
