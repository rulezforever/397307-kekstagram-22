import {sendData} from './api.js';
import { renderError, renderSuccess } from './messages.js';

const SYMBOLS_PATTERN = /^[0-9A-Za-zА-Яа-я]+$/;
const COMMENT_MAX_LENGTH = 140;
const Tags = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5,
  MIN: 2,
  SYMBOL: '#',
};

const formElement = document.querySelector('.img-upload__form');
const hashtagInputElement = formElement.querySelector('.text__hashtags');
const commentElement = formElement.querySelector('.text__description');

const onHashtagInput = () => {
  const hashtags = hashtagInputElement.value.trim().toLowerCase().split(' ');
  if (hashtags.length > Tags.MAX_COUNT) {
    hashtagInputElement.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    return;
  } else {
    hashtags.some((hashtag) => {
      if (hashtag[0] !== Tags.SYMBOL) {
        hashtagInputElement.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)');
      } else if (hashtag.length < Tags.MIN) {
        hashtagInputElement.setCustomValidity('хеш-тег не может состоять только из одной решётки');
      } else if (!SYMBOLS_PATTERN.test(hashtag.slice(1))) {
        hashtagInputElement.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      } else if (hashtag.length > Tags.MAX_LENGTH) {
        hashtagInputElement.setCustomValidity(`максимальная длина одного хэш-тега ${Tags.MAX_LENGTH} символов, включая решётку`);
      } else if (hashtag.indexOf(Tags.SYMBOL, 1) >= 1) {
        hashtagInputElement.setCustomValidity('хэш-теги разделяются пробелами');
      } else if (hashtags.length !== new Set(hashtags).size) {
        hashtagInputElement.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
      } else {
        hashtagInputElement.setCustomValidity('');
      }
    });
  }
  hashtagInputElement.reportValidity();
}

const onCommentInput = () => {
  if (commentElement.value.length > COMMENT_MAX_LENGTH) {
    commentElement.setCustomValidity('длина комментария не может составлять больше 140 символов');
    return;
  }
  commentElement.setCustomValidity('');
  commentElement.reportValidity();
}

hashtagInputElement.addEventListener('input', onHashtagInput);
commentElement.addEventListener('input', onCommentInput);

const onFormElementEscPressBlock = (evt) => {
  evt.stopPropagation();
}

hashtagInputElement.addEventListener('keydown', onFormElementEscPressBlock);
commentElement.addEventListener('keydown', onFormElementEscPressBlock);


const setUploadFileFormSubmit = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      renderSuccess,
      renderError,
      new FormData(evt.target),
    );
  });
};

export { hashtagInputElement, commentElement, onFormElementEscPressBlock, setUploadFileFormSubmit }
