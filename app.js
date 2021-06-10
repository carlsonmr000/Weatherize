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
   
    const name = document.createElement('h1');
    name.innerText = result.data.name;
    parentContainer.appendChild(name);

    const country = document.createElement('h3');
    country.innerText = result.data.sys.country;
    parentContainer.appendChild(country);
    

    const tempResult = document.createElement('h2');
    tempResult.innerText = Math.floor(result.data.main.temp);
    parentContainer.appendChild(tempResult);

    const maxTemp = document.createElement('h4');
    maxTemp.innerText = Math.floor(result.data.main.temp_max);
    parentContainer.appendChild(maxTemp);

    const minTemp = document.createElement('h3');
    minTemp.innerText = Math.floor(result.data.main.temp_min);
    parentContainer.appendChild(minTemp);

    const sunrise = document.createElement('h3');
    sunrise.innerText = result.data.sys.sunrise;
    parentContainer.appendChild(sunrise);

    const sunset = document.createElement('h3');
    sunset.innerText = result.data.sys.sunset;
    parentContainer.appendChild(sunset);

    const weather = document.createElement('h2');
    weather.innerText = result.data.weather[0].description;
    parentContainer.appendChild(weather);

    const feelsLike = document.createElement('h2');
    feelsLike.innerText = result.data.main.feels_like;
    parentContainer.appendChild(weather);

    const wind = document.createElement('h2');
    wind.innerText = result.data.wind.speed;
    parentContainer.appendChild(wind);

    



    
   



    main.append(parentContainer);
}


 

button.addEventListener('click', (e) => {
    e.preventDefault();

    // const remove = document.querySelector('#parent-container');
    // console.log(remove);
    // remove.childNodes.forEach(node => {node.remove()});
    // console.log(remove);

    let city = document.querySelector('#blank').value;
    //console.log(city);
    getCity(city); 
 
 }); 
    removeSearch();

 

