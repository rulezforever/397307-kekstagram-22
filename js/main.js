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
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const ID_COUNT = 500;
const ID = Array.from({ length: 25 }, (_, i) =>  i + 1);
const ID_PHOTO = Array.from({ length: 25 }, (_, i) =>  i + 1);
const DESCRIPTION = 'Описание';

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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomArrayElement = (elements) => {
  // eslint-disable-next-line no-undef
  return elements[_.random(0, elements.length - 1)];
}

const getRandomMessage = () => {
  const firstMessage = MESSAGES[Math.floor(Math.random() * 6)];
  const secondMessage = MESSAGES[Math.floor(Math.random() * 6)];
  return [firstMessage, secondMessage];
}

const createRandomComment = () => {
  const avatarNumber = getRandomIntInclusive(1, AVATAR_COUNT);
  return {
    id: getRandomIntInclusive(1, ID_COUNT),
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomMessage(),
    name: getRandomArrayElement(NAMES),
  };
}

const shuffle = (array) => {
  let i = array.length;
  let j = 0;

  while(i--) {
    j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let arr = shuffle(ID);
let arr2 = shuffle(ID_PHOTO);

const getUnicIdFrom = (array) => {
  if (array.length !== 0) {
    return Number(array.splice(0, 1));
  }
  return 'Массив закончился';
}

const createPost = () => {
  const comments = new Array(getRandomIntInclusive(1, COMMENTS_COUNT)).fill(null).map(() => createRandomComment());
  return {
    id: getUnicIdFrom(arr),
    url: `photos/${getUnicIdFrom(arr2)}.jpg`,
    description: DESCRIPTION,
    likes: getRandomIntInclusive(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: comments,
  };
};

const posts = new Array(POST_COUNT).fill(null).map(() => createPost());
// eslint-disable-next-line no-console
console.log(posts);
