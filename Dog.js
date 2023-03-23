class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    if (hasBeenSwiped) {
      if (hasBeenLiked) {
        return `
          <img class="dog__img" src="/${avatar}" alt="${name}">
          <img class="like" src="/images/like-image.png" alt="">
          <h3 class="dog__info">${name}, ${age}</h3>
          <p class="dog__intro">${bio}</p>
        `;
      } else {
        return `
          <img class="dog__img" src="/${avatar}" alt="${name}">
          <img class="like" src="/images/nope-image.png" alt="">
          <h3 class="dog__info">${name}, ${age}</h3>
          <p class="dog__intro">${bio}</p>
        `;
      }
    }
    return ` 
      <img class="dog__img" src="/${avatar}" alt="${name}">
      <h3 class="dog__info">${name}, ${age}</h3>
      <p class="dog__intro">${bio}</p>
    `;
  }
}

export default Dog
