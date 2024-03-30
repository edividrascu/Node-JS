// para .mjs import colorTexto from "cli-color";
const colorTexto = require("cli-color"); 
function mensajeSalida(mensaje) {
    console.log(colorTexto.red("mensaje enviado con exito: " + mensaje));
}

mensajeSalida("deleted");


// npm install figlet
// npm install cli-color
// node mensaje.js
// node --experimental-modules mensaje.mjs
// vale todo esto es lo que hace el tio en los videos mas o menos epro veo que el ejercicio debe ser algo asi:

const figlet = require('figlet');

const texto = 'text error 404';
// aqui le podemos dar opciones de estilos
const opciones = {
    font: 'Standard', 
    fontsaze: '20',
    horizontalLayout: 'default', 
    verticalLayout: 'default' 
    // o solo figlet(texto)
};

figlet(texto, opciones, function(err, data) {
    if (err) {
        console.log('Algo malio sal...');
        console.dir(err);
        return;
    }
    console.log(data);
});
// node mensaje.js
// _            _                                _  _    ___  _  _
// | |_ _____  _| |_    ___ _ __ _ __ ___  _ __  | || |  / _ \| || |
// | __/ _ \ \/ / __|  / _ \ '__| '__/ _ \| '__| | || |_| | | | || |_
// | ||  __/>  <| |_  |  __/ |  | | | (_) | |    |__   _| |_| |__   _|
//  \__\___/_/\_\\__|  \___|_|  |_|  \___/|_|       |_|  \___/   |_|
// ta to wapo esto 