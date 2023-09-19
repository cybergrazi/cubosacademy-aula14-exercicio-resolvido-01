const express = require("express");
const { listagemCarros, obterCarro } = require("./controladores/carros"); // importação
const { validarSenha } = require("./intermediarios");

const app = express();

app.use(validarSenha);

app.get("/carros", listagemCarros); // ROTA E CONTROLADOR AO LADO
app.get("/carros/:id", obterCarro);

app.listen(3000);