const express = require("express");
const { model } = require("../models/Model");
const app = express();

const modelRoute = express.Router();

//Model' model
let Model = require("../models/Model");

//Add new model
modelRoute.route("/add").post((req, res, next) => {
  Model.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

//Read all models
modelRoute.route("/").get((req, res) => {
  Model.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

//Read model by id
modelRoute.route("model/:id").get((req, res) => {
  Model.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = modelRoute
