import {showTime} from './date.js';
import {setBg, nextBg, prevBg} from './slider.js';
import {getWeather} from './weather.js';
import {audio, playBtn, playNextBtn, playPrevBtn, playOrPause, playNext, playPrev, playListContainer} from './audio.js';
import {playList} from './playList.js';

const name = document.querySelector('.name');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const city = document.querySelector('.city');

showTime();
setBg();
playList.forEach(element => {
  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = element.title;
  playListContainer.append(li)
});

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
playBtn.addEventListener('click', playOrPause);
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
audio.addEventListener('ended', playNext);