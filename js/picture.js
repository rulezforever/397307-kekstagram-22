import { openBigPicture } from './big-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderBigPicture = (post) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  const onPhotoClick = (evt) => {
    evt.preventDefault();
    openBigPicture(post);
  }
  pictureElement.addEventListener('click', onPhotoClick);
  return pictureElement;
}
const clearPictures = () => {
  document.querySelectorAll('.picture').forEach(element => element.remove());
}

const renderPictures = (posts) => {
  const postFragment = document.createDocumentFragment();

  posts.forEach((post) => {
    postFragment.appendChild(renderBigPicture(post));
  });
  clearPictures();
  pictures.appendChild(postFragment);
}

export { renderPictures }
