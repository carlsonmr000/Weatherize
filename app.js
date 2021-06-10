//variables
const button = document.querySelector('#search');
const domain = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
const api_key = "09f877c9272bc64e109cd676a8422c51";
const parentContainer = document.querySelector('#parent-container')

// const logInput = (event) => {
//     event.preventDefault();
//     getCity();
    
// }

function removeSearch() {

    while(parentContainer.lastChild) {
        parentContainer.removeChild(parentContainer.lastChild)
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
        //console.log(cityName);
        const kelvin = result.data.main.temp;
        const temp = ((kelvin - 273.15) * 1.8) + 32;
        //console.log(parseInt(temp));
        displayResults(city);



    } catch (error) {
        console.log(error.message);
    }
}
//getCity("Chicago");

    const displayResults = async (city) => {
    
    
    const main = document.querySelector('#main');
    const base_url = `${domain}${city}&appid=${api_key}`;
    
    const result = await axios.get(base_url);
    console.log(result);
   
     const name = document.querySelector('.box1');
     name.innerText = result.data.name;
     parentContainer.appendChild(name);
    
     const weather = document.querySelector('h2');
     weather.innerText = `Weather description: ${result.data.weather[0].description}`;
     parentContainer.appendChild(weather);
    
     const tempResult = document.querySelector('h2');
     tempResult.innerText = `Current temp: ${Math.floor(result.data.main.temp)}°F`;
     parentContainer.appendChild(tempResult);

    const maxTemp = document.querySelector('h4');
    maxTemp.innerText = `High: ${Math.floor(result.data.main.temp_max)}°F`;
    parentContainer.appendChild(maxTemp);

     const minTemp = document.querySelector('h3');
     minTemp.innerText = `Low: ${Math.floor(result.data.main.temp_min)}°F`;
     parentContainer.appendChild(minTemp);

     const feelsLike = document.querySelector('h2');
    feelsLike.innerText = `Feels like: ${result.data.main.feels_like}°F`;
     parentContainer.appendChild(feelsLike);

     const wind = document.querySelector('h2');
     wind.innerText = `Wind speed: ${result.data.wind.speed}mph`;
     parentContainer.appendChild(wind);

    main.append(parentContainer);
}

button.addEventListener('click', (e) => {
    e.preventDefault()

 

    let city = document.querySelector('#blank').value;
    //console.log(city);
    getCity(city); 
 
 }); 
    removeSearch();

 
      