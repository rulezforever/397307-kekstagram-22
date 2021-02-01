// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandom = function(min, max) {
  return Math.random() * (max - min + 1) + min;
}

const getRandomIntInclusive = function (min, max){
  if (max <= min) {
    alert('min должен быть меньше max');
  }
  if (max < 0 || min < 0) {
    alert('min и max должны быть больше нуля');
  }
  return Math.floor(getRandom(min, max));
}

getRandom(5, 10);
getRandomIntInclusive(5, 10);

const checkLength = function(str, maxLength){
  return str.length <= maxLength
}

checkLength('hello', 5);
