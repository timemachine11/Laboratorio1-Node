//1
console.log("Hola Mundo");

//2
let nombre = "Juan";
let edad = 15;

console.log("El nombre es " + nombre + " y tiene " + edad , "años");

//3
console.log(`El nombre es ${nombre} y tiene ${edad} años`);

//4
let num1 = 40;
let num2 = 90;

console.log(`La suma de ${num1} + ${num2} es ${num1 + num2}`);

//5
if (num1 > num2) {
    console.log(`El ${num1} es mayor`);

} else {
    console.log(`El ${num2} es mayor`);
}

//6
let arreglo = [1, 2, 3, 4, 5]

for (var i = 0; i<arreglo.length; i++) {
    console.log(arreglo[i]);
}

for (var i = 1; i<100; i++) {
    arreglo.push((Math.random()*100).toFixed(0))   

//7
    arreglo.forEach(function(num) {
        console.log(num)
    })
}

//8
var persona {
    nombre: Juana,
    edad: "55",
    direccion: "San nicolas"
}

console.log(persona);
console.log(persona.nombre);
