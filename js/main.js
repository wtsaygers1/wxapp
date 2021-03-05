// input: VALID zip code
// output: City, Temp (Kelvins, Farenheit, Celcius), Condition, Other Infor(image)

const submitBtn = document.getElementById("wxSubmit");
const area = document.getElementById("zipEnter");
const city = document.getElementById("city");
const kelvins = document.getElementById("kels");
const farenheit = document.getElementById("fars");
const celsius = document.getElementById("cels");
const condition = document.getElementById("cond");

//zip is just an empty value that will be used when a user inputs a valid zip code
let zip = "";
// zip = 40503;
let country = "";
let wxInfo = [];
let apiKey = "3f8743541f94b0f19f67a295af987506";

// event listener for the submit button
submitBtn.addEventListener("click", getWx);

// make sure the fetch function is working in the console before moving forward with display
function getWx() {
  
    let zip = document.getElementById("zipEnter").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}`;

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (wxData) {
        console.log(wxData);
        wxInfo = wxData
        // render function is defined below but needs to be at the end of the fetch to populate the HTML
        render()
    }).catch(function (err) {
        console.log('Fetch problem: ' + err.message);
    });
}

function init() {
    // console.log the fetch in the browser console to check 
    getWx()
}

// display the wx function
// in the display function is where the document selectors for populating the html will go

function render() {
    city.innerHTML = wxInfo.name;
    kelvins.innerHTML = Math.floor(wxInfo.main.temp) + " K";
    farenheit.innerHTML = Math.floor((wxInfo.main.temp - 273.15) * 9/5 + 32) + " F";
    celsius.innerHTML = Math.floor(wxInfo.main.temp - 273.15) + " C";
    condition.innerHTML = `Weather: ${wxInfo.weather[0].main} <br> Skies: ${wxInfo.weather[0].description}`
}

// init function after all the other functions

document.body.onload = init;

// Stretch submit btn function - around 30 minute mark in video