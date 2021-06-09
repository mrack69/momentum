const apiKey = '3a242aa862804d2c6d5fdb4cee4b060b';
const lang = 'en';

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

export async function getWeather() {  
  let city = document.querySelector('.city');
  city = city.value;
  if(!city) city = 'Минск';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  if (res.ok) {
    const data = await res.json(); 
    weatherError.textContent = '';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${Math.round(data.wind.speed)}m/s`;
    humidity.textContent = `${Math.round(data.main.humidity)}%`;
  }
  else weatherError.textContent = `Error HTTP: ${res.status}`;
}