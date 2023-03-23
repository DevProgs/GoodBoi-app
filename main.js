import dogData from "./data";
import Dog from "/Dog.js"

const nopeBtn = document.querySelector('.nope-btn')
const likeBtn = document.querySelector('.like-btn')

likeBtn.addEventListener('click', (e) => {
  doggo.hasBeenLiked = true
  swipeDog()
})

nopeBtn.addEventListener('click', (e) => {
  swipeDog();
});

const getNextDog = () => {
  const nextDog = dogData.shift()
  dogData.push(nextDog);
  return nextDog
}

const renderDog = () => {
  document.getElementById('dog').innerHTML = doggo.getDogHtml();
}

const swipeDog = () => {
  doggo.hasBeenSwiped = true
  renderDog()
  doggo = new Dog(getNextDog())
  setTimeout(() => {
    renderDog()
  }, 1500)
}

let doggo = new Dog(getNextDog());
renderDog()