# Async JavaScript — Practical Practice Questions

A set of hands-on coding questions covering Promises, `async/await`, callbacks and event loop behavior. 

---


### 1. Basic Promise Creation
Write a function `waitAndLog(message, delay)` that returns a Promise. After `delay` milliseconds, it should log `message` to the console and resolve the promise with the value `"done"`.

```js
waitAndLog("Hello", 1000).then(result => console.log(result));
```

---

### 2. Convert Callback to Promise
You are given a callback-based function:

```js
function getUserCallback(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: "User" + id });
  }, 500);
}
```

Convert this into a Promise-based function called `getUserPromise(id)` that resolves with the user object.

---

### 3. Basic async/await
Rewrite the following `.then()` chain using `async/await`:

```js
function fetchData() {
  return fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => console.error("Error:", error));
}
```

---

### 4. Sequential Delays
Write an `async` function `printNumbers()` that prints numbers `1` through `5` to the console, with a **1-second delay** between each number, using `await` and a helper `delay(ms)` function.

---

### 5. Error Handling with try/catch
Write an `async` function `safeDivide(a, b)` that:
- Throws an error if `b === 0` (`"Cannot divide by zero"`).
- Otherwise returns `a / b`.

Call it using `try/catch` and log either the result or the error message.

---

### 6. Promise.all Basics
Given three functions that each return a Promise resolving after a random delay:

```js
function task1() { return new Promise(res => setTimeout(() => res("Task 1 done"), 1000)); }
function task2() { return new Promise(res => setTimeout(() => res("Task 2 done"), 500)); }
function task3() { return new Promise(res => setTimeout(() => res("Task 3 done"), 1500)); }
```

Write code using `Promise.all` to run all three concurrently and log all results **once every task is complete**. Also log how long the total execution took.

---

## Working with Real APIs

> These questions use free, public APIs that require no authentication/API key, so you can run the code directly.

### 7. Fetch and Display Data
Use the **JSONPlaceholder** API to fetch a single post and log its `title` and `body` to the console using `async/await`.
- API: `https://jsonplaceholder.typicode.com/posts/1`
- Docs: https://jsonplaceholder.typicode.com/

---

### 8. Fetch a List and Filter It
Fetch the full list of users from the **JSONPlaceholder** API, then filter and log only the users who live in a city containing the letter `"o"` (case-insensitive).
- API: `https://jsonplaceholder.typicode.com/users`
- Docs: https://jsonplaceholder.typicode.com/

---

### 9. Chained API Calls
Using the **JSONPlaceholder** API, write an `async` function `getUserPosts(userId)` that:
1. Fetches the user by ID.
2. Then fetches all posts written by that user (`?userId=` query param).
3. Logs the user's name followed by the titles of all their posts.
- User API: `https://jsonplaceholder.typicode.com/users/{id}`
- Posts API: `https://jsonplaceholder.typicode.com/posts?userId={id}`

---

### 10. Parallel API Requests with Promise.all
Using the **Rick and Morty API**, fetch character data for IDs `1`, `2`, and `3` **concurrently** using `Promise.all`, then log each character's `name` and `status`.
- API: `https://rickandmortyapi.com/api/character/1` (change the ID for each request)
- Docs: https://rickandmortyapi.com/documentation

---

### 11. Error Handling with a Real API
Using the **Open-Meteo** weather API, write an `async` function `getWeather(latitude, longitude)` that fetches current weather data and logs the temperature. Wrap the fetch in `try/catch` and log a friendly error message if the request fails (e.g., invalid coordinates or network issue).
- API: `https://api.open-meteo.com/v1/forecast?latitude=23.03&longitude=72.58&current_weather=true`
- Docs: https://open-meteo.com/en/docs

---

### 12. Search API with User Input Simulation
Using the **Dog CEO API**, write an `async` function `getDogImages(breed)` that fetches and logs 3 random image URLs for a given dog breed (e.g., `"husky"`). Handle the case where the breed doesn't exist by catching the error and logging `"Breed not found"`.
- API: `https://dog.ceo/api/breed/{breed}/images/random/3`
- Docs: https://dog.ceo/dog-api/documentation/

---




## Notes for Practice
- Try solving each question without looking up documentation first.
- For questions 7–10, test with `console.time()` / `console.timeEnd()` to confirm actual execution behavior.

