import dogData from "./data";
import Dog from "/Dog.js"

const nopeBtn = document.querySelector('.nope-btn')
const likeBtn = document.querySelector('.like-btn')

likeBtn.addEventListener('click', () => {
  dog.hasBeenLiked = true
  swipeDog()
})

nopeBtn.addEventListener('click', () => {
  swipeDog();
});

const getNextDog = () => {
  const nextDog = dogData.shift()
  dogData.push(nextDog);
  return nextDog
}

const renderDog = () => {
  document.getElementById('dog').innerHTML = dog.getDogHtml();
}

const swipeDog = () => {
  dog.hasBeenSwiped = true
  renderDog()
  dog = new Dog(getNextDog())
  setTimeout(() => {
    renderDog()
  }, 1500)
}

let dog = new Dog(getNextDog());
renderDog()