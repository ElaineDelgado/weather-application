/* Para informações sobre a API ler o README.md */

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
    location: { name },
    current,
  } = await fetchData(cityURL)

  return [name, current]
}

getCityData('tiradentes').then(console.log)

