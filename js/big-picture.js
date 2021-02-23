import { showElement, hideElement} from './util.js';
import { createComments} from './comments.js';

const openBigPicture = (post) => {
  const bigPicture = document.querySelector('.big-picture');
  const body = document.body;
  const commentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  showElement(bigPicture);
  hideElement(commentCount);
  hideElement(commentsLoader);
  body.classList.add('modal-open');

  bigPicture.querySelector('.big-picture__img img').src = post.url;

  const likes = bigPicture.querySelector('.likes-count');
  likes.textContent = post.likes;

  const onCloseBtnClick = () => {
    hideElement(bigPicture);
    closeBtn.removeEventListener('click', onCloseBtnClick)
  }

  const closeBtn = bigPicture.querySelector('.big-picture__cancel');
  closeBtn.addEventListener('click', onCloseBtnClick)
  const commentsCount = bigPicture.querySelector('.comments-count');
  commentsCount.textContent = post.comments.length;

  createComments(post);

  bigPicture.querySelector('.social__caption').textContent = post.description;
};


export { openBigPicture };
