/* global _:readonly */

import { renderPictures } from './picture.js';

const DELAY = 500;
const RANDOM_PICTURES_QUANTITY = 10;

const filterElement = document.querySelector('.img-filters');
const filterFormElement = document.querySelector('.img-filters__form');

const setDefaultPosts = (array) => array.slice();
const setRandomPosts = (array) => _.shuffle(array).slice(0, RANDOM_PICTURES_QUANTITY);
const setDiscussedPosts = (array) => array.slice().sort((prev, next) => next.comments.length - prev.comments.length);

const updateFilter = (array) => {

  const filterTypes = {
    'filter-default': setDefaultPosts(array),
    'filter-random': setRandomPosts(array),
    'filter-discussed': setDiscussedPosts(array),
  }

  return filterTypes[filterFormElement.querySelector('.img-filters__button--active').id];
}

const onFilterClick = (evt, posts) => {
  if (!evt.target.classList.contains('img-filters__button')) {
    return;
  }
  let activeElement = evt.target.parentElement.querySelector('.img-filters__button--active');
  if (activeElement) {
    activeElement.classList.remove('img-filters__button--active');
  }
  evt.target.classList.add('img-filters__button--active');
  const debounceRender = _.debounce(renderPictures, DELAY);
  debounceRender(updateFilter(posts));
}

const setFilter = (posts) => {
  filterElement.classList.remove('img-filters--inactive');
  filterFormElement.addEventListener('click', (evt) => {
    onFilterClick(evt, posts);
  });
}

export { setFilter }
