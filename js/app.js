import {showTime} from './date.js';
import {setBg, nextBg, prevBg} from './slider.js';

const name = document.querySelector('.name');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

showTime();
setBg();

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
slideNext.addEventListener('click', nextBg);
slidePrev.addEventListener('click', prevBg);