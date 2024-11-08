const mongoose = require('mongoose');
const dotenv = require("dotenv")
const dbgr = require("debug")("development:mongoConnection.js")

dotenv.config()

const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri);
        dbgr('Connected to MongoDB Atlas!');
    } catch (error) {
        dbgr('Error connecting to MongoDB Atlas:', error.message);
    }
};

module.exports = connectToDatabase;
