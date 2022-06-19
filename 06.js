const x = Math.PI / 2 - 0.02;
const n = 22;

let res = 0;
for(let i = 1; i <= n; i++)
    res += Math.pow(Math.sin(x), i);

console.log(res);