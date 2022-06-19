const text = "а на небе карабли";

console.log(text.split("").map(x=> {
    switch (x) { 
    case 'а': return 'б'
    case 'б': return 'а';
    default: return x;
}}).join(""));