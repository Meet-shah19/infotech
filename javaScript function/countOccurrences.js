function countOccurrences(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

// Calling the function
console.log(countOccurrences([1, 2, 2, 3, 2], 2));