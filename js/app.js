const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityweatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]',
)
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg= document.querySelector('[data-js="time"]')
const timeImgIcon= document.querySelector('[data-js="time-icon"]')
// const cityWeatherIconContainer = document.querySelector(
//   '[data-js="city-weather-icon"]',
// )

cityForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  
  const inputValue = event.target.city.value
  const [name, {temperature, weather_descriptions}] = await getCityData(inputValue)

  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
    console.log(city, temperature, weather_descriptions[0])

  cityNameContainer.innerText = city
  cityweatherContainer.innerText = weather_descriptions[0]
  cityTemperatureContainer.innerText = temperature
  // const iconSRC = weatherCityData.weather.weather_icons[0]
  // cityWeatherIconContainer.setAttribute('src', iconSRC)

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
