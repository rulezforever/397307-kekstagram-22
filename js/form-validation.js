const COMMENT_MAX_LENGTH = 140;
const Tags = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5,
  MIN: 2,
  SYMBOL: '#',
};

const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const symbolsPattern = /^[0-9A-Za-zА-Яа-я]+$/;
const comment = form.querySelector('.text__description');

const isDuplicateIn  = (array) => {
  let sorted = array.sort();
  let isDuplicate = false;
  for (let i = 0; i < array.length; i += 1) {
    isDuplicate = sorted[i + 1] === sorted[i];
    if (isDuplicate) {
      break;
    }
  }
  return isDuplicate;
}

const onHashtagInput = () => {
  const hashtags = hashtagInput.value.trim().toLowerCase().split(' ');
  if (hashtags.length > Tags.MAX_COUNT) {
    hashtagInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    return;
  } else {
    hashtags.some((hashtag) => {
      if (hashtag[0] !== Tags.SYMBOL) {
        hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)');
      } else if (hashtag.length < Tags.MIN) {
        hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
      } else if (!symbolsPattern.test(hashtag.slice(1))) {
        hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      } else if (hashtag.length > Tags.MAX_LENGTH) {
        hashtagInput.setCustomValidity(`максимальная длина одного хэш-тега ${Tags.MAX_LENGTH} символов, включая решётку`);
      } else if (hashtag.indexOf(Tags.SYMBOL, 1) >= 1) {
        hashtagInput.setCustomValidity('хэш-теги разделяются пробелами');
      } else if (isDuplicateIn(hashtags)) {
        hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
      } else {
        hashtagInput.setCustomValidity('');
      }
    });
  }
  hashtagInput.reportValidity();
}

const onCommentInput = () => {
  if (comment.value.length > COMMENT_MAX_LENGTH) {
    comment.setCustomValidity('длина комментария не может составлять больше 140 символов');
    return;
  }
  comment.setCustomValidity('');
  comment.reportValidity();
}

hashtagInput.addEventListener('input', onHashtagInput);
comment.addEventListener('input', onCommentInput);

const blockEscPress = (evt) => {
  evt.stopPropagation();
}

hashtagInput.addEventListener('keydown', blockEscPress);
comment.addEventListener('keydown', blockEscPress);

export { hashtagInput, comment, blockEscPress }
