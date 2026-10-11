const http = require('node:http');
const PORT = 3000;

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola mundo desde mi primer servidor HTTP con Node.js\n');
});

servidor.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor HTTP en http://localhost:${PORT}`);
});
