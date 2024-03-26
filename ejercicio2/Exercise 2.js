// Exercise 2: Explore with the Node.js REPL

// Use the Node.js REPL to list the methods provided by the Node.js core crypto module. Use one of these methods to generate a random ID.


// vale entiendo que esto lo debo escribir directamente en la consola de node 
const crypto = require('crypto');
crypto.randomBytes(8).toString('hex') // y me da un numero de '64521ac24777409c' aleatorio
// y con el .exit me salgo de la consola de node
