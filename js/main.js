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

const checkLength = (str, maxLength) => str.length <= maxLength;

checkLength('hello', 5);

const POST_COUNT = 25;
const AVATAR_COUNT = 6;
const COMMENTS_COUNT = 10;
const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const UNIC_IDS = new Array(25).fill(null).map((_, i) => i + 1)
const UNIC_COMMENTS_IDS = new Array(500).fill(null).map((_, i) => i + 1)
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

const createRandomComment = () => {
  const avatarNumber = getRandomIntInclusive(1, AVATAR_COUNT);
  return {
    id: getUnicIdFrom(shuffledCommentsIds),
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomsFrom(MESSAGES, 2),
    name: getRandomArrayElement(NAMES),
  };
}

const getRandomsFrom = (array, randomNumber) => {
  const copyArray = MESSAGES.slice();
  const emptyArray = [];
  const random = getRandomIntInclusive(1, randomNumber);
  for (let i = 1; i <= random; i++) {
    const messageNumber = getRandomIntInclusive(1, array.length);
    emptyArray.push(copyArray[messageNumber]);
    copyArray.splice(messageNumber, 1);
  }
  return emptyArray.join();
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

let shuffledIds = shuffle(UNIC_IDS);
let shuffledCommentsIds = shuffle(UNIC_COMMENTS_IDS);

const getUnicIdFrom = (array) => {
  if (array.length !== 0) {
    return Number(array.splice(0, 1));
  }
  return -1;
}

const createPost = () => {
  const comments = new Array(getRandomIntInclusive(1, COMMENTS_COUNT)).fill(null).map(() => createRandomComment());
  const uniqueId = getUnicIdFrom(shuffledIds);
  return {
    id: uniqueId,
    url: `photos/${uniqueId}.jpg`,
    description: DESCRIPTION,
    likes: getRandomIntInclusive(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments,
  };
};

const posts = new Array(POST_COUNT).fill(null).map(() => createPost());
// eslint-disable-next-line no-console
console.log(posts);
