//variables
const button = document.querySelector('#search');
const domain = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=';
const api_key = "09f877c9272bc64e109cd676a8422c51";
//const container = document.querySelector('.container');
const container = document.querySelector('#one');
const containerTwo = document.querySelector('#two');
const containerThree = document.querySelector('#three');
const containerFour = document.querySelector('#four')


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

function removeSearchThree () {
    while(containerThree.lastChild) {
        containerThree.removeChild(containerThree.lastChild)
    }
}

function removeSearchFour () {
    while(containerFour.lastChild) {
        containerFour.removeChild(containerFour.lastChild)
    }
}

const getCity = async (city) => {
    //container.remove();
    removeSearch();
    removeSearchTwo();
    removeSearchThree();
    removeSearchFour();
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

     const weatherDescription = document.createElement('h1')
     weatherDescription.innerText = `Weather: ${result.data.weather[0].description}`;
     containerThree.appendChild(weatherDescription);

      const currentTemp = document.createElement('h1');
     currentTemp.innerText = `Current temp: ${Math.floor(result.data.main.temp)}°F`;
     container.appendChild(currentTemp);

    
    const high = document.createElement('h1');
    high.innerText = `High: ${Math.floor(result.data.main.temp_max)}°F`;
    containerTwo.appendChild(high);

    const low = document.createElement('h1');
    low.innerText = `Low: ${Math.floor(result.data.main.temp_min)}°F`;
    containerTwo.appendChild(low);

    //  const realTemp = document.createElement('h1');
    //  realTemp.innerText = `Feels like: ${Math.floor(result.data.main.feels_like)}°F`;
    //  containerTwo.appendChild(realTemp);

     const windSpeed = document.createElement('h1');
     windSpeed.innerText = `Wind speed: ${result.data.wind.speed}mph`;
     containerFour.appendChild(windSpeed);

   
    

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


 
      