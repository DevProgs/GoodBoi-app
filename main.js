import { handleLike, handleDislike } from './buttons';
import dogData from "./data";
import Dog from "/Dog.js"

// const testBtn = document.querySelector('.nope-btn')
// testBtn.addEventListener('click', handleDislike);
document.querySelector('.nope-btn').addEventListener('click', () => {
  console.log('test')
})

const doggo = new Dog(dogData[0]);

// const getNextDog = () => {
//   const nextDog = dogData.shift()
//   renderDog()
//   return nextDog ? new Dog(nextDog) : {}
// }


const renderDog = () => {
  document.getElementById('dog').innerHTML = doggo.getDogHtml();
  // document.getElementById('btns').innerHTML = doggo.getBtnHtml();
}


renderDog()