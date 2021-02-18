import { posts } from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const picturesListElement = pictures.querySelector('.pictures__list');
const postFragment = document.createDocumentFragment();

posts.forEach(({ url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  postFragment.appendChild(pictureElement);
});

picturesListElement.appendChild(postFragment);
