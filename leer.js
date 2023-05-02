//13
const fs = require("fs")

fs.readFile("./numeros.txt", (err, dato) =>{
    if (err) 
        console.log(err)

    else
        console.log(dato.toString())
})

// console.log("Esto es un comentario");

fs.readFile("./numeros2.txt", "base64", (err, dato) =>{
    if (err) 
        console.log(err);

    else
        console.log(dato.toString());
})