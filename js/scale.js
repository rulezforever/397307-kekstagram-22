import { uploadPreview } from './effects.js';

const scaleValue = document.querySelector('.scale__control--value');
const scaleMinus = document.querySelector('.scale__control--smaller');
const scalePlus = document.querySelector('.scale__control--bigger');

const ResizeValue = new Map();
ResizeValue.STEP = 25;
ResizeValue.MIN = 25;
ResizeValue.DEFAULT = 100;
ResizeValue.MAX = 100;


scaleValue.value = '100%';
scaleMinus.addEventListener('click', () => {
  if (parseInt(scaleValue.value) <= ResizeValue.MIN) {
    return -1;
  } else {
    scaleValue.value = parseInt(scaleValue.value) - ResizeValue.STEP + '%';
    const scaleFloat = (parseInt(scaleValue.value) / 100).toFixed(2);
    uploadPreview.style.transform = `scale(${scaleFloat})`;
  }
});
scalePlus.addEventListener('click', () => {
  if (parseInt(scaleValue.value) >= ResizeValue.MAX) {
    return -1;
  } else {
    scaleValue.value = parseInt(scaleValue.value) + ResizeValue.STEP + '%';
    const scaleFloat = (parseInt(scaleValue.value) / 100).toFixed(2);
    uploadPreview.style.transform = `scale(${scaleFloat})`;
  }
});

// const changeResizeValue = () => {
//   const currentValue = parseInt(scaleValue.value);

//   const resizedValue = currentValue === 'decrease' ? currentValue - ResizeValue.STEP : currentValue + ResizeValue.STEP;  decrease--не понял....
//   if (resizedValue >= ResizeValue.MIN && resizedValue <= ResizeValue.MAX) {
//     change(resizedValue);
//   } else {
//     return -1;
//   }
// }

// const change = (value) => {
//   scaleValue.value = value + '%';
//   const scaleFloat = (parseInt(value) / 100).toFixed(2);
//   uploadPreview.style.transform = `scale(${scaleFloat})`;
// }

// scaleMinus.addEventListener('click', changeResizeValue);
// scalePlus.addEventListener('click', changeResizeValue);
