FROM node:24-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "04-servidor-asincrono.js"]
