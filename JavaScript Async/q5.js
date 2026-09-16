async function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

async function main() {
    try {
        const result = await safeDivide(10, 2);
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();