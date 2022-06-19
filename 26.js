const a = [
    [1,-2,3,2],
    [4,5,7,0],
    [0,-53,99,0]
];

var count = a.filter(row => row.some(n=>n === 0)).length
console.log(count);