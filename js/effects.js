import { sliderElement, valueElement } from './slider.js';

const Effects = {
  chrome: {
    NAME: 'chrome',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 0.1,
    UNITS: '',
  },
  sepia: {
    NAME: 'sepia',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 0.1,
    UNITS: '',
  },
  marvin: {
    NAME: 'marvin',
    RANGE_MIN: 0,
    RANGE_MAX: 100,
    START: 100,
    STEP: 1,
    UNITS: '%',
  },
  phobos: {
    NAME: 'phobos',
    RANGE_MIN: 0,
    RANGE_MAX: 3,
    START: 3,
    STEP: 0.1,
    UNITS: 'px',
  },
  heat: {
    NAME: 'heat',
    RANGE_MIN: 1,
    RANGE_MAX: 3,
    START: 3,
    STEP: 0.1,
    UNITS: '',
  },
  none: {
    NAME: 'none',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 1,
    UNITS: '',
  },
};

const uploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__radio');
const effectsList = document.querySelector('.effects__list');

const previewCssFilterUpdate = () => {
  switch (currentFilter) {
    case 'chrome':
      uploadPreview.style.filter = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      uploadPreview.style.filter = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      uploadPreview.style.filter = `invert(${valueElement.value}${Effects.marvin.UNITS})`;
      break;
    case 'phobos':
      uploadPreview.style.filter = `blur(${valueElement.value}${Effects.phobos.UNITS})`;
      break;
    case 'heat':
      uploadPreview.style.filter = `brightness(${valueElement.value})`;
      break;
  }
};

let currentFilter = '';

const getEffect = (current) => Effects[current];

const onEffectsClick = (evt) => {

  if (!evt.target.matches('input[type="radio"]')) return;

  currentFilter = evt.target.value;

  const allClasses = Array.from(uploadPreview.classList);

  allClasses.forEach(
    (item) => {
      if (item !== 'img-upload__preview') {
        uploadPreview.classList.remove(item);
      }
    });

  uploadPreview.classList.add('img-upload__preview');
  sliderElement.classList.add('visually-hidden');
  uploadPreview.style.filter = 'none';

  if (currentFilter !== 'none') {
    sliderElement.classList.remove('visually-hidden');
    uploadPreview.classList.add('effects__preview--' + currentFilter);
  }

  const newEffect = getEffect(currentFilter);

  previewCssFilterUpdate()

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: newEffect.RANGE_MIN,
      max: newEffect.RANGE_MAX,
    },
    start: newEffect.START,
    step: newEffect.STEP,
  });
}

sliderElement.noUiSlider.on('update',
  (values, handle) => {
    valueElement.value = values[handle]
    previewCssFilterUpdate();
  });

export { Effects, uploadPreview, effectsRadio, onEffectsClick, effectsList };
