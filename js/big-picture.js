import { showElement, hideElement, onPressedKey, ESCAPE } from './util.js';
import { createComments, showComments } from './comments.js';

const VISUALLY_HIDDEN = 'visually-hidden';

const bigPicture = document.querySelector('.big-picture');
const body = document.body;
const commentsLoader = document.querySelector('.comments-loader');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');

const updateCommentsCount = () => {
  const displayedComments = commentsList.querySelectorAll(`li:not(.${VISUALLY_HIDDEN})`);
  const allComments = commentsList.querySelectorAll('li');
  socialCommentCount.textContent = `${displayedComments.length} из ${allComments.length} комментариев`;
}

const openBigPicture = (post) => {
  const likes = bigPicture.querySelector('.likes-count');
  body.classList.add('modal-open');

  bigPicture.querySelector('.big-picture__img img').src = post.url;
  likes.textContent = post.likes;
  commentsCount.textContent = post.comments.length;
  bigPicture.querySelector('.social__caption').textContent = post.description;

  createComments(post);
  showComments();
  updateCommentsCount();
  showElement(bigPicture);

  closeBtn.addEventListener('click', onCloseBtnClick);
  document.addEventListener('keydown',onEscPress);
};

const onCloseBtnClick = () => {
  hideElement(bigPicture);
  closeBtn.removeEventListener('click', onCloseBtnClick);
  body.classList.remove('modal-open');
  document.removeEventListener('keydown',onEscPress);
}

const onLoadMoreClick = () => {
  showComments();
  updateCommentsCount();
}

commentsLoader.addEventListener('click', onLoadMoreClick);

const onEscPress = (evt) => {
  onPressedKey(evt,ESCAPE,onCloseBtnClick);
}

export { openBigPicture };
