// Toggle menu

let menu = document.querySelector(".options-container");

const menuIcon = document.querySelector("#icon")

menuIcon.addEventListener("click", function(){

  menu.classList.toggle("active")

});

// Digital clock display

const timeValue = document.querySelector(".time")

function displayTime() {

  let dateTime = new Date();

  let hrs = dateTime.getHours();

  let min = dateTime.getMinutes();

  let sec = dateTime.getSeconds();

  let session = document.getElementById("session");

  if (hrs >= 12) {

    session.innerHTML = "PM";

  } else {

    session.innerHTML = "AM";

  }

  // Grab elements HTML

  const hoursElement = document.getElementById("hours");

  const minutesElement = document.getElementById("minutes");

  const secondsElement = document.getElementById("seconds");

  // Display elements

  hoursElement.innerHTML = hrs;

  minutesElement.innerHTML = min;

  secondsElement.innerHTML = sec;
}
// Call displaytime function

setInterval(displayTime, 10);

// Weather App Display.

// Select weather elements.

const iconElement = document.querySelector(".weather-icon");

const tempElement = document.querySelector(".temperature-value p");

const descElement = document.querySelector(".temperature-description p");

const locationElement = document.querySelector(".location p");

const notificationElement = document.querySelector(".notification");

const humidityElement = document.querySelector(".humidity");

const pressureElement = document.querySelector(".pressure");

const weather = {};

weather.temperature = {

  unit: "celsius",

};


KELVIN = 273;

// API KEY

const key = "82005d27a116c2880c8f0fcb866998a0";

// Weather display if geolocation is accessed or browser does not support geolocation.

if ("geolocation" in navigator) {

  navigator.geolocation.getCurrentPosition(setPosition, showError);

} else {

  notificationElement.style.display = "block";

  notificationElement.innerHTML = `<p> Browser does not support geolocation`;
}

// Function to set the current position.

function setPosition(position) {

  let latitude = position.coords.latitude;

  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);

}

// Function to show error if browser does not support geolocation.

function showError(error) {

  notificationElement.style.display = "block";

  notificationElement.innerHTML = `<p> ${error.message} </p>`;

}

// Get actual weather function.

function getWeather(latitude, longitude) {

  const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  console.log(api)

  console.log(api)

  fetch(api)

    .then(function (response) {

      let data = response.json();

      return data;

    })

    .then(function (data) {

      weather.temperature.value = Math.floor(data.main.temp - KELVIN);

      weather.description = data.weather[0].description;

      weather.iconId = data.weather[0].icon;

      weather.city = data.name;

      weather.country = data.sys.country;

      weather.humidity = data.main.humidity;

      weather.pressure = data.main.pressure;

     

    })

    .then(function () {

      displayWeather();

    });

}

function displayWeather() {

  iconElement.innerHTML = `<img src="WEATHER-ICONS/${weather.iconId}.png"/>`;

  tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;

  descElement.innerHTML = weather.description;

  locationElement.innerHTML = `${weather.city}, ${weather.country}`;

  humidityElement.innerHTML = `${weather.humidity}% humid`

  pressureElement.innerHTML = `${weather.pressure}Pa`

}

// Add and remove weather app

const weatherApp = document.getElementById("weather-app");

const cancelIcon = document.getElementById("cancel-icon");

console.log(cancelIcon)

// Pop up weather app

window.addEventListener("DOMContentLoaded", function(){

  setTimeout(function(){

    weatherApp.style.opacity = 1

  }, 3000)

});

// Remove weather App

cancelIcon.addEventListener("click", function(){

  weatherApp.style.display = "none"

});

//Link to display weather.

const weatherView = document.querySelector(".weather-link");

weatherView.addEventListener("click", function(){

  weatherApp.style.display = `block`;

});

//Background Color flipper.

//Grab Items.

const color = document.getElementById("color");

const btn = document.querySelector(".theme-btn");

//Array of colors.

const colors = ["pink", "skyblue", "orange", "cyan","yellow", "white"]

//Function to change color.

function changeColor(){

  return Math.floor(Math.random()* colors.length);

}

btn.addEventListener("click", function(){

  let randomColor = changeColor()

  btn.style.color = colors[randomColor]

  document.body.style.background = colors[randomColor];

  if(colors[randomColor] === "white"){

    btn.style.color = "black";

  }

});








