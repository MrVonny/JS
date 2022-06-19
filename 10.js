const a = [
    [1,-2,3],
    [4,5,7],
    [0,99,-53]
];

let max = a[0][0];
let maxRow = 0;
let maxColumn = 0;

for(let i = 0; i < a.length; i++)
{
    for(let j = 0; j <a[i].length; j++)
    {
        if(a[i][j] > max)
        {
            max = a[i][j];
            maxRow = i;
            maxColumn = j;
        }
    }
}

console.log(`a[${maxRow}][${maxColumn}]=${max}`);