import './picture.js'
import './upload-picture.js'
import './slider.js'
import './scale.js'
import './form-validation.js'
import './messages.js'
import { getData } from'./api.js'
import { closePopUp } from './upload-picture.js';
import { setUserFormSubmit } from './form-validation.js';
import { renderPictures } from './picture.js';

getData((posts) => {
  renderPictures(posts);
});

setUserFormSubmit(closePopUp);
