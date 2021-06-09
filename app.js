//variables
const button = document.querySelector('#search');
const domain = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = "09f877c9272bc64e109cd676a8422c51";

const getCity = async (city) => {

    const base_url = `${domain}${city}&appid=${api_key}`;


    try {
        console.log("hello from the file", city);
        const result = await axios.get(base_url);
        console.log(result);
        const cityName = result.data.name;
        console.log(cityName);
        const kelvin = result.data.main.temp;
        const temp = ((kelvin - 273.15) * 1.8) + 32;
        console.log(parseInt(temp));
      
   


    } catch (error) {
        console.log(error.message);
    }
}
getCity("Chicago");

// const getTemperature = async (city) => {

//     const base_url = `${domain}${city}&appid=${api_key}`;


//     try {

//         const result = await axios.get(base_url);
//         console.log(result);
//         const response = result.data.main.temp;
//         console.log(response);
//         let temp = ((response - 273.15) * 1.8) + 32;
//         console.log(parseInt(temp));
   


//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getTemperature();

button.addEventListener('click', (e) => {
    e.preventDefault();

    let city = document.querySelector('#blank').value;
    //console.log(city);
    getCity(city); 
    // getTemperature();
});

 

