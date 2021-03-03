/* global noUiSlider:readonly */
const EFFECT_LEVEL_VALUE = 80;
const Slider = {
  RANGE_MIN: 0,
  RANGE_MAX: 100,
  START: 80,
  STEP: 1,
}

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

sliderElement.classList.add('visually-hidden');
valueElement.value = EFFECT_LEVEL_VALUE;

noUiSlider.create(sliderElement, {
  range: {
    min: Slider.RANGE_MIN,
    max: Slider.RANGE_MAX,
  },
  start: Slider.START,
  step: Slider.STEP,
  connect: 'lower',
});

export { sliderElement, valueElement }
