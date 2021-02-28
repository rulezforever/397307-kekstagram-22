import { showElement, hideElement, ESCAPE, onPressedKey } from './util.js';
import { effectsRadio, onEffectsClick} from './effects.js';

const upload = document.querySelector('#upload-file');
const changePicture = document.querySelector('.img-upload__overlay');
const cancel = document.querySelector('#upload-cancel');
const body = document.body;

const openPopup = () => {

  effectsRadio.forEach((effect) => {
    effect.addEventListener('change', onEffectsClick);
  });
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
  effectsRadio.forEach((effect) => {
    effect.removeEventListener('change', onEffectsClick);
  });
}

const onEscPress = (evt) => {
  onPressedKey(evt, ESCAPE, closePopUp)
}

upload.addEventListener('change', openPopup);

