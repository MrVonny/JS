const m = 2345;

let n1 = 0, n2 = 1, nextTerm = 0;


while(nextTerm <= m) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

console.log(nextTerm)