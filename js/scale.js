import { uploadPreview } from './effects.js';

const scaleValue = document.querySelector('.scale__control--value');
const scaleMinus = document.querySelector('.scale__control--smaller');
const scalePlus = document.querySelector('.scale__control--bigger');

const ResizeValue = new Map();
ResizeValue.STEP = 25;
ResizeValue.MIN = 25;
ResizeValue.DEFAULT = 100;
ResizeValue.MAX = 100;

const SCALE_VALUE = '100%';
scaleValue.value = SCALE_VALUE;

const changeScale = (value) => {
  scaleValue.value = `${value}%`;
  const scaleFloat = (parseInt(value) / 100).toFixed(2);
  uploadPreview.style.transform = `scale(${scaleFloat})`;
}

const changeResizeValue = (action) => {
  const currentValue = parseInt(scaleValue.value);

  const resizedValue = action === 'decrease' ? currentValue - ResizeValue.STEP : currentValue + ResizeValue.STEP;
  if (resizedValue >= ResizeValue.MIN && resizedValue <= ResizeValue.MAX) {
    changeScale(resizedValue);
  }
}

const onMinusBtnClick =  () => changeResizeValue('decrease');
const onPlusBtnClick = () => changeResizeValue('increase');

scaleMinus.addEventListener('click', onMinusBtnClick);
scalePlus.addEventListener('click', onPlusBtnClick);

export { changeScale, scaleValue, SCALE_VALUE}
