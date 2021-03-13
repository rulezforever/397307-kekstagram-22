/* global _:readonly */

const DELAY = 500;
const RANDOM_PICTURES_QUANTITY = 10;

const filter = document.querySelector('.img-filters');
const filterForm = document.querySelector('.img-filters__form');

const updateFilter = (array) => {
  let filterType = filterTypes[filterForm.querySelector('.img-filters__button--active').id];
  return filterType(array);
}

const onFilterClick = (evt) => {
  if (!evt.target.classList.contains('img-filters__button')) {
    return;
  } else {
    let activeElement = evt.target.parentElement.querySelector('.img-filters__button--active');
    console.log(activeElement);
    if (activeElement) {
      activeElement.classList.remove('img-filters__button--active');
    }
    evt.target.classList.add('img-filters__button--active');
    _.debounce(updateFilter, DELAY);
  }

}

filterForm.addEventListener('click', onFilterClick);

// const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

// const getRandomArray = (array, randomArrayLength) => {
//   array = array.slice();
//   const result = [];
//   for (let i = 1; i <= randomArrayLength; i++) {
//     const element = getRandomIntInclusive(0, array.length - 1);
//     result.push(array[element]);
//     array.splice(element, 1);
//   }
//   return result;
// }

const setDefaultPosts = (array) => array.slice();
const setRandomPosts = (array) => _.shuffle(array).slice(0, RANDOM_PICTURES_QUANTITY);
const setDiscussedPosts = (array) => array.slice().sort((prev, next) => next.comments.length - prev.comments.length);


const filterTypes = {
  'filter-default': setDefaultPosts,
  'filter-random':  setRandomPosts,
  'filter-duscussed': setDiscussedPosts,
}

// const setRandomPosts = (posts, cb) => {
//   filterRandom.addEventListener('click', () => {
//     filterButtons.forEach(element => element.classList.remove('img-filters__button--active'));
//     filterRandom.classList.add('img-filters__button--active');
//     const newArray = getRandomArray(posts, RANDOM_PICTURES_QUANTITY);
//     cb(newArray);
//   });
// }

// const setDiscussedPosts = (posts, cb) => {
//   filterDiscussed.addEventListener('click', () => {
//     filterButtons.forEach(element => element.classList.remove('img-filters__button--active'));
//     filterDiscussed.classList.add('img-filters__button--active');
//     const newArray = posts.slice().sort(sortByComments);
//     cb(newArray);
//   });
// }

// const setDefaultPosts = (posts, cb) => {
//   filterDefault.addEventListener('click', () => {
//     filterButtons.forEach(element => element.classList.remove('img-filters__button--active'));
//     filterDefault.classList.add('img-filters__button--active');
//     cb(posts);
//   });
// }

export { filter, updateFilter}
