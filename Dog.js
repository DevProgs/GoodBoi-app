import { handleLike, handleDislike } from './buttons.js';

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
      <img class="dog__img" src="/${avatar}" alt="${name}">
      <h3 class="dog__info">${name}, ${age}</h3>
      <p class="dog__intro">${bio}</p>
    `;
  }
  // getBtnHtml() {
  //   return `
  //     <button class="nope-btn"><img src="/images/cross.svg" alt="cross"></button>
  //     <button class="like-btn"><img src="/images/heart.svg" alt="cross"></button>
  //   `;
  // }
}

export default Dog
