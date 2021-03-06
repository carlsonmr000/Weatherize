# Project Overview

## WEATHERIZE

## Project Description

Users can look up a city, state, or country and get the weather for the day. It will return the current temperature, min-temp, max-temp, sunset/sunrise, and wind.

## API and Data Sample

Open Weather Map API: api.openweathermap.org/data/2.5/weather?q={city name}&appid=09f877c9272bc64e109cd676a8422c51

## API Snippet

```

{
    "coord": {
        "lon": -87.65,
        "lat": 41.85
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 296.51,
        "feels_like": 296.94,
        "temp_min": 294.84,
        "temp_max": 298.15,
        "pressure": 1012,
        "humidity": 78
    },

```

## Desktop and Mobile Wireframes

Desktop Wireframe: https://github.com/carlsonmr000/Weatherize/issues/1#issue-915036469

Phone Wireframe: https://github.com/carlsonmr000/Weatherize/issues/5#issue-915386137

## MVP/PostMVP

#### MVP

-HTML CSS and Javascript

-Style with flexbox

-Use external api

-Use axios to make the data request

-Media query

-Deploy on Surge

-Search bar and button

-Nav bar

#### PostMVP

-add api for weather history

-button to see sunset/sunrise

-hover added to search button

-raindrop animation for rainy days

-sun rays animation for sunny days

## Priority Matrix

https://github.com/carlsonmr000/Weatherize/issues/2#issue-915046529

## Timeframe

| Component           | Priority | Estimated Time | Time Invested | Actual Time | Axios | Debugging | Javascript |
| ------------------- | :------: | :------------: | :-----------: | :---------: | :---: | :-------: | :--------: | -------- |
| Initial HTML        |    M     |      3hrs      |       X       |      X      |       |           |            |
| Basic landing page  |    M     |      3hrs      |       X       |      X      |       |           |            |
| Fetch data          |    M     |      3hrs      |       X       |      X      |       |           |            |
| Axios set up        |    H     |      3hrs      |               |      X      |   X   |     X     |     x      |
| Render results      |    H     |      3hrs      |               |             |   X   |     x     |     x      |
| Basic CSS           |    H     |      3hrs      |               |             |   X   |     X     |     x      |
| Mobile Media Query  |    H     |      3hrs      |               |             |   X   |     x     |     x      |
| Desktop Media Query |    H     |      3hrs      |               |             |   X   |     x     |     x      |
| Styling             |    M     |      3hrs      |       X       |      X      |       |           |            |
| Debugging           |    H     |      3hrs      |       X       |      X      |       |           |            |
| Total               |    H     |     30hrs      |               |             |       |           |            | (edited) |

## Goals

| Day       | Priority | Estimated Time | HTML | CSS | Axios | Debugging | Javascript |
| --------- | :------: | :------------: | :--: | :-: | :---: | :-------: | :--------: | -------- |
| Tuesday   |    H     |      6hrs      |  X   |  X  |       |           |            |
| Wednesday |    H     |      8hrs      |      |  X  |   X   |     X     |     x      |
| Thursday  |    H     |      7hrs      |      |     |   X   |     x     |     x      |
| Friday    |    H     |      6hrs      |      |     |   X   |     X     |     x      |
| Saturday  |    M     |      2hrs      |  X   |  X  |       |           |            |
| Sunday    |    M     |      1hrs      |  X   |  X  |       |           |            |
| Total     |    H     |     30hrs      |      |     |       |           |            | (edited) |

### Code Snippet

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

### Change Log

I initially wanted the information from the API to appear after the user clicks search, but I didn't know how to do that in javascript. So I changed my layout to have empty boxes on the homepage that are filled in afer a user clicks the search button.

To display the boxes, I started with flexbox but they weren't organized the way I wanted them to be. So I switched to grid and put them in 2 rows. But when I was adding the media query, I couldn't get the boxes to fall in a single line. So I put the boxes in a column using the grid method.
