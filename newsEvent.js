const { EventEmitter } = require("events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  const newsEventInterval = setInterval(() => {
    emitter.emit("newsEvent", "News: no te vas a creer lo que a paco le paso...");
  }, 1000);

  const breakingNewsInterval = setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! algo increible paso en cordoba por la falta de");
  }, 4000);

  const errorTimeout = setTimeout(() => {
    emitter.emit("error", new Error("lo que le sucedio a un estidiante de programacion despues de la..."));
  }, 5000);

  // Método para detener la emisión de eventos que si no esto no hay quien lo pare 
  const stop = () => {
    clearInterval(newsEventInterval);
    clearInterval(breakingNewsInterval);
    clearTimeout(errorTimeout);
  };

  return {
    emitter,
    stop
  };
}

const { emitter, stop } = createNewsFeed();


emitter.on("newsEvent", (data) => {
  console.log("newsEvent:", data);
});

emitter.on("breakingNews", (data) => {
  console.log("breakingNews:", data);
});

emitter.on("error", (error) => {
  console.error("error:", error.message);
});

// ejecutamos la fun de paro despues de 10 segundos
setTimeout(() => {
  stop();
}, 10000); 
