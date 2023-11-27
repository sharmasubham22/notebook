const mongoose = require('mongoose');

const mongoURI =
  "mongodb+srv://subhamsharma8269:subh8269@stories-cluster.dorrr6z.mongodb.net/notebook";

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