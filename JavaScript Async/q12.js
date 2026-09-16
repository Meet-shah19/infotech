async function getDogImages(breed) {
    try {
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random/3`
        );

        const data = await response.json();

        if (data.status !== "success") {
            throw new Error("Breed not found");
        }

        console.log(`Images for ${breed}:`);

        data.message.forEach((imageUrl, index) => {
            console.log(`${index + 1}. ${imageUrl}`);
        });

    } catch (error) {
        console.log("Breed not found");
    }
}

getDogImages("husky");