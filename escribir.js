const fs = require("fs") //fs = file system

let numeros = ""

for (var i=0; i<=100; i++) {
    numeros += i + "\n"
}

fs.writeFile("./numeros.txt", numeros, (err) => {
    if (err)
        console.log(err);

    else 
        console.log("se escribio el archivo");
})


fs.writeFile("./numeros2.txt", numeros, "base64",(err) => {
    if (err)
        console.log(err);
 
    else 
        console.log("se escribio el archivo");
})