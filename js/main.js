import './picture.js'
import './upload-picture.js'
import './slider.js'
import './scale.js'
import './form-validation.js'
import './messages.js'
import  { setFilter } from './filter.js'
import { getData } from'./api.js'
import { setUploadFileFormSubmit } from './form-validation.js';
import { renderPictures } from './picture.js';

getData((posts) => {
  renderPictures(posts);
  setFilter(posts);
});

setUploadFileFormSubmit();
