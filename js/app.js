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
  
  const [city, {condition, temp_c, is_day}] = await getCityData(cityName)
  console.log(city, condition.text)
  
  const timeIcon = `<img class="time-icon" src="${condition.icon}"/>`
  
  timeImg.src  = is_day === 1 ? './src/day.svg' : './src/night.svg'
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.innerText = city
  cityweatherContainer.innerText = condition.text
  cityTemperatureContainer.innerText = temp_c
  
  showCityCard()
}

const handleFormSubmit = (event) => {
  event.preventDefault()

  const inputValue = event.target.city.value
  
  showCityWeatherInfo(inputValue)
  
  localStorage.setItem('city', inputValue)
  cityForm.reset()
}

const showLocalStorageCity = () => {
  const city = localStorage.getItem('city')
  
  if(city) {

    showCityWeatherInfo(city)
  }
}

cityForm.addEventListener('submit', handleFormSubmit)

showLocalStorageCity() 
