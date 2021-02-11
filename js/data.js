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

export { POST_COUNT, AVATAR_COUNT, COMMENTS_COUNT, LIKES_COUNT_MIN, LIKES_COUNT_MAX, UNIC_IDS, UNIC_COMMENTS_IDS, DESCRIPTION, NAMES, MESSAGES };