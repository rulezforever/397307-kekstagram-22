const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const symbolsPattern = /[^A-Za-z0-9А-Яа-я]/;
const comment = form.querySelector('.text__description');

const COMMENT_MAX_LENGTH = 140;
const Tags = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5,
};

const checkHashtags = () => {
  const hashtags = hashtagInput.value.trim().toLowerCase().split(' ');
  const arrayHashtags = [];
  const checkUnique = (hashtag) => {
    let isRepeat = false;
    if (arrayHashtags.indexOf(hashtag.toLowerCase()) !== -1) {
      isRepeat = true;
    }
    arrayHashtags.push(hashtag.toLowerCase());
    return isRepeat;
  }

  for (let i = 0; i < hashtags.length; i++) {
    const hashtag = hashtags[i];
    if (hashtag[0] !== '#') {
      hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)');
    }
    if (!hashtagInput.value.match(symbolsPattern)) {
      hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      return;
    }
    if (hashtag[0] === '#' && hashtag.length === 1) {
      hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
      return;
    }
    if (hashtag.length > Tags.MAX_LENGTH) {
      hashtagInput.setCustomValidity(`максимальная длина одного хэш-тега ${Tags.MAX_LENGTH} символов, включая решётку`);
      return;
    }
    if (checkUnique(hashtag)) {
      hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
      return;
    }
    if (hashtags.length > Tags.MAX_COUNT) {
      hashtagInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
      return;
    }
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
}

const checkComment = () => {
  if (comment.value.length > COMMENT_MAX_LENGTH) {
    comment.setCustomValidity('длина комментария не может составлять больше 140 символов');
    return;
  }
  comment.setCustomValidity('');
  comment.reportValidity();
}

hashtagInput.addEventListener('input', checkHashtags);
comment.addEventListener('input', checkComment);

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
})
comment.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
})
