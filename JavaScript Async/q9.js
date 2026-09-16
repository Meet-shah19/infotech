async function getUserPosts(userId) {
    try {
        // 1. Fetch user
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        const user = await userResponse.json();

        // 2. Fetch user's posts
        const postsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );

        const posts = await postsResponse.json();

        // 3. Log user's name and post titles
        console.log("User:", user.name);
        console.log("Posts:");

        posts.forEach(post => {
            console.log("-", post.title);
        });

    } catch (error) {
        console.log("Error:", error.message);
    }
}

getUserPosts(2);