import { getRandomIntInclusive } from './util.js';

const RANDOM = 10;
const filter = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const getRandomArray = (array, randomArrayLength) => {
  array = array.slice();
  const result = [];
  for (let i = 1; i <= randomArrayLength; i++) {
    const element = getRandomIntInclusive(0, array.length - 1);
    result.push(array[element]);
    array.splice(element, 1);
  }
  return result;
}

const setRandomPosts = (posts, cb) => {
  filterRandom.addEventListener('click', () => {
    filterButtons.forEach(element => element.classList.remove('img-filters__button--active'));
    filterRandom.classList.add('img-filters__button--active');
    const newArray = getRandomArray(posts, RANDOM);
    cb(newArray);
  });
}

const setDiscussedPosts = (posts, cb) => {
  filterDiscussed.addEventListener('click', () => {
    filterButtons.forEach(element => element.classList.remove('img-filters__button--active'));
    filterDiscussed.classList.add('img-filters__button--active');
    const newArray = posts.slice().sort(sortByComments);
    cb(newArray);
  });
}

const setDefaultPosts = (posts, cb) => {
  filterDefault.addEventListener('click', () => {
    filterButtons.forEach(element => element.classList.remove('img-filters__button--active'));
    filterDefault.classList.add('img-filters__button--active');
    cb(posts);
  });
}

export { filter, setRandomPosts, setDiscussedPosts, setDefaultPosts}
