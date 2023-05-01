//9
function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    if (n2 > 0) {
        return n1 / n2;    
    
    } else {
        console.log("El denominador es 0 o menor");
    }
}

/*
console.log("La suma es "+ suma(11,12));
console.log("La resta es "+ resta(11,12));
console.log("La multiplicacion es "+ multiplicacion(11,12));
console.log("La division es "+ division(11,12));
*/

//10
module.exports = {suma, resta, multiplicacion, division}
//module.exports.suma = suma

