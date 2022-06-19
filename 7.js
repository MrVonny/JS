const a = [1,2,-6,5,15,35];

let res = a.reduce((sum, n) => sum += n % 5 !== 0 ? n*n : 0);

console.log(res);