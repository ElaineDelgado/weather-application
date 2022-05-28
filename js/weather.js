const APIKey = '422499b6dd8c9fb1e08d38bd081f4c1e'

const getCityUrl = (cityName) =>
  `http://api.weatherstack.com/current?access_key=${APIKey}&query=${cityName}`

const fetchData = async (url) => {
  try {
    const response = await fetch(getCityUrl(url))

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch ({ name, message }) {
    console.log({ name, message })
  }
}

const getCityData = async (cityName) => {
  const cityURL = getCityUrl(cityName)
  const {
    location: { name: city },
    current: weatherInfo,
  } = await fetchData(cityURL)

  return [city, weatherInfo]
}
