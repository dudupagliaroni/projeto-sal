const express = require("express");
const connection = require("../database/connection");
const routes = express.Router();
const models = require("../models/index");
const cors = require("cors");
const { faker } = require("@faker-js/faker");

routes.use(express.json());

routes.get("/users", cors(), (req, res) => {
  models.User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

routes.get("/users/:id", cors(), (req, res) => {
  models.User.findOne({
    where: { id: req.params.id },
  })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      console.error("Error retrieving user:", error);
    });
});

routes.get("/conteudos", cors(), (req, res) => {
  models.Conteudo.findAll({
    include: [models.Autor],
    order: [["createdAt", "DESC"]],
  })
    .then((conteudos) => {
      res.status(200).json(conteudos);
    })
    .catch((error) => {
      console.error("Error retrieving users:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

routes.get("/users/:id", cors(), (req, res) => {
  models.User.findOne({
    where: { id: req.params.id },
  })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      console.error("Error retrieving user:", error);
    });
});
routes.get("/conteudos/:di", cors(), (req, res) => {
  res.send("Conteudo:" + req.params.id);
});

routes.get("/autores", cors(), (req, res) => {
  res.send("Autores");
});

routes.get("/autores/:id", cors(), (req, res) => {
  res.send("Autor:" + req.params.id);
});

routes.get("/conteudomock", cors(), (req, res) => {
  const conteudo = models.Conteudo.build({
    autorId: 1,
    titulo: faker.music.songName(),
    conteudo: faker.lorem.text(),
    createdAt: faker.date.past(),
  });

  conteudo
    .save()
    .then((saved) => {
      console.log("User saved successfully:", saved);
      res.status(201).json(saved);
    })
    .catch((error) => {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

routes.get("/usermock", (req, res) => {
  const { username, email, password } = req.body;

  const newUser = models.User.build({
    username: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });

  newUser
    .save()
    .then((savedUser) => {
      console.log("User saved successfully:", savedUser);
      res.status(201).json(savedUser);
    })
    .catch((error) => {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

routes.get("/autormock", cors(), (req, res) => {
  const autor = models.Autor.build({
    nome: faker.person.fullName(),
  });

  autor
    .save()
    .then((savedUser) => {
      console.log("User saved successfully:", savedUser);
      res.status(201).json(savedUser);
    })
    .catch((error) => {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = routes;
