import {showTime} from './date.js';
import {setBg, nextBg, prevBg} from './slider.js';
import {getWeather} from './weather.js';

const name = document.querySelector('.name');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const city = document.querySelector('.city');

showTime();
setBg();

function setLocalStorage() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('city', city.value)
}

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    getWeather(city.value);
  } else getWeather();
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
slideNext.addEventListener('click', nextBg);
slidePrev.addEventListener('click', prevBg);
city.addEventListener('change', getWeather);