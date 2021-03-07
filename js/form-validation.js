const COMMENT_MAX_LENGTH = 140;
const Tags = {
  MAX_LENGTH: 20,
  MAX_COUNT: 5,
  MIN: 2,
  SYMBOL: '#',
};


const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const symbolsPattern = /[^A-Za-z0-9А-Яа-я]/;
const comment = form.querySelector('.text__description');

const arrayHashtags = [];
const isUniqueIn = (hashtag) => {
  let isRepeat = false;
  if (arrayHashtags.indexOf(hashtag.toLowerCase()) !== -1) {
    isRepeat = true;
  }
  arrayHashtags.push(hashtag.toLowerCase());
  return isRepeat;
}

// Оптимизация isUniqueIn: ПРавильно? и вызываем isUniqueIn(hashtags)?
// const isUniqueIn = (array) => {
//   let sorted = array.sort();
//   sorted.forEach((i) => {
//     let isDuplicate = sorted[i + 1] === sorted[i];
//     if (isDuplicate) {
//       return;
//     }
//     return isDuplicate;
//   });
// }



const onHashtagInput = () => {
  const hashtags = hashtagInput.value.trim().toLowerCase().split(' ');
  if (hashtags.length > Tags.MAX_COUNT) {
    hashtagInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    return;
  } else {
    hashtags.some((hashtag) => {
      if (hashtag[0] !== Tags.SYMBOL) {
        hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)');
        return;
      } else if (hashtagInput.value.slice(1).match(symbolsPattern)) {
        hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
        return;
      } else if (hashtag.length < Tags.MIN) {
        hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
        return;
      } else if (hashtag.length > Tags.MAX_LENGTH) {
        hashtagInput.setCustomValidity(`максимальная длина одного хэш-тега ${Tags.MAX_LENGTH} символов, включая решётку`);
        return;
      } else if (isUniqueIn(hashtag)) {
        hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
        return;
      } else if (hashtag.indexOf(Tags.SYMBOL, 1) >= 1) {
        hashtagInput.setCustomValidity('хэш-теги разделяются пробелами');
        return;
      } else {
        hashtagInput.setCustomValidity('');
      }
    });
  }
  hashtagInput.reportValidity();
}

// const onHashtagInput = () => {
//   const hashtags = hashtagInput.value.trim().toLowerCase().split(' ');

//   for (let i = 0; i < hashtags.length; i++) {
//     const hashtag = hashtags[i];
//     if (hashtag[0] !== Tags.SYMBOL) {
//       hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)');
//     }
//     if (!hashtagInput.value.match(symbolsPattern)) {
//       hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
//       return;
//     }
//     if ( hashtag.length < Tags.MIN) {
//       hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
//       return;
//     }
//     if (hashtag.length > Tags.MAX_LENGTH) {
//       hashtagInput.setCustomValidity(`максимальная длина одного хэш-тега ${Tags.MAX_LENGTH} символов, включая решётку`);
//       return;
//     }
//     if (isUniqueIn(hashtag)) {
//       hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
//       return;
//     }
//     if (hashtags.length > Tags.MAX_COUNT) {
//       hashtagInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
//       return;
//     }
//     hashtagInput.setCustomValidity('');
//   }
//   hashtagInput.reportValidity();
// }

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
