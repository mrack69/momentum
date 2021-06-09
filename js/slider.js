import {getTimeofDay} from './greeting.js';

let numberOfBg;
const imageBaseSrc = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';

export function setBg(number = numBg()) {
  numberOfBg = number;
  const hours = new Date().getHours();
  const timeOfDay = getTimeofDay(hours);
  const img = new Image();
  img.src = `${imageBaseSrc}${timeOfDay}/${numBg(number)}.jpg`;
  img.onload = () => {
    document.body.style.backgroundImage = `url('${img.src}')`;
  }
}

function getRandomNum() {
  let rand = 1 - 0.5 + Math.random() * 20;
  return Math.round(rand);
}

function numBg(number = getRandomNum()) {
  number = number.toString().padStart(2, '0');
  return number;
}

export function nextBg() {
  let number = numberOfBg;
  (number < 20) ? number++ : number = 1;
  setBg(number);
}

export function prevBg() {
  let number = numberOfBg;
  (number > 1) ? number-- : number = 20;
  setBg(number);
}