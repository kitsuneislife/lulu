const express = require("express");
const fetch = require("@replit/node-fetch");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configurações
const PORT = process.env.PORT || 8000;
const FETCH_INTERVAL = 5000;
const API_URL = "https://lulu-api.kitsuneislife.repl.co/request?collection=produtos";

app.set("view engine", "ejs");
app.set("views", "./Public/Views");
app.use(express.static("./Public"));

let productRaw;

const fetchDataAndEmit = () => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Erro ao fazer a requisição: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      productRaw = data;
      io.emit("updateProductRaw", data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
};

setInterval(fetchDataAndEmit, FETCH_INTERVAL);

app.get("/", (req, res) => {
  res.render("Home", {
    req,
    productRaw,
  });
});

io.on("connection", (socket) => {
  console.log("Cliente conectado");
  socket.emit("updateProductRaw", productRaw);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(PORT, () => {
  console.log(`Servidor WebSocket está rodando na porta ${PORT}`);
});

module.exports = app;