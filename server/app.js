const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
    res.send("Usuarios")
});

app.get('/users/:id', (req, res) => {
    res.send("Usuario: " + req.params.id)
});

app.get('/conteudos', (req, res) => {
    res.send("Conteudos")
});
app.get('/conteudos/:di', (req, res) => {
    res.send("Conteudo:" + req.params.id)
});

app.get('/autores', (req, res) => {
    res.send("Autores")
});

app.get('/autores/:id', (req, res) => {
    res.send("Autor:" + req.params.id)
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

