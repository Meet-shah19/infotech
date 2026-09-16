const memeImage = document.getElementById("memeImage");
const generateBtn = document.getElementById("generateBtn");
const status = document.getElementById("status");

let currentMeme = "";

async function getMeme() {

    try {

        status.innerText = "Loading meme...";

        const response = await fetch(
            "https://meme-api.com/gimme"
        );

        const data = await response.json();

        currentMeme = data.url;

        memeImage.src = currentMeme;

        memeImage.style.display = "block";

        status.innerText = "Meme loaded! 😂";

    } catch (error) {

        console.log(error);

        status.innerText = "Something went wrong!";

    }
}

generateBtn.addEventListener("click", function() {
    getMeme();
});

getMeme();