const a = [
    [1,-2,3,2],
    [4,5,7,6],
    [-1,12,-6,12]
];

const p = 0, q = 2;

let x = []

for(let i = 0; i < a[0].length; i++)
{
    let sum = 0
    for(let j = 0; j < a.length; j++)
    {
        sum+=a[j][i];
    }
    x.push(sum);
}

console.log(x);