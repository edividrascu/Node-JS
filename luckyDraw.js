
function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  //  para obtener los resultados usando async/await
  async function getResults() {
    try {
      // Llamada a luckyDraw para cada jugador usando await
      const resultsTina = await luckyDraw("Tina");
      console.log(resultsTina); 
  
      const resultsJorge = await luckyDraw("Jorge");
      console.log(resultsJorge); 
  
      const resultsJulien = await luckyDraw("Julien");
      console.log(resultsJulien); 
    } catch (error) {
      console.error(error.message);
    }
  }
  
  
  getResults();
  