const express = require("express");
const connection = require("../database/connection");
const routes = express.Router();
const User = require("../models/user");

routes.use(express.json());

routes.get("/users", (req, res) => {
  User.findAll()
  .then((users) => {
    // console.log('Users retrieved successfully:', users);
    res.status(200).json(users); // Respond with the retrieved users
  })
  .catch((error) => {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error message
  });
});

routes.get("/users/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((user) => {res.send(user);
    })
    .catch((error) => {
      console.error("Error retrieving user:", error);
    });

    
});

routes.get("/conteudos", (req, res) => {
  res.send("Conteudos");
});
routes.get("/conteudos/:di", (req, res) => {
  res.send("Conteudo:" + req.params.id);
});

routes.get("/autores", (req, res) => {
  res.send("Autores");
});

routes.get("/autores/:id", (req, res) => {
  res.send("Autor:" + req.params.id);
});

routes.get("/table", (req, res) => {
  User.build();
  User.getTable();
});

routes.post('/users', (req, res) => {
  
  const { username, email, password } = req.body;

  const newUser = User.build({
    username: username,
    email: email,
    password: password
  });

  newUser.save()
    .then((savedUser) => {
      console.log('User saved successfully:', savedUser);
      res.status(201).json(savedUser); // Respond with the saved user
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Internal Server Error' }); // Respond with an error message
    });

});

module.exports = routes;
