import {showTime} from './date.js';

const name = document.querySelector('.name');

showTime();

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}

window.addEventListener('load', getLocalStorage)
window.addEventListener('beforeunload', setLocalStorage)