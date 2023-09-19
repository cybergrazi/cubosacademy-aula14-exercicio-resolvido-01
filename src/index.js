const express = require("express");
const { listagemCarros, obterCarro } = require("./controladores/carros"); // importação

const app = express();

app.get("/carros", listagemCarros); // ROTA E CONTROLADOR AO LADO
app.get("/carros/:id", obterCarro);

app.listen(3000);

