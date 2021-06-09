export const timeElement = document.querySelector('.time');
export const dateElement = document.querySelector('.date');
export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString('ru-RU', options);
  timeElement.textContent = currentTime;
  dateElement.textContent = currentDate;
  setTimeout(showTime, 1000);
}