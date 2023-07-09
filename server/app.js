const express = require("express");
const routes = require("./routes/routes");
const { request } = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const connection = require("./database/connection");
const Models = require("../server/models/index");

app.use(routes);
app.use(express.json());

connection
  .sync()
  .then(() => {
    console.log("Tables created successfully.");
  })
  .catch((error) => {
    console.error("Error creating user table:", error);
  });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  try {
    connection.authenticate();
    connection.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
