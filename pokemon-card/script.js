const typeColors = {

    bug: "#26de81",

    dragon: "#ffeaa7",

    electric: "#fed330",

    fairy: "#ff0069",

    fighting: "#30336b",

    fire: "#f0932b",

    flying: "#81ecec",

    grass: "#00b894",

    ground: "#efb549",

    ghost: "#a55eea",

    ice: "#74b9ff",

    normal: "#95afc0",

    poison: "#6c5ce7",

    psychic: "#a29bfe",

    rock: "#2d3436",

    water: "#0190ff"

};


// PokeAPI URL

const apiURL =
    "https://pokeapi.co/api/v2/pokemon/";


// Get HTML elements

const card =
    document.getElementById("card");

const button =
    document.getElementById("btn");


// Generate random Pokemon

function getPokemon() {

    // Random number from 1 to 150

    const randomId =
        Math.floor(Math.random() * 150) + 1;

    const finalURL =
        apiURL + randomId;


    fetch(finalURL)

        .then(response => {

            if (!response.ok) {
                throw new Error("Pokemon not found");
            }

            return response.json();

        })

        .then(data => {

            createCard(data);

        })

        .catch(error => {

            console.log(error);

        });

}


// Create card

function createCard(data) {

    // Pokemon HP

    const hp =
        data.stats[0].base_stat;


    // Pokemon image

    const image =
        data.sprites.other
        .dream_world.front_default
        ||
        data.sprites.front_default;


    // Pokemon name

    const name =
        data.name;


    // Attack

    const attack =
        data.stats[1].base_stat;


    // Defense

    const defense =
        data.stats[2].base_stat;


    // Speed

    const speed =
        data.stats[5].base_stat;


    // Pokemon type

    const type =
        data.types[0].type.name;


    // Get color

    const color =
        typeColors[type];


    // Create card HTML

    card.innerHTML = `

        <p class="hp">
            <span>HP</span>
            ${hp}
        </p>

        <img
            src="${image}"
            alt="${name}"
        >

        <h2 class="poke-name">
            ${name}
        </h2>

        <div class="types"></div>

        <div class="stats">

            <div>
                <h3>${attack}</h3>
                <p>Attack</p>
            </div>

            <div>
                <h3>${defense}</h3>
                <p>Defense</p>
            </div>

            <div>
                <h3>${speed}</h3>
                <p>Speed</p>
            </div>

        </div>
    `;


    // Add all Pokemon types

    addTypes(data.types);


    // Apply Pokemon color

    styleCard(color);
}


// Add Pokemon types

function addTypes(types) {

    const typesContainer =
        document.querySelector(".types");


    types.forEach(item => {

        const span =
            document.createElement("span");


        span.textContent =
            item.type.name;


        typesContainer.appendChild(span);

    });
}


// Style card according to type

function styleCard(color) {

    card.style.background =
        `radial-gradient(
            circle at 50% 0%,
            ${color} 36%,
            #ffffff 36%
        )`;


    const typeElements =
        document.querySelectorAll(".types span");


    typeElements.forEach(element => {

        element.style.backgroundColor =
            color;

    });
}


// Button click

button.addEventListener(
    "click",
    getPokemon
);


// Generate Pokemon when page opens

window.addEventListener(
    "load",
    getPokemon
);