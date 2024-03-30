const fs = require('fs');

// Contenido del archivo de texto
const contenido = 'Este es el contenido que se escribirá en el archivo.';

// Nombre del archivo
const nombreArchivo = 'archivo.txt';

// Llamada a fs.writeFile() para escribir el archivo
fs.writeFile(nombreArchivo, contenido, (err) => {
    if (err) {
        console.error('¡malio sal!');
        console.error(err);
        return;
    }
    console.log(`El archivo ${nombreArchivo} se ha creado correctamente.`);
});
