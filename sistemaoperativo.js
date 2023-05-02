//14
const os = require("os")

console.log(os.cpus()); //Información de los CPUs (cpus())
console.log(os.totalmem()); //Memoria total (totalmem())
console.log(os.freemem()); //Memoria libre (freemem())
console.log(os.arch()); //Si es basado en x86 o x64 (arch())
console.log(os.homedir()); //Ruta base (homedir())
console.log(os.hostname()); //Nombre del host (hostname())
console.log(os.networkInterfaces()); //Interfaces de red networkInterfaces())