const text = "а я не хачу с вами абщаца";

console.log(text.split("").filter(x=>x !== 'а').join(""));