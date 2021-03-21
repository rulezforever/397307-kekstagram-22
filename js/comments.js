import { showElement, hideElement } from './util.js';

const COMMENT_STEP = 5;
const VISUALLY_HIDDEN = 'visually-hidden';

const commentsList = document.querySelector('.social__comments');
const loadMoreBtn = document.querySelector('.social__comments-loader');

const createComments = (post) => {
  commentsList.innerHTML = '';

  const commentFragment = document.createDocumentFragment();
  post.comments.forEach((comment) => {
    commentFragment.appendChild(getTemplate(comment));
  });
  commentsList.appendChild(commentFragment);
}

const getTemplate = (post) => {

  const el = document.createElement('li');
  el.className = 'social__comment visually-hidden';
  const img = document.createElement('img');
  img.className = 'social__picture';
  img.src = `${post.avatar}`;
  img.alt = `${post.name}`;
  img.width = '35';
  img.height = '35';
  const p = document.createElement('p');
  p.className = 'social__text';
  p.innerHTML = `${post.message}`;
  el.append(img);
  el.append(p);
  return el;
}

const showComments = () => {
  const hiddenComments = commentsList.querySelectorAll(`.${VISUALLY_HIDDEN}`);
  const hiddenCommentsArray = Array.from(hiddenComments);
  hiddenCommentsArray.slice(0, COMMENT_STEP).forEach((item) => {
    item.classList.remove(`${VISUALLY_HIDDEN}`)
  });
  commentsList.querySelectorAll(`li.${VISUALLY_HIDDEN}`).length === 0 ? hideElement(loadMoreBtn) : showElement(loadMoreBtn);
}

export { createComments, showComments };
