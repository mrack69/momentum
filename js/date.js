import {showGreeting} from './greeting.js'

const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const options = {weekday: 'long', day: 'numeric', month: 'long'};
  const currentDate = date.toLocaleDateString('en-EN', options);
  timeElement.textContent = currentTime;
  dateElement.textContent = currentDate;
  showGreeting();
  setTimeout(showTime, 1000);
}