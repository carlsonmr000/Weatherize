//variables
const button = document.querySelector('#search');
const domain = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
const api_key = "09f877c9272bc64e109cd676a8422c51";
const resultsDiv = document.querySelector('.results-div');

// const logInput = (event) => {
//     event.preventDefault();
//     getCity();
     
// }

function removeSearch() {

    while(resultsDiv.lastChild) {
        resultsDiv.removeChild(resultsDiv.lastChild)
    }
}

const getCity = async (city) => {
    removeSearch();
    const base_url = `${domain}${city}&appid=${api_key}`;


    try {
        //console.log("hello from the file", city);
        const result = await axios.get(base_url);
        console.log(result);
        const cityName = result.data.name;
        console.log(cityName);
        const kelvin = result.data.main.temp;
        const temp = ((kelvin - 273.15) * 1.8) + 32;
        console.log(parseInt(temp));
        displayResults(city);



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
   
     const name2 = document.querySelector('.city');
     name2.innerText = result.data.name;
     resultsDiv.appendChild(name2);
    
     const weather = document.querySelector('.description');
     weather.innerText = `Weather description: ${result.data.weather[0].description}`;
     resultsDiv.appendChild(weather);
    
     const tempResult = document.querySelector('.current-temp');
     tempResult.innerText = `Current temp: ${Math.floor(temp)}°F`;
     resultsDiv.appendChild(tempResult);

    const maxTemp = document.querySelector('.high');
    maxTemp.innerText = `High: ${Math.floor(result.data.main.temp_max)}°F`;
    resultsDiv.appendChild(maxTemp);

     const minTemp = document.querySelector('.low');
     minTemp.innerText = `Low: ${Math.floor(result.data.main.temp_min)}°F`;
     resultsDiv.appendChild(minTemp);

     const feelsLike = document.querySelector('.feels-like');
    feelsLike.innerText = `Feels like: ${result.data.main.feels_like}°F`;
     resultsDiv.appendChild(feelsLike);

     const wind = document.querySelector('.wind');
     wind.innerText = `Wind speed: ${result.data.wind.speed}mph`;
     resultsDiv.appendChild(wind);

    landing.append(resultsDiv);
}

button.addEventListener('click', (e) => {
    e.preventDefault()

 

    let city = document.querySelector('#blank').value;
    //console.log(city);
    getCity(city); 
 
 }); 

    removeSearch();

 
      