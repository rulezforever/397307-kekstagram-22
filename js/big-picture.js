const openBigPicture = (post) => {
  const bigPicture = document.querySelector('.big-picture');
  const body = document.querySelector('body');
  const commentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  bigPicture.querySelector('.big-picture__img img').src = post.url;

  const likes = bigPicture.querySelector('.likes-count');
  likes.textContent = post.likes;


  const close = bigPicture.querySelector('.big-picture__cancel');
  close.addEventListener('click', () =>{
    bigPicture.classList.add('hidden');
  })

  const commentsCount = bigPicture.querySelector('.comments-count');
  commentsCount.textContent = post.comments.length;

  const commentsList = bigPicture.querySelector('.social__comments');
  commentsList.innerHTML = '';

  post.comments.forEach((comment) => {
    const li = `
    <li class="social__comment">
      <img
          class="social__picture"
          src="${comment.avatar}"
          alt="${comment.name}"
          width="35" height="35">
      <p class="social__text">${comment.message}</p>
    </li>`;
    commentsList.innerHTML += li;
  })

  bigPicture.querySelector('.social__caption').textContent = post.description;
};

export { openBigPicture };
