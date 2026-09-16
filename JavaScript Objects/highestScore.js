const students = [
    { name: "Meet", score: 85 },
    { name: "Rahul", score: 92 },
    { name: "Amit", score: 78 },
    { name: "Priya", score: 95 }
];

function highestScore(students) {
    let highest = students[0];

    for (let student of students) {
        if (student.score > highest.score) {
            highest = student;
        }
    }

    return highest;
}

const result = highestScore(students);

console.log(result);