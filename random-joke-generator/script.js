const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke() {
    joke.textContent = "Loading...";

    try {
        const response = await fetch(
            "https://v2.jokeapi.dev/joke/Any?safe-mode"
        );

        if (!response.ok) {
            throw new Error("Failed to get joke");
        }

        const data = await response.json();

        if (data.type === "single") {
            joke.textContent = data.joke;
        } else {
            joke.textContent = data.setup + " 😂 " + data.delivery;
        }

    } catch (error) {
        joke.textContent = "Sorry! Joke could not be loaded 😢";
        console.error("Error:", error);
    }
}

jokeBtn.addEventListener("click", getJoke);
