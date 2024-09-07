const mongoose = require('mongoose');
const Bus = require('./Models/Bus');
const mongoDB = require('./db')
mongoDB();

const seedBuses = async () => {
  const buses = [
    { busName: 'Bus 1', route: ['Durg', 'Bhilai', 'Bhilai-3', 'Charoda', 'Raipur'] },
    { busName: 'Bus 2', route: ['Raipur', 'Charoda', 'Bhilai-3', 'Bhilai', 'Durg'] },
    { busName: 'Bus 3', route: ['Durg', 'Raipur'] },
  ];

  await Bus.insertMany(buses);
  console.log('Buses added');
  mongoose.connection.close();
};

seedBuses();
