//16-2
const calculos = require("./calculos")

let lado = 3

let area = calculos.area(lado)
let perimetro = calculos.perimetro(lado)

// let res = area + perimetro
// let res2 = calculos.cifrado(res) 

console.log(`El lado del cuadrado es ${lado}`);
console.log(`El area es ${area}`);
console.log(`El perimetro es ${perimetro}`);
// console.log(`El hash de la suma de ${area} + ${perimetro} es ${res2}`);