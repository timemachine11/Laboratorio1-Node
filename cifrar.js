const bc = require("bcryptjs")

bc.genSalt(10, (error, salt) => {
    if (error)
        console.log(error)

    else
        {
            bc.hash("contraseña", salt, (error, hash) => {
                if (error) 
                    console.log(error)

                else
                    console.log(hash)
            })

        }
})

console.log("Esto va primero");

var salt = bc.genSaltSync(10)
console.log("salt generado sincronamente "+salt);

var hash = bc.hashSync("Esto se codifica "+salt)
console.log("hash generado sincronamente "+hash);

var comparar = bc.compareSync("Esto se codifica", "$2a$10$6gNS5JsG619mRtamjqdX0.rTpiv0sL8wgd8P6ZS2hnXO5L4uadQWi")
console.log(comparar);


