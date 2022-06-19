const a = [
    [1,-2,3],
    [4,5,7],
    [-1,12,-6]
];

let res = {sum: 0, mult: 1}
for(let i = 0; i < a.length; i++)
    for(let j = 0; j <a[i].length; j++)
        if(Math.abs(a[i][j]) % 2 == 1)
        {
            res.sum+=a[i][j];
            res.mult*=a[i][j];
        }
        
console.log(res);