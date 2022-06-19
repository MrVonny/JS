const a = [-2, -3, -4, 2, 3, -4, 12]

var i = a.findIndex(x=>x > 0);

a.forEach((n,index) => {
    if(index >= i) a[index]--
});

console.log(a);