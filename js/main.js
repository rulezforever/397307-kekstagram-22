/* global _:readonly */

import './picture.js'
import './upload-picture.js'
import './slider.js'
import './scale.js'
import './form-validation.js'
import './messages.js'
import  { filter } from './filter.js'
import { getData } from'./api.js'
import { setUploadFileFormSubmit } from './form-validation.js';
import { renderPictures } from './picture.js';
import { setDefaultPosts, setRandomPosts, setDiscussedPosts} from './filter.js';

const DELAY = 500;

getData((posts) => {
  renderPictures(posts);
  filter.classList.remove('img-filters--inactive');
  setDefaultPosts(posts, _.debounce(newPosts => renderPictures(newPosts), DELAY));
  setRandomPosts(posts, _.debounce(newPosts => renderPictures(newPosts), DELAY));
  setDiscussedPosts(posts, _.debounce(newPosts => renderPictures(newPosts), DELAY));
});

setUploadFileFormSubmit();
