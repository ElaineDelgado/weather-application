const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityweatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector(
  '[data-js="city-temperature"]',
)
const cityCard = document.querySelector('[data-js="city-card"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

let timeImg = document.querySelector('[data-js="time"]')

const cityIsNotVisible  = cityCard.classList.contains('d-none')

const showCityCard = () => {
  if (cityIsNotVisible) {
    cityCard.classList.remove('d-none')
  }
}

const showCityWeatherInfo = async (cityName) => {
  
  const [
    city,
    {
      temperature,
      weather_descriptions: [weatherDescription],
      is_day,
      weather_icons,
    },
  ] = await getCityData(cityName)
  const timeIcon = `<img class="time-icon" src="${weather_icons[0]}"/>`
  
  timeImg.src  = is_day ==='yes' ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.innerText = city
  cityweatherContainer.innerText = weatherDescription
  cityTemperatureContainer.innerText = temperature
}

const handleFormSubmit = (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value

  showCityCard()
  showCityWeatherInfo(inputValue)

  cityForm.reset()
}

cityForm.addEventListener('submit', handleFormSubmit)