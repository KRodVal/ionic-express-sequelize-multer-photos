module.exports = (sequelize, Sequelize) => {
  const Instrument = sequelize.define("instrument", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Instrument;
}