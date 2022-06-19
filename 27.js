const a = [
    [1,-2,3],
    [4,5,7],
    [0,-53,99]
];

var count = a.filter(row => row.every(n=>n >= 0)).length
console.log(count);