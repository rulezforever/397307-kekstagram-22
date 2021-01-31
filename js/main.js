const getRandomIntInclusive = function (min, max){
  if (max <= min) {
    alert('Неправильный диапазон');
  } else if (max < 0 || min < 0) {
    alert('Диапазон отрицательный');
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
getRandomIntInclusive(5, 10);


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const checkLength = function(str, maxLength){
  return str.length <= maxLength
}

checkLength('hello', 5);
