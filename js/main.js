import './picture.js'
import './upload-picture.js'
import './slider.js'
import './scale.js'
import './form-validation.js'
import './messages.js'
import  { filter,filterForm, onFilterClick } from './filter.js'
import { getData } from'./api.js'
import { setUploadFileFormSubmit } from './form-validation.js';
import { renderPictures } from './picture.js';

getData((posts) => {
  renderPictures(posts);
  filter.classList.remove('img-filters--inactive');
  // renderPictures(updateFilter(posts));
  filterForm.addEventListener('click', (evt) => {
    onFilterClick(evt, posts);
  });
});

setUploadFileFormSubmit();
