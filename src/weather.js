const cityName = document.querySelector('.city-name');
const weatherType = document.querySelector('.type-weather');
const weatherNow = document.querySelector('.weather-now');
const hiLow = document.querySelector('.today-hi-low');

const weekWeatherDivs = document.querySelectorAll('.weather-div');
const weekWeather = document.querySelectorAll('.week-weather');
const maxTemp = document.querySelectorAll('.max-temp');
const minTemp = document.querySelectorAll('.min-temp');

const goButton = document.querySelector('.button-input');
const cityInput = document.querySelector('.city-input');


function cityNameOnly(city){
  const regex = new RegExp('^[a-zA-Z ]+$');
  if (regex.test(city) === false){
    cityInput.value = '';
    alert('City/state not found')
  } else {
  getCoordinates(city).catch
    (err=>{
      cityInput.value = '';
      alert('City/state not found');
  });
}
}

async function getCoordinates(city){
  let url = `https:api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=7&appid=0ad552a59c7b844bcd402e711e49d1d6`;
  const response = await fetch (`https:api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=7&appid=0ad552a59c7b844bcd402e711e49d1d6`);
  const weatherData = await response.json();
  const lat = weatherData.city.coord.lat;
  const lon = weatherData.city.coord.lon;
  const weatherSource = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=0ad552a59c7b844bcd402e711e49d1d6`;
  return getWeather(weatherSource);

}

async function getWeather(inputSource){
  const weather = await fetch(inputSource);
  const weatherData = await weather.json();
  let city = cityInput.value.toUpperCase()
  cityName.textContent = '';
  cityName.textContent = city
  cityInput.value = '';
  displayTemp(weatherData);
  displayType(weatherData);
  displayHiLow(weatherData);
  displayWeekType(weatherData);
}
  
function enterCity(e){
  const city = cityInput.value;
  cityNameOnly(city);
};

function displayTemp(data){
  let currentWeather = Math.floor(data.current.temp);
  weatherNow.textContent = `${currentWeather}${String.fromCharCode(176)}`;
  for (let i = 0; i <weekWeatherDivs.length;i++){
    maxTemp[i].textContent = `${Math.floor(data.daily[i+1].temp.max)}`;
    minTemp[i].textContent = `${Math.floor(data.daily[i+1].temp.min)}`;
  }
}

function displayHiLow(data){
  let hiToday = Math.floor(data.daily[0].temp.max);
  let lowToday = Math.floor(data.daily[0].temp.min);
  hiLow.textContent = `H:${hiToday}${String.fromCharCode(176)} 
  L:${lowToday}${String.fromCharCode(176)} `
}

function displayType(data){
  let weatherTypeNow = `${data.daily[0].weather[0].main}`
  weatherType.textContent = '';
  weatherType.textContent = weatherTypeNow;
}

function displayWeekType(data){
  for (let i = 0; i <weekWeather.length;i++){
    weekWeather[i].innerHTML = '';
    let weatherImage = document.createElement('img');
    let weatherIcon = data.daily[i].weather[0].icon;
    weatherImage.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
    weekWeather[i].appendChild(weatherImage);
  }
}


async function pageLoad(){
  const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=hourly,minutely&units=imperial&appid=0ad552a59c7b844bcd402e711e49d1d6');
  const londonData = await response.json();
  displayTemp(londonData)
  displayHiLow(londonData);
  displayType(londonData);
  displayWeekType(londonData);
  console.log(londonData)
}

goButton.addEventListener('click',enterCity);
cityInput.addEventListener('keypress',function(e) {
  if (e.key === 'Enter'){
    enterCity(cityInput.value);
  }
});

pageLoad();


