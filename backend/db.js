const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to Database');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}
module.exports = connectToMongo; 