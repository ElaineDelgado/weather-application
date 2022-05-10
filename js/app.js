const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityweatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]',
)
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  
  const inputValue = event.target.city.value
  const [city, { temperature, weather_descriptions, is_day, weather_icons }] =
    await getCityData(inputValue)
  const timeIcon = `<img class="time-icon" src="${weather_icons[0]}"/>`

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }

is_day === 'yes'
  ? (timeImg.src = './src/day.svg')
  : (timeImg.src = './src/night.svg') 

    console.log(
      city,
      temperature,
      weather_descriptions[0],
      is_day,
      weather_icons[0])

  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.innerText = city
  cityweatherContainer.innerText = weather_descriptions[0]
  cityTemperatureContainer.innerText = temperature

  cityForm.reset()

})

/*
{
  "request": {...},
  "location": {
    "name": "Rio De Janeiro",
    "country": "Brazil",
    "region": "Rio de Janeiro",
    "lat": "-22.900",
    "lon": "-43.233",
    "timezone_id": "America/Sao_Paulo",
    "localtime": "2022-04-15 20:14",
    "localtime_epoch": 1650053640,
    "utc_offset": "-3.0"
  },
  "current": {
    "observation_time": "11:14 PM",
    "temperature": 21,
    "weather_code": 116,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 9,
    "wind_degree": 270,
    "wind_dir": "W",
    "pressure": 1014,
    "precip": 0,
    "humidity": 69,
    "cloudcover": 25,
    "feelslike": 21,
    "uv_index": 1,
    "visibility": 10,
    "is_day": "no"
  }
} */
