import { showElement, hideElement, isEscEvent } from './util.js';
import { sliderElement, valueElement} from './slider.js';

const upload = document.querySelector('#upload-file');
const changePicture = document.querySelector('.img-upload__overlay');
const cancel = document.querySelector('#upload-cancel');
const body = document.body;

const openChangePicture = () => {
  showElement(changePicture);
  body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeChangePicture();
    }
  });
}

const closeChangePicture = () => {
  hideElement(changePicture);
  body.classList.remove('modal-open');
  upload.value = '';
}

upload.addEventListener('change', openChangePicture)
cancel.addEventListener('click', closeChangePicture)


const uploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__radio');

const changeEffect = (effect) => {
  if (effect.target.value === 'none') {
    uploadPreview.classList.add('effects__preview--none');
    uploadPreview.classList.remove('effects__preview--chrome');
    uploadPreview.classList.remove('effects__preview--sepia');
    uploadPreview.classList.remove('effects__preview--marvin');
    uploadPreview.classList.remove('effects__preview--phobos');
    uploadPreview.classList.remove('effects__preview--heat');
    sliderElement.classList.add('visually-hidden');
    uploadPreview.style.filter = 'none';
  }
  if (effect.target.value === 'chrome') {
    uploadPreview.classList.add('effects__preview--chrome');
    uploadPreview.classList.remove('effects__preview--none');
    uploadPreview.classList.remove('effects__preview--sepia');
    uploadPreview.classList.remove('effects__preview--marvin');
    uploadPreview.classList.remove('effects__preview--phobos');
    uploadPreview.classList.remove('effects__preview--heat');
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `grayscale(${valueElement.value})`;
    });
  }
  if (effect.target.value === 'sepia') {
    uploadPreview.classList.add('effects__preview--sepia');
    uploadPreview.classList.remove('effects__preview--chrome');
    uploadPreview.classList.remove('effects__preview--none');
    uploadPreview.classList.remove('effects__preview--marvin');
    uploadPreview.classList.remove('effects__preview--phobos');
    uploadPreview.classList.remove('effects__preview--heat');
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `sepia(${valueElement.value})`;
    });
  }
  if (effect.target.value === 'marvin') {
    uploadPreview.classList.add('effects__preview--marvin');
    uploadPreview.classList.remove('effects__preview--chrome');
    uploadPreview.classList.remove('effects__preview--sepia');
    uploadPreview.classList.remove('effects__preview--none');
    uploadPreview.classList.remove('effects__preview--phobos');
    uploadPreview.classList.remove('effects__preview--heat');
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `invert(${valueElement.value}%)`;
    });
  }
  if (effect.target.value === 'phobos') {
    uploadPreview.classList.add('effects__preview--phobos');
    uploadPreview.classList.remove('effects__preview--chrome');
    uploadPreview.classList.remove('effects__preview--sepia');
    uploadPreview.classList.remove('effects__preview--marvin');
    uploadPreview.classList.remove('effects__preview--none');
    uploadPreview.classList.remove('effects__preview--heat');
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `blur(${valueElement.value}px)`;
    });
  }
  if (effect.target.value === 'heat') {
    uploadPreview.classList.add('effects__preview--heat');
    uploadPreview.classList.remove('effects__preview--chrome');
    uploadPreview.classList.remove('effects__preview--sepia');
    uploadPreview.classList.remove('effects__preview--marvin');
    uploadPreview.classList.remove('effects__preview--phobos');
    uploadPreview.classList.remove('effects__preview--none');
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `brightness(${valueElement.value})`;
    });
  }
}


effectsRadio.forEach((effect) => {
  effect.addEventListener('change', changeEffect);
});

export { uploadPreview }

