import dogData from "/data.js"
import { likeBtn, dislikeBtn } from './buttons'

class Dog {
  constructor(data){
    Object.assign(this, data)
  }
  getDogHtml(){
    const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
    return `
      <img class="dog__img" src="/${avatar}" alt="${name}">
      <h3 class="dog__info">${name}, ${age}</h3>
      <p class="dog__intro">${bio}</p>
    `;
  }
}

const doggo = new Dog(dogData[0])

const renderDog = () => {
  document.getElementById('dog').innerHTML = doggo.getDogHtml()
}

renderDog()

document.querySelector(".nope-btn").addEventListener('click', dislikeBtn)

document.querySelector(".like-btn").addEventListener('click', likeBtn)