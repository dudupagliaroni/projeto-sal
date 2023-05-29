const express = require('express')
const app = express()
const port = 3000

app.use((req, res,next ) => {
    console.log("testanto")
    next();
})

app.use((req, res) => {
 res.send("estou bem")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

