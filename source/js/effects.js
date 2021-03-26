import { sliderElement, valueElement } from './slider.js';

const Effect = {
  CHROME: {
    NAME: 'chrome',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 0.1,
    UNITS: '',
  },
  SEPIA: {
    NAME: 'sepia',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 0.1,
    UNITS: '',
  },
  MARVIN: {
    NAME: 'marvin',
    RANGE_MIN: 0,
    RANGE_MAX: 100,
    START: 100,
    STEP: 1,
    UNITS: '%',
  },
  PHOBOS: {
    NAME: 'phobos',
    RANGE_MIN: 0,
    RANGE_MAX: 3,
    START: 3,
    STEP: 0.1,
    UNITS: 'px',
  },
  HEAT: {
    NAME: 'heat',
    RANGE_MIN: 1,
    RANGE_MAX: 3,
    START: 3,
    STEP: 0.1,
    UNITS: '',
  },
  NONE: {
    NAME: 'none',
    RANGE_MIN: 0,
    RANGE_MAX: 1,
    START: 1,
    STEP: 1,
    UNITS: '',
  },
};

const uploadPreviewElement = document.querySelector('.img-upload__preview');
const effectsListElement = document.querySelector('.effects__list');

const previewCssFilterUpdate = () => {
  switch (currentFilter) {
    case 'chrome':
      uploadPreviewElement.style.filter = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      uploadPreviewElement.style.filter = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      uploadPreviewElement.style.filter = `invert(${valueElement.value}${Effect.MARVIN.UNITS})`;
      break;
    case 'phobos':
      uploadPreviewElement.style.filter = `blur(${valueElement.value}${Effect.PHOBOS.UNITS})`;
      break;
    case 'heat':
      uploadPreviewElement.style.filter = `brightness(${valueElement.value})`;
      break;
  }
};

let currentFilter = '';

const getEffect = (current) => Effect[current.toUpperCase()];

const onEffectsListElementClick = (evt) => {

  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }

  currentFilter = evt.target.value;

  uploadPreviewElement.className = 'effects__preview--' + currentFilter;

  uploadPreviewElement.classList.add('img-upload__preview');
  sliderElement.classList.add('visually-hidden');
  uploadPreviewElement.style.filter = 'none';

  if (currentFilter !== 'none') {
    sliderElement.classList.remove('visually-hidden');
    uploadPreviewElement.classList.add('effects__preview--' + currentFilter);
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

export { uploadPreviewElement, effectsListElement, onEffectsListElementClick };
