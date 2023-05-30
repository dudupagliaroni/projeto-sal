const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {

});

app.get('/conteudo', (req, res) => {

});

app.get('/autores', (req, res) => {

});
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

