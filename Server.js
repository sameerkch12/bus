const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Bus = require('./Models/Bus');
const mongoDB = require('./db');
const port = process.env.PORT || 5000;

mongoDB();
const app = express();
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/buses', async (req, res) => {
    const { origin, destination } = req.query;
  
    // Find buses where both origin and destination exist in the route
    const buses = await Bus.find({
      route: { $all: [origin, destination] }
    });
  
    // Filter buses where origin comes before destination in the route
    const filteredBuses = buses.filter(bus => {
      const originIndex = bus.route.indexOf(origin);
      const destinationIndex = bus.route.indexOf(destination);
      return originIndex !== -1 && destinationIndex !== -1 && originIndex < destinationIndex;
    });
  
    res.json(filteredBuses);
  });



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
