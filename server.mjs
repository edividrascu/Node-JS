import { createServer } from 'http';

const server = createServer((request, response) => {
    console.log('Request received');

    response.statusCode = 200;
    const jsonResponseBody = JSON.stringify({location: 'Mars'});
    response.setHeader('Content-Type', 'application/json');
    response.end(jsonResponseBody);
});

server.listen(3000, () => {
    console.log("El servidor está caminando desapacito en http://localhost:3000");
});
