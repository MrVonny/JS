const a = [
    [1,-2,3],
    [4,5,7],
    [0,99,-52]
];

let sum = 0;
for(let i = 0; i < a.length; i++)
    for(let j = 0; j <a[i].length; j++)
        sum+=a[i][j];
        
console.log(sum % 2 === 0 ? "чет" : "нечет")