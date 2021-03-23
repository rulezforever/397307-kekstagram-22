import { showAlert } from './util.js';

const SERVER_URL = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => response.json())
    .catch((err) => {
      showAlert(err);
    })
    .then((posts) => {
      onSuccess(posts);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    `${SERVER_URL}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData }
