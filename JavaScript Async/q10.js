async function getCharacters() {
    try {
        const ids = [1, 2, 3];

        const requests = ids.map(id =>
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
        );

        const responses = await Promise.all(requests);

        const characters = await Promise.all(
            responses.map(response => response.json())
        );

        characters.forEach(character => {
            console.log("Name:", character.name);
            console.log("Status:", character.status);
            console.log("-------------------");
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getCharacters();