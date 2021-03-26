import { showElement, hideElement, ESCAPE, onPressedKey } from './util.js';
import { onEffectsListElementClick, effectsListElement, uploadPreviewElement } from './effects.js';
import { scaleValueElement, SCALE_VALUE } from './scale.js';
import { sliderElement } from './slider.js';
import { hashtagInputElement, commentElement, onFormElementEscPressBlock } from './form-validation.js';
import { bodyElement } from './big-picture.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const previewElement = document.querySelector('.img-upload__img');
const uploadElement = document.querySelector('#upload-file');
const changePictureElement = document.querySelector('.img-upload__overlay');
const cancelElement = document.querySelector('#upload-cancel');

const onPopupOpen = () => {
  effectsListElement.addEventListener('change', onEffectsListElementClick);
  document.addEventListener('keydown', onDocumentEscPress);
  cancelElement.addEventListener('click', onCancelClick);
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

const onCancelClick = () => {
  hideElement(changePictureElement );
  bodyElement.classList.remove('modal-open');
  uploadElement.value = '';
  document.removeEventListener('keydown', onDocumentEscPress);
  cancelElement.removeEventListener('click', onCancelClick);
  effectsListElement.removeEventListener('change', onEffectsListElementClick);
  hashtagInputElement.removeEventListener('keydown', onFormElementEscPressBlock);
  commentElement.removeEventListener('keydown', onFormElementEscPressBlock);
  uploadPreviewElement.className = 'img-upload__preview';
  uploadPreviewElement.style.filter = 'none';
  scaleValueElement.value = SCALE_VALUE;
  uploadPreviewElement.style.transform = 'none';
  sliderElement.classList.add('visually-hidden');
  hashtagInputElement.value = '';
  commentElement.value ='';
}

const onDocumentEscPress = (evt) => {
  onPressedKey(evt, ESCAPE, onCancelClick);
}

uploadElement.addEventListener('change', onPopupOpen);

export { onCancelClick }
