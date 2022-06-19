const a = [-2, 3, 6, -3, 6, 7, -2, 4];

let maxIndex = a.indexOf(Math.max(...a));

console.log(maxIndex);

let b = a.map((n, index) => {
    return ((n < 0) && (index < maxIndex)) ? 0 : n;
});

console.log(b);