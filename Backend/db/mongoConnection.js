const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config()

const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri); // Removed deprecated options
        console.log('Connected to MongoDB Atlas!');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
};

module.exports = connectToDatabase;
