const express = require('express');
const routes = express.Router();


routes.get('/users', (req, res) => {
    res.send("Usuarios")
});

routes.get('/users/:id', (req, res) => {
    res.send("Usuario: " + req.params.id)
});

routes.get('/conteudos', (req, res) => {
    res.send("Conteudos")
});
routes.get('/conteudos/:di', (req, res) => {
    res.send("Conteudo:" + req.params.id)
});

routes.get('/autores', (req, res) => {
    res.send("Autores")
});

routes.get('/autores/:id', (req, res) => {
    res.send("Autor:" + req.params.id)
});

module.exports = routes;