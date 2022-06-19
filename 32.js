const text = "хахаха ух ты ууу"

console.log("X: ", text.split("").filter(x=>x === 'х').length)
console.log("У: ", text.split("").filter(x=>x === 'у').length)