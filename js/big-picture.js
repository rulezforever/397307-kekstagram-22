import { showElement, hideElement, onPressedKey, ESCAPE } from './util.js';
import { createComments, showComments, VISUALLY_HIDDEN_CLASS_NAME } from './comments.js';


const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.body;
const commentsLoaderElement = document.querySelector('.comments-loader');
const closeBtnElement = bigPictureElement.querySelector('.big-picture__cancel');
const socialCommentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const commentsListElement = bigPictureElement.querySelector('.social__comments');

const updateCommentsCount = () => {
  const displayedComments = commentsListElement.querySelectorAll(`li:not(.${VISUALLY_HIDDEN_CLASS_NAME})`);
  const allComments = commentsListElement.querySelectorAll('li');
  socialCommentCountElement.textContent = `${displayedComments.length} из ${allComments.length} комментариев`;
}

const openBigPicture = (post) => {
  const likesCountElement = bigPictureElement.querySelector('.likes-count');
  bodyElement.classList.add('modal-open');

  bigPictureElement.querySelector('.big-picture__img img').src = post.url;
  likesCountElement.textContent = post.likes;
  commentsCountElement.textContent = post.comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = post.description;

  createComments(post);
  showComments();
  updateCommentsCount();
  showElement(bigPictureElement);

  closeBtnElement.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown',onEscPress);
};

const onCloseBtnClick = () => {
  hideElement(bigPictureElement);
  closeBtnElement.removeEventListener('click', onCloseBtnClick);
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown',onEscPress);
}

const onLoadMoreClick = () => {
  showComments();
  updateCommentsCount();
}

commentsLoaderElement.addEventListener('click', onLoadMoreClick);

const onEscPress = (evt) => {
  onPressedKey(evt,ESCAPE,onCloseBtnClick);
}

export { openBigPicture, bodyElement };
