// Definición de la función luckyDraw
function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        // Verificar si el jugador es "EDDY"
        if (player === "EDDY") {
            resolve(`${player} won a prize in the draw!`);
        } else {
             // Generación de un número aleatorio entre 0 y 1 y luego con ese numero el booleando lo pasa a true(1) o false(0) 
            const win = Boolean(Math.round(Math.random()));

            process.nextTick(() => {
                if (win) {
                    resolve(`${player} won a prize in the draw!`);
                } else {
                    reject(new Error(`${player} lost the draw.`));
                }
            });
        }
    });
}
  
  // Función para ejecutar la cadena de promesas para cada jugador
function runLuckyDrawChain() {
    // Promesa para Joe
    luckyDraw("Joe")
        .then((result) => {
            console.log(result); // Registro del valor resuelto para Joe
        })
        .catch((error) => {
            console.error(error.message); // Manejo del rechazo de la promesa para Joe
        })
        // Promesa para Caroline
        .then(() => luckyDraw("Caroline"))
        .then((result) => {
            console.log(result); 
        })
        .catch((error) => {
            console.error(error.message); 
        })
        // Promesa para Sabrina
        .then(() => luckyDraw("Sabrina"))
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error.message); 
        })
        // Promesa para EDDY
        .then(() => luckyDraw("EDDY"))
        .then((result) => {
            console.log(result); 
        })
        .catch((error) => {
            console.error(error.message); 
        });
}

runLuckyDrawChain();

  