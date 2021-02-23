import { createElement, getTemplate } from './util.js';

const createComments = (post) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';

  const commentFragment = document.createDocumentFragment();
  post.comments.forEach((post) => {
    commentFragment.appendChild(createElement(getTemplate(post)));
  })
  commentsList.appendChild(commentFragment);
}
export { createComments };
