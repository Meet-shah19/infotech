let unit = "celsius";
let currentCity = null;

// Get saved favorites
let favorites = JSON.parse(localStorage.getItem("weatherFavorites")) || [];

// Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteCities = document.getElementById("favoriteCities");
const refreshBtn = document.getElementById("refreshBtn");
const unitBtn = document.getElementById("unitBtn");
const message = document.getElementById("message");

// Search button
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    searchCity(city);
});

// Enter key
cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// Favorite star button
favoriteBtn.addEventListener("click", () => {

    // If no city is selected
    if (!currentCity) {
        message.textContent = "Search for a city first.";
        return;
    }

    toggleFavorite();
});

// Refresh button
refreshBtn.addEventListener("click", () => {
    if (currentCity) {
        getWeather(currentCity);
    }
});

// Celsius / Fahrenheit
unitBtn.addEventListener("click", () => {

    if (unit === "celsius") {
        unit = "fahrenheit";
        unitBtn.textContent = "°F";
    } else {
        unit = "celsius";
        unitBtn.textContent = "°C";
    }

    if (currentCity) {
        getWeather(currentCity);
    }
});


// ===============================
// SEARCH CITY
// ===============================

async function searchCity(city) {

    try {

        message.textContent = "Searching...";

        const url =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City search failed");
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            message.textContent = "City not found.";
            return;
        }

        const location = data.results[0];

        currentCity = {
            name: location.name,
            latitude: location.latitude,
            longitude: location.longitude
        };

        cityInput.value = location.name;

        await getWeather(currentCity);

    } catch (error) {

        console.error(error);
        message.textContent = "Something went wrong.";
    }
}


// ===============================
// GET WEATHER
// ===============================

async function getWeather(city) {

    try {

        message.textContent = "Loading weather...";

        const url =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${city.latitude}` +
            `&longitude=${city.longitude}` +
            `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
            `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset` +
            `&forecast_days=5` +
            `&temperature_unit=${unit}` +
            `&timezone=auto`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const data = await response.json();

        showCurrentWeather(city, data);
        showForecast(data);

        updateFavoriteButton();

        message.textContent = "";

    } catch (error) {

        console.error(error);
        message.textContent = "Unable to load weather.";
    }
}


// ===============================
// SHOW CURRENT WEATHER
// ===============================

function showCurrentWeather(city, data) {

    document.getElementById("cityName").textContent = city.name;

    const current = data.current;

    const info = weatherInfo(current.weather_code);

    document.getElementById("condition").textContent = info.text;

    document.getElementById("weatherIcon").textContent = info.icon;

    document.getElementById("temperature").textContent =
        Math.round(current.temperature_2m) + "°";

    document.getElementById("feelsLike").textContent =
        "Feels like " + Math.round(current.apparent_temperature) + "°";

    document.getElementById("humidity").textContent =
        current.relative_humidity_2m + "%";

    document.getElementById("wind").textContent =
        Math.round(current.wind_speed_10m) + " km/h";

    document.getElementById("rainChance").textContent =
        data.daily.precipitation_probability_max[0] + "%";

    document.getElementById("sunrise").textContent =
        formatTime(data.daily.sunrise[0]);

    document.getElementById("sunset").textContent =
        formatTime(data.daily.sunset[0]);
}


// ===============================
// FAVORITES
// ===============================

function toggleFavorite() {

    if (!currentCity) {
        return;
    }

    // Check if city already exists
    const index = favorites.findIndex(
        city =>
            city.latitude === currentCity.latitude &&
            city.longitude === currentCity.longitude
    );

    // If already favorite → remove
    if (index !== -1) {

        favorites.splice(index, 1);

        message.textContent = "Removed from favorites.";

    }

    // If not favorite → add
    else {

        // Maximum 5
        if (favorites.length >= 5) {

            message.textContent =
                "You can save only 5 favorite cities.";

            return;
        }

        favorites.push({
            name: currentCity.name,
            latitude: currentCity.latitude,
            longitude: currentCity.longitude
        });

        message.textContent = "Added to favorites.";
    }

    // Save
    localStorage.setItem(
        "weatherFavorites",
        JSON.stringify(favorites)
    );

    // Update screen
    renderFavorites();

    // Update star
    updateFavoriteButton();
}


