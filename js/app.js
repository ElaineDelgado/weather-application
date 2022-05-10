const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityweatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]',
)
const cityCard = document.querySelector('[data-js="city-card"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCityCard = () => {  
  if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async (cityName) => {
  
  const [city, { temperature, weather_descriptions, is_day, weather_icons }] =
    await getCityData(cityName)

  is_day === 'yes'
    ? (timeImg.src = './src/day.svg')
    : (timeImg.src = './src/night.svg')
  const timeIcon = `<img class="time-icon" src="${weather_icons[0]}"/>`

  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.innerText = city
  cityweatherContainer.innerText = weather_descriptions[0]
  cityTemperatureContainer.innerText = temperature
}

cityForm.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const inputValue = event.target.city.value  

  showCityCard ()
  showCityWeatherInfo(inputValue)

  cityForm.reset()
})