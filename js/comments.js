import { createElement } from './util.js';
import { updateCommentsCount } from './big-picture.js';

const createComments = (post) => {
  const commentsList = document.querySelector('.social__comments');
  commentsList.innerHTML = '';

  const commentFragment = document.createDocumentFragment();
  post.comments.forEach((post) => {
    commentFragment.appendChild(createElement(getTemplate(post)));
    updateCommentsCount(post.comments);
    // console.log(post.comments)
  })
  commentsList.appendChild(commentFragment);

}

const getTemplate = (post) => {
  return `
  <li class="social__comment visually-hidden">
    <img
    class="social__picture"
    src="${post.avatar}"
    alt="${post.name}"
    width="35" height="35">
    <p class="social__text">${post.message}</p>
  </li>`;
}



export { createComments };
