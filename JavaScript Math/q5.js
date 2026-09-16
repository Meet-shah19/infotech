function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return Number(area.toFixed(2));
}

console.log(areaOfCircle(5));