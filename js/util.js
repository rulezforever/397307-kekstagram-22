/* global _:readonly */
const ESCAPE = ('Escape' || 'Esc');
const ALERT_SHOW_TIME = 5000;

const getRandom = (min, max) => Math.random() * (max - min + 1) + min;

const getRandomIntInclusive = (min, max) => {
  if (max <= min) {
    throw new Error('min должен быть меньше max');
  }
  if (max < 0 || min < 0) {
    throw new Error('min и max должны быть больше нуля');
  }
  return Math.floor(getRandom(min, max));
}

const checkLength = (str, maxLength) => str.length <= maxLength;

checkLength('hello', 5);

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
}

const getRandomsFrom = (array, randomNumber) => {
  array = array.slice();
  const result = [];
  const random = getRandomIntInclusive(1, randomNumber);
  for (let i = 1; i <= random; i++) {
    const messageNumber = getRandomIntInclusive(0, array.length - 1);
    result.push(array[messageNumber]);
    array.splice(messageNumber, 1);
  }
  return result.join(' ');
}

const getUnicIdFrom = (array) => {
  if (array.length !== 0) {
    return Number(array.splice(0, 1));
  }
  return -1;
}

const createElement = (template) => {
  const newElement = document.createElement('template');
  newElement.innerHTML = template;
  return newElement.content.childNodes[1];
}

const showElement = (elem) => {
  return elem.classList.remove('hidden');
}

const hideElement = (elem) => {
  return elem.classList.add('hidden');
}

const onPressedKey = (evt,code,callback) => {
  if (evt.key === code) {
    evt.preventDefault();
    callback();
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export { ESCAPE, showAlert, onPressedKey, showElement, hideElement, createElement, getRandom, getRandomIntInclusive, getRandomArrayElement, getRandomsFrom, getUnicIdFrom }
