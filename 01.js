let a = [1, -20, 3, -2, 8, 16];

let pos = {
    count: 0,
    sum: 0,
};

let neg = {
    count: 0,
    mult: 1,
};

let sum = a.reduce((_, x) => {
    if(x > 0)
    {
        pos.sum += x;
        pos.count += 1;
    } else if (x < 0)
    {
        neg.mult *= x;
        neg.count += 1;
    }
    
 });

 console.log(pos, neg);