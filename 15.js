const a = [
    [1,-2,3],
    [4,5,7],
    [-1,12,-6]
];

const p = 0, q = 2;


for(let i = 0; i < a.length; i++)
{
    let temp = a[i][p];
    a[i][p] = a[i][q];
    a[i][q] = temp;
}

console.log(a);