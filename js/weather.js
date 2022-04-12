// teste api docs:
// https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search

const APIKey = 'H2GOYHYYr9L3AljQX1JGj1uHbWCUG9jg' 
const cityURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=recife` 

fetch(cityURL)