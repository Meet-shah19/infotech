function task1() {
    return new Promise(res =>
        setTimeout(() => res("Task 1 done"), 1000)
    );
}

function task2() {
    return new Promise(res =>
        setTimeout(() => res("Task 2 done"), 500)
    );
}

function task3() {
    return new Promise(res =>
        setTimeout(() => res("Task 3 done"), 1500)
    );
}

async function runTasks() {
    const startTime = Date.now();

    const results = await Promise.all([
        task1(),
        task2(),
        task3()
    ]);

    const endTime = Date.now();

    console.log("Results:", results);
    console.log("Total execution time:", endTime - startTime, "ms");
}

runTasks();