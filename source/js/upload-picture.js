import { showElement, hideElement, ESCAPE, onPressedKey } from './util.js';
import { onEffectsClick, effectsListElement, uploadPreviewElement } from './effects.js';
import { scaleValueElement, SCALE_VALUE } from './scale.js';
import { sliderElement } from './slider.js';
import { hashtagInputElement, commentElement, onEscPressBlock } from './form-validation.js';
import { bodyElement } from './big-picture.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const previewElement = document.querySelector('.img-upload__img');
const uploadElement = document.querySelector('#upload-file');
const changePictureElement = document.querySelector('.img-upload__overlay');
const cancelElement = document.querySelector('#upload-cancel');

const onPopupOpen = () => {
  effectsListElement.addEventListener('change', onEffectsClick);
  document.addEventListener('keydown', onEscPress);
  cancelElement.addEventListener('click', onPopupClose);
  showElement(changePictureElement );
  bodyElement.classList.add('modal-open');
  const file = uploadElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      previewElement.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
}

const onPopupClose = () => {
  hideElement(changePictureElement );
  bodyElement.classList.remove('modal-open');
  uploadElement.value = '';
  document.removeEventListener('keydown', onEscPress);
  cancelElement.removeEventListener('click', onPopupClose);
  effectsListElement.removeEventListener('change', onEffectsClick);
  hashtagInputElement.removeEventListener('keydown', onEscPressBlock);
  commentElement.removeEventListener('keydown', onEscPressBlock);
  uploadPreviewElement.className = 'img-upload__preview';
  uploadPreviewElement.style.filter = 'none';
  scaleValueElement.value = SCALE_VALUE;
  uploadPreviewElement.style.transform = 'none';
  sliderElement.classList.add('visually-hidden');
  hashtagInputElement.value = '';
  commentElement.value ='';
}

const onEscPress = (evt) => {
  onPressedKey(evt, ESCAPE, onPopupClose);
}

uploadElement.addEventListener('change', onPopupOpen);

export { onPopupClose }
