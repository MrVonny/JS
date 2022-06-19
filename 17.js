const a = [
    [1,-2,3,2],
    [4,5,7,6],
    [-1,12,-6,12]
];

const p = 0, q = 2;

const X = a[p];

const Y = [];

for(let i = 0; i< a.length; i++)
    Y.push(a[i][q]);

console.log("X: ", X);
console.log("Y: ", Y);