// ===============================
// SHOW FAVORITES
// ===============================

function renderFavorites() {

    favoriteCities.innerHTML = "";

    favorites.forEach((city, index) => {

        // City button
        const cityButton = document.createElement("button");

        cityButton.className = "favorite-city";

        cityButton.innerHTML = `
            ⭐ ${city.name}
        `;

        cityButton.addEventListener("click", () => {

            currentCity = city;

            cityInput.value = city.name;

            getWeather(city);
        });


        // Remove button
        const removeButton = document.createElement("button");

        removeButton.className = "remove-favorite";

        removeButton.textContent = "✕";

        removeButton.addEventListener("click", (event) => {

            // VERY IMPORTANT:
            // Stop city button from opening weather
            event.stopPropagation();

            favorites.splice(index, 1);

            localStorage.setItem(
                "weatherFavorites",
                JSON.stringify(favorites)
            );

            renderFavorites();
            updateFavoriteButton();
        });


        // Put remove button inside city button
        cityButton.appendChild(removeButton);

        favoriteCities.appendChild(cityButton);
    });
}


// ===============================
// UPDATE STAR
// ===============================

function updateFavoriteButton() {

    if (!currentCity) {
        favoriteBtn.textContent = "☆";
        favoriteBtn.classList.remove("active");
        return;
    }

    const isFavorite = favorites.some(
        city =>
            city.latitude === currentCity.latitude &&
            city.longitude === currentCity.longitude
    );

    if (isFavorite) {

        favoriteBtn.textContent = "★";
        favoriteBtn.classList.add("active");

    } else {

        favoriteBtn.textContent = "☆";
        favoriteBtn.classList.remove("active");
    }
}


// ===============================
// FORECAST
// ===============================

function showForecast(data) {

    const forecast = document.getElementById("forecast");

    forecast.innerHTML = "";

    for (let i = 0; i < 5; i++) {

        const info = weatherInfo(
            data.daily.weather_code[i]
        );

        const date = new Date(
            data.daily.time[i]
        );

        const dayName = date.toLocaleDateString(
            "en-US",
            {
                weekday: "short"
            }
        );

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <h4>${dayName}</h4>

            <div class="forecast-icon">
                ${info.icon}
            </div>

            <p>
                ${Math.round(data.daily.temperature_2m_max[i])}°
                /
                ${Math.round(data.daily.temperature_2m_min[i])}°
            </p>

            <small>
                💧 ${data.daily.precipitation_probability_max[i]}%
            </small>
        `;

        forecast.appendChild(card);
    }
}


// ===============================
// WEATHER INFORMATION
// ===============================

function weatherInfo(code) {

    if (code === 0) {
        return {
            text: "Clear Sky",
            icon: "☀️"
        };
    }

    if (code === 1 || code === 2) {
        return {
            text: "Partly Cloudy",
            icon: "🌤️"
        };
    }

    if (code === 3) {
        return {
            text: "Cloudy",
            icon: "☁️"
        };
    }

    if (
        code === 45 ||
        code === 48
    ) {
        return {
            text: "Foggy",
            icon: "🌫️"
        };
    }

    if (
        code >= 51 &&
        code <= 67
    ) {
        return {
            text: "Rain",
            icon: "🌧️"
        };
    }

    if (
        code >= 71 &&
        code <= 77
    ) {
        return {
            text: "Snow",
            icon: "❄️"
        };
    }

    if (
        code >= 80 &&
        code <= 82
    ) {
        return {
            text: "Rain Showers",
            icon: "🌦️"
        };
    }

    if (
        code >= 95 &&
        code <= 99
    ) {
        return {
            text: "Thunderstorm",
            icon: "⛈️"
        };
    }

    return {
        text: "Unknown",
        icon: "🌤️"
    };
}


// ===============================
// TIME
// ===============================

function formatTime(time) {

    const date = new Date(time);

    return date.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


// ===============================
// LOAD FAVORITES WHEN PAGE OPENS
// ===============================

renderFavorites();

