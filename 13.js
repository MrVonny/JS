const a = [
    [1,-2,3],
    [4,5,7],
    [0,12,-6]
];

let sum = 0;
for(let i = 0; i < a.length; i++)
    for(let j = 0; j <a[i].length; j++)
        sum+=a[i][j];

let avg = sum / (a.length * a[0].length);

let count = 0;

for(let i = 0; i < a.length; i++)
    for(let j = 0; j <a[i].length; j++)
        if(a[i][j] > avg)
            count++;

console.log(count);

        