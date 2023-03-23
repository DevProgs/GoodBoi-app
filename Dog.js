import { handleLike, handleDislike } from './buttons.js';

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <img class="dog__img" src="/${avatar}" alt="${name}">
      <h3 class="dog__info">${name}, ${age}</h3>
      <p class="dog__intro">${bio}</p>
    `;
  }
  getBadge() {
    const {hasBeenLiked, hasBeenSwiped} = this
    if (hasBeenSwiped) {
      if (hasBeenLiked) {
        return `<img class="like" src="/images/like-image.png" alt="">`
      } else {
        return `<img class="like" src="/images/nope-image.png" alt="">`;
      }
    } else {
      return
    }
  }
  
  // getBtnHtml() {
  //   return `
  //     <button class="nope-btn"><img src="/images/cross.svg" alt="cross"></button>
  //     <button class="like-btn"><img src="/images/heart.svg" alt="cross"></button>
  //   `;
  // }
}

export default Dog
