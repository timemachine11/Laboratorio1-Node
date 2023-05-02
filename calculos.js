//16-1
const bc = require("bcryptjs")

function area (lado) {
    var area = Math.pow(lado, 2)

    return area
}

function perimetro (lado) {
    var perimetro = 4 * lado

    return perimetro
}

function cifrado (res) {
    var salt = bc.genSaltSync(10)
    var hash = bc.hashSync(res,salt)
    
    return `${hash}`
}

module.exports = {area, perimetro, cifrado}
