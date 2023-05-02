//15
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

var hash = bc.hashSync("Esto se codifica",salt)
console.log("hash generado sincronamente "+hash);

var comparar = bc.compareSync("Esto se codifica", "$2a$10$Sy7q/Cz.4lVPXHRVx7DT8ejHh0CaboF7uWykw4XTAsBlFt7F4Qvu6")
console.log(comparar);


