import { showElement, hideElement } from './util.js';
import { createComments } from './comments.js';

const COMMENT_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const body = document.body;
const commentsLoader = document.querySelector('.comments-loader');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');

const commentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const loadMoreBtn = bigPicture.querySelector('.social__comments-loader');

const updateCommentsCount = () => {
  const displayedComments = commentsList.querySelectorAll('li:not(.visually-hidden)');
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

  closeBtn.addEventListener('click', onCloseBtnClick)
};

const onCloseBtnClick = () => {
  hideElement(bigPicture);
  closeBtn.removeEventListener('click', onCloseBtnClick);
  body.classList.remove('modal-open');
}

const showComments = () => {
  const hiddenComments = commentsList.querySelectorAll('.visually-hidden');
  const hiddenCommentsArray = Array.from(hiddenComments);
  hiddenCommentsArray.slice(0, COMMENT_STEP).forEach((item) => {
    item.classList.remove('visually-hidden')
  });
  commentsList.querySelectorAll('li.visually-hidden').length === 0 ? hideElement(loadMoreBtn) : showElement(loadMoreBtn);
}

const onLoadMoreClick = () => {
  showComments();
  updateCommentsCount();
}

commentsLoader.addEventListener('click', onLoadMoreClick);
export { openBigPicture };
