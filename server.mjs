import { createServer } from 'http';

const server = createServer((request, response) => {
    console.log('Request received');

    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/html'); // Cambiado a 'text/html' para enviar HTML
    response.end("<html><body><h1>server...</h1></body></html>");
});

server.listen(3000, () => {
    console.log("El servidor está caminando desapacito en http://localhost:3000");
});
