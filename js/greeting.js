const greeting = document.querySelector('.greeting');

function getTimeofDay(hours) {
  if(hours >= 6 && hours < 12) return 'morning';
  else if(hours >= 12 && hours < 18) return 'day';
  else if (hours >= 18 && hours < 24) return 'evening';
  else return 'night';
}
export function showGreeting() {
  const date = new Date();
  const hours = date.getHours();
  greeting.textContent = `Good ${getTimeofDay(hours)},`
}