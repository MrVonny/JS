const str = "I Love MISIS";
const n = 3

let res = "";
const numChunks = Math.ceil(str.length / n)
  
for (let i = 0, o = 0; i < numChunks; ++i, o += n) {
    res += str.substr(o, n)      
    res += "!";
}

console.log(res);