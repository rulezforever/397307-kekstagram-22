import { openBigPicture } from './big-picture.js';

const picturesElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const renderBigPicture = (post) => {
  const pictureElement = pictureTemplateElement.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;
  const onPictureElementClick = (evt) => {
    evt.preventDefault();
    openBigPicture(post);
  }
  pictureElement.addEventListener('click', onPictureElementClick);
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
  picturesElement.appendChild(postFragment);
}

export { renderPictures }
