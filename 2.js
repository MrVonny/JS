let X = [1, -2, 3, 7];
let Y = [-5, 2, 9, 9];

for(let i = 0; i < X.length; i++)
{
    if(X[i] < Y[i])
    {
        let temp = X[i];
        X[i] = Y[i];
        Y[i] = temp;
    }
}

console.log(X, Y);