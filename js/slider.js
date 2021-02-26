const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

sliderElement.classList.add('visually-hidden');
valueElement.value = 80;

// eslint-disable-next-line no-undef
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 1,
  connect: 'lower',
});

export { sliderElement, valueElement }
