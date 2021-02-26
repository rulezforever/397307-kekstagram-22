import { uploadPreview } from './upload-picture.js';

const scaleValue = document.querySelector('.scale__control--value');
const scaleMinus = document.querySelector('.scale__control--smaller');
const scalePlus = document.querySelector('.scale__control--bigger');

scaleValue.value = '100%';
scaleMinus.onclick = () => {
  if (parseInt(scaleValue.value) <= 0 ) {
    return -1;
  } else {
    scaleValue.value = parseInt(scaleValue.value) - 25 + '%';
    const scaleFloat = (parseInt(scaleValue.value) / 100).toFixed(2);
    uploadPreview.style.transform = `scale(${scaleFloat})`;
  }
}
scalePlus.onclick = () => {
  if (parseInt(scaleValue.value) >= 100) {
    return -1;
  } else {
    scaleValue.value = parseInt(scaleValue.value) + 25 + '%';
    const scaleFloat = (parseInt(scaleValue.value) / 100).toFixed(2);
    uploadPreview.style.transform = `scale(${scaleFloat})`;
  }
}
