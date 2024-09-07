const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busName: { type: String, required: true },
  route: [String], // Array to store bus route stations
});

const Bus = mongoose.model('Bus', busSchema);

module.exports = Bus;
