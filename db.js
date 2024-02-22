
const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.MONGODB_URI

const connect = async (uri) => {
   await mongoose.connect(uri)

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB Successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log("An error occurred while connecting to MongoDB");
        console.log(err);
    });
}

module.exports = {
    connect
}