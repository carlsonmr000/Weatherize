//variables
const button = document.querySelector('#search');
const domain = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
const api_key = "09f877c9272bc64e109cd676a8422c51";
//const container = document.querySelector('.container');
const container = document.querySelector('#one');
const containerTwo = document.querySelector('#two');



// const logInput = (event) => {
//     event.preventDefault();
//     getCity();
     
// }

function removeSearch() {

    while(container.lastChild) {
        container.removeChild(container.lastChild)
    }
}

function removeSearchTwo () {
    while(containerTwo.lastChild) {
        containerTwo.removeChild(containerTwo.lastChild)
    }
}

const getCity = async (city) => {
    //container.remove();
    removeSearch();
    removeSearchTwo();
    const base_url = `${domain}${city}&appid=${api_key}`;


    try {
        //console.log("hello from the file", city);
        const result = await axios.get(base_url);
        console.log(result);
        const cityName = result.data.name;
        //console.log(cityName);
        //const kelvin = result.data.main.temp;
        //const temp = ((kelvin - 273.15) * 1.8) + 32;
        //console.log(parseInt(temp));
        displayResults(city);
        //const resultsDiv = document.querySelector('.results-div');
        //console.log(resultsDiv);

     

    } catch (error) {
        console.log(error.message);
    }
}
//getCity("Chicago");

    const displayResults = async (city) => {
    
    
    const landing = document.querySelector('#landing');
    const base_url = `${domain}${city}&appid=${api_key}`;
    
    const result = await axios.get(base_url);
    console.log(result);

    const nameofCity = document.createElement('h1')
    nameofCity.innerText = result.data.name;
     container.appendChild(nameofCity);

     const weatherDescription = document.createElement('h3')
     weatherDescription.innerText = `Weather: ${result.data.weather[0].description}`;
     container.appendChild(weatherDescription);

      const currentTemp = document.createElement('h1');
     currentTemp.innerText = `Current temp: ${Math.floor(result.data.main.temp)}°F`;
     container.appendChild(currentTemp);

    
    const high = document.createElement('h2');
    high.innerText = `High: ${Math.floor(result.data.main.temp_max)}°F`;
    container.appendChild(high);

    const low = document.createElement('h2');
    low.innerText = `Low: ${Math.floor(result.data.main.temp_min)}°F`;
    container.appendChild(low);

     const realTemp = document.createElement('h4');
     realTemp.innerText = `Feels like: ${Math.floor(result.data.main.feels_like)}°F`;
     containerTwo.appendChild(realTemp);

     const windSpeed = document.createElement('h4');
     windSpeed.innerText = `Wind speed: ${result.data.wind.speed}mph`;
     containerTwo.appendChild(windSpeed);

   
    //  const cityContainer = document.querySelector('#city-container');
    //  const nameofCity = document.createElement('h1')
    //  nameofCity.innerText = result.data.name;
    //  cityContainer.appendChild(nameofCity)
    //  resultsDiv.appendChild(cityContainer);
    
    //  const container = document.querySelector('#one');
    //  const weatherDescription = document.createElement('h1')
    //  weatherDescription.innerText = `Weather description: ${result.data.weather[0].description}`;
    //  container.appendChild(weatherDescription);
    
    //  const tempResult = document.querySelector('.current-temp');
    //  const currentTemp = document.createElement('h2');
    //  currentTemp.innerText = `Current temp: ${Math.floor(result.data.main.temp)}°F`;
    //  resultsDiv.appendChild(currentTemp);

    // const maxTemp = document.querySelector('.high');
    // const high = document.createElement('h2');
    // high.innerText = `High: ${Math.floor(result.data.main.temp_max)}°F`;
    // resultsDiv.appendChild(high);

    //  const minTemp = document.querySelector('.low');
    //  const low = document.createElement('h2');
    //  low.innerText = `Low: ${Math.floor(result.data.main.temp_min)}°F`;
    //  resultsDiv.appendChild(low);

    //  const feelsLike = document.querySelector('.feels-like');
    //  const realTemp = document.createElement('h3')
    // realTemp.innerText = `Feels like: ${result.data.main.feels_like}°F`;
    //  resultsDiv.appendChild(realTemp);

    //  const wind = document.querySelector('.wind');
    //  const windSpeed = document.createElement('h3');
    //  windSpeed.innerText = `Wind speed: ${result.data.wind.speed}mph`;
    //  resultsDiv.appendChild(windSpeed);

    landing.append(container);
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    //container.remove();

 

    let city = document.querySelector('#blank').value;
    //console.log(city);
    getCity(city); 
 
 }); removeSearch();
    removeSearchTwo();


 
      