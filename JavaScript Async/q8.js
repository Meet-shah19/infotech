async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        const filteredUsers = users.filter(user =>
            user.address.city.toLowerCase().includes("o")
        );

        console.log("Users who live in a city containing 'o':");

        filteredUsers.forEach(user => {
            console.log(user.name, "-", user.address.city);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

fetchUsers();