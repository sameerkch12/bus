const mongoose = require('mongoose');

const url = `mongodb+srv://sameerkch:sameerkch@cluster0.kc8w6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
};

const mongoDB = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log('MongoDB is connected');
      // logic after successful connection
    })
    .catch((err) => {
      console.error(`Error connecting to the database. ${err}`);
    });
};

module.exports = mongoDB;
