
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("newQuote");

async function generateQuote() {

    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        quoteText.textContent = `"${data.quote}"`;
        authorText.textContent = "— " + data.author;

    } catch (error) {

        console.error(error);

        quoteText.textContent =
            "Unable to load quote. Please try again.";

        authorText.textContent = "";
    }
}

// Generate quote when button is clicked
button.addEventListener("click", generateQuote);

// Generate first quote automatically
generateQuote();

