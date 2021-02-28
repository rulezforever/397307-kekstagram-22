import { sliderElement, valueElement } from './slider.js';

const Effects = {
  CHROME : {
    NAME : 'chrome',
    RANGE_MIN : 0,
    RANGE_MAX : 1,
    START : 1,
    STEP : 0.1,
    UNITS : '',
  },
  SEPIA : {
    NAME : 'sepia',
    RANGE_MIN : 0,
    RANGE_MAX : 1,
    START : 1,
    STEP : 0.1,
    UNITS : '',
  },
  MARVIN : {
    NAME : 'marvin',
    RANGE_MIN : 0,
    RANGE_MAX : 100,
    START : 100,
    STEP : 1,
    UNITS : '%',
  },
  PHOBOS : {
    NAME : 'phobos',
    RANGE_MIN : 0,
    RANGE_MAX : 3,
    START : 3,
    STEP : 0.1,
    UNITS : 'px',
  },
  HEAT : {
    NAME : 'heat',
    RANGE_MIN : 1,
    RANGE_MAX : 3,
    START : 3,
    STEP : 0.1,
    UNITS : '',
  },
};


const uploadPreview = document.querySelector('.img-upload__preview');
const effectsRadio = document.querySelectorAll('.effects__radio');

const onEffectsClick = (effect) => {
  let currentFilter;
  const changeFilter = (filterName) => {
    if (currentFilter) {
      uploadPreview.classList.remove(currentFilter);
    }
    uploadPreview.classList.add(filterName);
    currentFilter = filterName;
  };

  if (effect.target.value === 'none') {
    changeFilter('effects__preview--none');
    sliderElement.classList.add('visually-hidden');
    uploadPreview.style.filter = 'none';
  } else {
    sliderElement.classList.remove('visually-hidden');
  }
  if (effect.target.value === 'chrome') {
    changeFilter('effects__preview--chrome');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: Effects.CHROME.RANGE_MIN,
        max: Effects.CHROME.RANGE_MAX,
      },
      start: Effects.CHROME.START,
      step: Effects.CHROME.STEP,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `grayscale(${valueElement.value})`;
    });
  }
  if (effect.target.value === 'sepia') {
    changeFilter('effects__preview--sepia');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: Effects.SEPIA.RANGE_MIN,
        max: Effects.SEPIA.RANGE_MAX,
      },
      start: Effects.SEPIA.START,
      step: Effects.SEPIA.STEP,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `sepia(${valueElement.value})`;
    });
  }
  if (effect.target.value === 'marvin') {
    changeFilter('effects__preview--marvin');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: Effects.MARVIN.RANGE_MIN,
        max: Effects.MARVIN.RANGE_MAX,
      },
      start: Effects.MARVIN.START,
      step: Effects.MARVIN.STEP,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `invert(${valueElement.value}${Effects.MARVIN.UNITS})`;
    });
  }
  if (effect.target.value === 'phobos') {
    changeFilter('effects__preview--phobos');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: Effects.PHOBOS.RANGE_MIN,
        max: Effects.PHOBOS.RANGE_MAX,
      },
      start: Effects.PHOBOS.START,
      step: Effects.PHOBOS.STEP,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `blur(${valueElement.value}${Effects.PHOBOS.UNITS})`;
    });
  }
  if (effect.target.value === 'heat') {
    changeFilter('effects__preview--heat');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: Effects.HEAT.RANGE_MIN,
        max: Effects.HEAT.RANGE_MAX,
      },
      start: Effects.HEAT.START,
      step: Effects.HEAT.STEP,
    });
    sliderElement.noUiSlider.on('update', (values, handle) => {
      valueElement.value = values[handle];
      uploadPreview.style.filter = `brightness(${valueElement.value})`;
    });
  }
}

export { Effects, uploadPreview, effectsRadio, onEffectsClick };
