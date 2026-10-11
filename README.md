# Práctica: Mi primer servidor con Node.js

## Descripción

Proyecto académico de **Programación para Plataformas Emergentes** de la **Universidad Autónoma de Chihuahua**. Se implementan cuatro etapas: Hola Mundo, servidor HTTP, lectura síncrona y lectura asíncrona de un archivo HTML. Se incluye un `Dockerfile` para ejecutar el servidor asíncrono en un contenedor.

## Contenido del proyecto

| Archivo | Descripción |
|---|---|
| `01-hola-mundo.js` | Imprime mensajes en terminal. |
| `02-servidor-http.js` | Responde a solicitudes HTTP con texto. |
| `03-servidor-sincrono.js` | Lee `pagina.html` con `fs.readFileSync()` y lo envía. |
| `04-servidor-asincrono.js` | Lee `pagina.html` con `fs.readFile()` y lo envía. |
| `pagina.html` | Página enviada por los dos últimos servidores. |
| `Dockerfile` | Construcción de la imagen Docker con Node.js. |
| `.dockerignore` | Excluye archivos innecesarios del contexto de construcción. |

## Requisitos para ejecutarlo

- Node.js 24 o versión compatible para ejecución directa.
- Docker Engine o Docker Desktop para ejecutar la versión en contenedor.

No se requieren dependencias externas de npm; se usan módulos estándar de Node.js.

## Ejecución con Node.js

En la raíz del proyecto, ejecutar **uno a la vez**:

```bash
node 01-hola-mundo.js
node 02-servidor-http.js
node 03-servidor-sincrono.js
node 04-servidor-asincrono.js
```

Los servidores usan el puerto `3000`. Abrir `http://localhost:3000` en un navegador o ejecutar:

```bash
curl http://localhost:3000
```

Detener un servidor con `Ctrl + C` antes de iniciar otro.

## Construcción y ejecución con Docker

```bash
docker build -t mi-primer-servidor .
docker run --rm -p 3000:3000 mi-primer-servidor
```

En el navegador, abrir `http://localhost:3000`. El contenedor ejecuta `04-servidor-asincrono.js`.

## Diferencia entre síncrono y asíncrono

- **Síncrono:** `fs.readFileSync()` espera la lectura y bloquea el hilo principal mientras ocurre.
- **Asíncrono:** `fs.readFile()` recibe el resultado mediante un callback y permite que el hilo continúe atendiendo eventos durante la espera.

## Nota de verificación

Este repositorio contiene las instrucciones para ejecutar la práctica. Su publicación por sí sola no acredita que se hayan realizado las pruebas de ejecución.

## Autor

Mauricio Iván López Holguín - 322896 — Universidad Autónoma de Chihuahua.
