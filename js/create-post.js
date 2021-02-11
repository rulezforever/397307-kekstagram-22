import { UNIC_IDS, COMMENTS_COUNT, DESCRIPTION, LIKES_COUNT_MIN, LIKES_COUNT_MAX} from './data.js';
import { getRandomIntInclusive, getUnicIdFrom } from './util.js';
import { createRandomComment } from './create-random-comment.js';

// eslint-disable-next-line no-undef
let shuffledIds = _.shuffle(UNIC_IDS);

const createPost = () => {
  const comments = new Array(getRandomIntInclusive(1, COMMENTS_COUNT)).fill(null).map(() => createRandomComment());
  const uniqueId = getUnicIdFrom(shuffledIds);
  return {
    id: uniqueId,
    url: `photos/${uniqueId}.jpg`,
    description: DESCRIPTION,
    likes: getRandomIntInclusive(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments,
  };
};

export { createPost }
