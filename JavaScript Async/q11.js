async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        console.log("Current Temperature:", data.current_weather.temperature, "°C");

    } catch (error) {
        console.log("Sorry, we couldn't get the weather data.");
        console.log("Error:", error.message);
    }
}

getWeather(22.5525, 72.9552);