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
        //console.log(result);
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
    // const container = document.createElement('div');
    // container.setAttribute('id', parent-container)
    

    const tempResult = document.createElement('h1');
    tempResult.innerText = Math.floor(result.data.main.temp);
    parentContainer.appendChild(tempResult);

    const name = document.createElement('h1');
    name.innerText = result.data.name;
    parentContainer.appendChild(name);
    
   



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

 

