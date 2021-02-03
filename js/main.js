// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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

getRandom(5, 10);
getRandomIntInclusive(5, 10);

const checkLength = (str, maxLength) => str.length <= maxLength;

checkLength('hello', 5);

const POST_COUNT = 25;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 10;

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

const ID = Array.from({ length: 25 }, (_, i) =>  i + 1);

const DESCRIPTION = 'Описание';

const getRandomArrayElement = (elemets) => {
  // eslint-disable-next-line no-undef
  return elemets[_.random(0, elemets.length - 1)];
}

const createRandomComment = () => {
  const randomAvatar = getRandomIntInclusive(1, AVATAR_COUNT);
  const randomId = getRandomIntInclusive(1, 500);
  return {
    id: randomId,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAMES),
  };
}

const createPost = () => {
  const comments = new Array(getRandomIntInclusive(1, COMMENTS_COUNT)).fill(null).map(() => createRandomComment());
  return {
    id: getRandomArrayElement(ID),
    url: `photos/${getRandomArrayElement(ID)}.jpg`,
    description: DESCRIPTION,
    likes: getRandomIntInclusive(15,200),
    comments: comments,
  };
};

const posts = new Array(POST_COUNT).fill(null).map(() => createPost());
// eslint-disable-next-line no-console
console.log(posts);
// подскажи, как придумать функцию, чтобы ID не повторялись?
