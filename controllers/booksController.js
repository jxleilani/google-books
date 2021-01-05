const Book = require("../models/book");

module.exports = {
  findAll: function (req, res) {
    Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  create: function (req, res) {
    Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  },
  remove: function (req, res) {
    Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(400).json(err));
  }
};
