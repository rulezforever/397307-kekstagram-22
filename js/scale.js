import { uploadPreviewElement } from './effects.js';

const SCALE_VALUE = '100%';

const ResizeValue = new Map();
ResizeValue.STEP = 25;
ResizeValue.MIN = 25;
ResizeValue.DEFAULT = 100;
ResizeValue.MAX = 100;

const scaleValueElement = document.querySelector('.scale__control--value');
const scaleMinusElement = document.querySelector('.scale__control--smaller');
const scalePlusElement = document.querySelector('.scale__control--bigger');

scaleValueElement.value = SCALE_VALUE;

const changeScale = (value) => {
  scaleValueElement.value = `${value}%`;
  const scaleFloat = (parseInt(value) / 100).toFixed(2);
  uploadPreviewElement.style.transform = `scale(${scaleFloat})`;
}

const changeResizeValue = (action) => {
  const currentValue = parseInt(scaleValueElement.value);

  const resizedValue = action === 'decrease' ? currentValue - ResizeValue.STEP : currentValue + ResizeValue.STEP;
  if (resizedValue >= ResizeValue.MIN && resizedValue <= ResizeValue.MAX) {
    changeScale(resizedValue);
  }
}

const onMinusBtnClick =  () => changeResizeValue('decrease');
const onPlusBtnClick = () => changeResizeValue('increase');

scaleMinusElement.addEventListener('click', onMinusBtnClick);
scalePlusElement.addEventListener('click', onPlusBtnClick);

export { changeScale, scaleValueElement, SCALE_VALUE}
