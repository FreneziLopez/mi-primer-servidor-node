const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const PORT = 3000;
const archivo = path.join(__dirname, 'pagina.html');

const servidor = http.createServer((req, res) => {

  fs.readFile(archivo, 'utf8', (error, contenido) => {
    if (error) {
      console.error('Error al leer el archivo:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error al leer el archivo');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(contenido);
  });
});

servidor.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor asincrono en http://localhost:${PORT}`);
});
