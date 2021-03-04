// input: VALID zip code
// output: City, Temp (Kelvins, Farenheit, Celcius), Condition, Other Infor(image)

//zip is just an empty value that will be used when a user inputs a valid zip code
let zip = "";
// zip = 40503;
let apiKey = "3f8743541f94b0f19f67a295af987506";
// Do I need countrycode as a filler or can I just delete it???
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},&appid=${apiKey}`;
// let wxData = 

// fetch wx function
// make sure the fetch function is working in the console before moving forward with display
function getWx() {
    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (wxData) {
        console.log(wxData);
    }).catch(function (err) {
        console.log('Fetch problem: ' + err.message);
    });
}

// display the wx function


// in the display function is where the document selectors for populating the html will go

// event listener for the submit button



// init function after all the other functions

function init() {
    // console.log the fetch in the browser console to check 
    getWx()
}

// Stretch submit btn function - around 30 minute mark in video

document.body.onload = init;