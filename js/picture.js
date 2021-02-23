import { posts } from './data.js';
import { openBigPicture } from './big-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const postFragment = document.createDocumentFragment();

posts.forEach((post) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = post.url;
  pictureElement.querySelector('.picture__likes').textContent = post.likes;
  pictureElement.querySelector('.picture__comments').textContent = post.comments.length;

  const picture = pictureElement.querySelector('.picture');
  picture.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(post);
  });
  postFragment.appendChild(pictureElement);
});

pictures.appendChild(postFragment);

export { pictures };
// написал функцию рендера, не пойму теперь куда ее здесь всавлять, что выкинуть или добавить...
// const renderBigPicture = () => {
//   const pictureElement = pictureTemplate.cloneNode(true);
//   const onPhotoClick = (evt) => {
//     evt.preventDefault();
//     openBigPicture(post);
//   }
//   pictureElement.addEventListener('click', onPhotoClick);
//   return pictureElement;
// }
// postFragment.appendChild(renderBigPicture(post));
