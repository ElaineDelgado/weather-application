const APIKey = '585fd43ab04b431dbc7114516221406'

const getCityUrl = (cityName) =>
`https://api.weatherapi.com/v1/current.json?key=585fd43ab04b431dbc7114516221406&q=${cityName}&aqi=yes`

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
  const {
    current: weatherInfo,
    location: { name: city },
  } = await fetchData(cityName)

  return [city, weatherInfo]
}


