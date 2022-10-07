module.exports = app => {
  const instruments = require("../controllers/instrument.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Instrument
  router.post("/", upload.single('file'), instruments.create);

  // Retrieve all Instruments
  router.get("/", instruments.findAll);

  // Retrieve a single Instrument with id
  router.get("/:id", instruments.findOne);

  // Update an Insrument with id
  router.put("/:id", instruments.update);

  // Delete an Instrument with id
  router.delete("/:id", instruments.delete);

  app.use("/api/instruments", router);
}