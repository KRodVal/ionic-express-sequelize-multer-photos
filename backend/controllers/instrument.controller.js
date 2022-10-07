const db = require("../models");
const Instrument = db.instrument;
const Op = db.Sequelize.Op;

// Create and Save a new Instrument
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Instrument
  const instrument = {
    brand: req.body.brand,
    model: req.body.model,
    filename: req.file ? req.file.filename : ""
  }

  // Save Instrument in the database
  Instrument.create(instrument).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the instrument"
    })
  });
};

// Retrieve all Instruments from the database.
exports.findAll = (req, res) => {
  Instrument.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Instruments"
    })
  })
};

// Find a single Instrument with an id
exports.findOne = (req, res) => {

}

// Update a Instrument by the id in the request
exports.update = (req, res) => {

};

// Delete a Instrument with the specified id in the request
exports.delete = (req, res) => {

};
