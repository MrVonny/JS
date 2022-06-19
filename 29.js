const text = "Автомабиль на крышах"
const n = 'а'

console.log(`${n}: `, text.split("").filter(x=>x === n).length)