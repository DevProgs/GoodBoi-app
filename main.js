import dogs from "/data.js"
import { likeBtn, dislikeBtn } from './buttons'



document.querySelector(".nope-btn").addEventListener('click', dislikeBtn)

document.querySelector(".like-btn").addEventListener('click', likeBtn)