// Weather Application

let weather = {
    apiKey: "5caf9f0fbae48e2481e8a33e558c5381",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => {
            if (!response.ok) {
                alert("ERROR: No weather found.");
                throw new Error("ERROR: No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        // Const
        const { name } = data;
        const { country } = data.sys;
        const { lat, lon} = data.coord;
        const { icon, description } = data.weather[0];
        const { all } = data.clouds;
        const { humidity, temp, feels_like, temp_min, temp_max } = data.main;
        const { speed, deg } = data.wind;
        // Document Query Selector
        document.querySelector(".city-name").innerText = name + " Weather";
        document.querySelector(".country").innerText = "Country: " + country;
        document.querySelector(".latitude").innerText = "Latitude: " + lat + "°";
        document.querySelector(".longitude").innerText = "Longitude: " + lon + "°";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".clouds").innerText = "Cloudiness: " + all + "%";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".temperature").innerText = "Current: " + temp + "°C";
        document.querySelector(".feels-like").innerText = "Feels Like: " + feels_like + "°C";
        document.querySelector(".temp-min").innerText = "Minimum Temperature: " + temp_min + "°C";
        document.querySelector(".temp-max").innerText = "Maximum Temperature: " + temp_max + "°C";
        document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed  + " Meters/Second";
        document.querySelector(".wind-direction").innerText = "Wind Direction: " +  deg + "°";
        document.querySelector(".location-image").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector(".weather-information").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document .querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

// Default Location
weather.fetchWeather("Sydney");
