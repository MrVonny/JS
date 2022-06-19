const a = [
    [1,-2,3],
    [4,5,7],
    [0,99,-53]
];


for(let i = 0; i < a.length; i++)
{
    let sum = 0, count = 0, avg = 0;
    for(let j = 0; j <a[i].length; j++)
    {
        if(a[i][j] > 0)
        {
            sum+=a[i][j];
            count++;
        }
    }

    console.log(`${i} row: SUM - ${sum}, COUNT - ${count}, AVG - ${sum/count}`)
}