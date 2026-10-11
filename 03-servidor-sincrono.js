const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const PORT = 3000;
const archivo = path.join(__dirname, 'pagina.html');

const servidor = http.createServer((req, res) => {
  try {
    // readFileSync bloquea el hilo principal hasta terminar la lectura.
    const contenido = fs.readFileSync(archivo, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(contenido);
  } catch (error) {
    console.error('Error al leer el archivo:', error.message);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error al leer el archivo');
  }
});

servidor.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor sincrono en http://localhost:${PORT}`);
});
