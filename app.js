//openWeatherApi
let API_KEY = "481ee9e4b5da53ab0d59c21c5f06c96a";

let search = document.getElementById("search");
search.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    let searchText = e.target.value;
    GetWeather(searchText);
  }
});
async function GetWeather(cityName) {
  let data = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&appid=${API_KEY}`
  );
  let response = await data.json();
  console.log(response);
  let { name } = response;
  let details = response.weather[0];
  let { main, description, icon } = details;
  document.getElementById("template").innerHTML = ` 
    <section id="weatherApp">
      <article>
        <header>
        <h1>${response.main.temp}&deg;c </h1>
        <img src=http://openweathermap.org/img/wn/${icon}@2x.png /></h1>
         <h2>${name}</h2>
        </header>
      <main>
      
        <p>${main}</p>
        <p>${description}</p>
        <p>Min Temp : ${response.main.temp_min}&deg;c</p>
        <p>Max Temp : ${response.main.temp_max}&deg;c</p>
        <p>humidity : ${response.main.humidity} %</p>
      </main>
       
      </article>
    </section>
  
  `;
}

setInterval(() => {
  let date = new Date().toLocaleTimeString();
  let AmorPm = date > 12 ? "PM" : "AM";
  document.getElementById("time").innerHTML = `${date}`;
}, 1000);

var x = document.getElementById("demo");

function getLocation() {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

getLocation();
