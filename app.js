const DOMAIN = 'https://openweathermap.org/api';
const API_KEY = "09f877c9272bc64e109cd676a8422c51";
const url = `aapi.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

//variables

const city = search.value

try {

    const result = await axios.get(url + city);
    console.log(result);


} catch (error) {
    console.log(error.message);
}

