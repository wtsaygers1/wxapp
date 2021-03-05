// input: VALID zip code
// output: City, Temp (Kelvins, Farenheit, Celcius), Condition, Other Infor(image)

// may be good practice, at least for now, to create a const variable for any element with an id
const submitBtn = document.getElementById("wxSubmit");
const area = document.getElementById("zipEnter");
const city = document.getElementById("city");
const kelvins = document.getElementById("kels");
const farenheit = document.getElementById("fars");
const celsius = document.getElementById("cels");
const condition = document.getElementById("cond");
const icon = document.getElementById("icon");
const alert = document.getElementById("alert");

//zip is just an empty value that will be used when a user inputs a valid zip code
let zip = "";
// zip = 40503;
let country = "";
// an array that stores the information from the wx api in the json file
let wxInfo = [];
// unique apiKey 
let apiKey = "3f8743541f94b0f19f67a295af987506";

// event listener for the submit button - when a user clicks the submit button the getWx function runs
submitBtn.addEventListener("click", getWx);

// make sure the fetch function is working in the console before moving forward with display
function getWx() {
//   accesses the value entered in the zip input and runs that zip code through the api
    let zip = document.getElementById("zipEnter").value;
// the fetch goes to this api and finds the zip, country, and uses the api key
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}`;

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (wxData) {
// console just checks to make sure gathering the correct info
        console.log(wxData);
        wxInfo = wxData
        // render function is defined below but needs to be at the end of the fetch to populate the HTML
        render()
// in case any errors, receive the error message
    }).catch(function (err) {
        console.log('Fetch problem: ' + err.message);
        alert.classList.remove("d-none");
    });
}

// runs when the page first loads and needed the alert.classList.add("d-none"); to remove the alert when the page first loads
function init() {
     alert.classList.add("d-none");
}

// in the render function is where the document selectors for populating the html will go

function render() {
    city.innerHTML = wxInfo.name;
// the next three lines concatenate  
    kelvins.innerHTML = Math.floor(wxInfo.main.temp) + " K";
    farenheit.innerHTML = Math.floor((wxInfo.main.temp - 273.15) * 9/5 + 32) + " F";
    celsius.innerHTML = Math.floor(wxInfo.main.temp - 273.15) + " C";
    // the next two lines use string literals
    condition.innerHTML = `Visibility: ${wxInfo.weather[0].main} <br> Skies: ${wxInfo.weather[0].description}`
    // could set up a conditional with a toLocaleDate to grab day or night icon
    icon.src = `http://openweathermap.org/img/wn/${wxInfo.weather[0].icon}@4x.png`
    alert.classList.add("d-none");
}

document.body.onload = init;

// Stretch submit btn function - around 30 minute mark in video