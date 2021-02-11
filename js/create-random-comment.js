import { UNIC_COMMENTS_IDS, AVATAR_COUNT, MESSAGES, NAMES} from './data.js';
import { getRandomIntInclusive, getUnicIdFrom, getRandomsFrom, getRandomArrayElement} from './util.js';

// eslint-disable-next-line no-undef
let shuffledCommentsIds = _.shuffle(UNIC_COMMENTS_IDS);

const createRandomComment = () => {
  const avatarNumber = getRandomIntInclusive(1, AVATAR_COUNT);
  return {
    id: getUnicIdFrom(shuffledCommentsIds),
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: getRandomsFrom(MESSAGES, 2),
    name: getRandomArrayElement(NAMES),
  };
}

export { createRandomComment }
