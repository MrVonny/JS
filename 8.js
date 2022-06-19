const a = [2,5,-5, 15, 33, 0, -99];

let minIndex = a.indexOf(Math.min(...a));
let maxIndex = a.indexOf(Math.max(...a));

let temp = a[minIndex];
a[minIndex] = a[maxIndex];
a[maxIndex] = temp;

console.log(a);