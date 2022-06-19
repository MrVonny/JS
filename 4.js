let a = [1, 3, 56, 2, 7, 8, 1, -2, 5];

let b = [];

for(let i = 0; i < a.length; i+=3)
{
    b.push(a[i] + a[i+1] + a[i+2]);
}

console.log(b);
