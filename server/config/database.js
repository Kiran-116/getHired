const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");

const URI = "mongodb+srv://projectmentalhealth1:ProjectMentalHealth1@cluster0.bpusl7f.mongodb.net/PlaceMentor?retryWrites=true&w=majority"
// console.log(URI)

const ConnectDatabase = async () => {
    try {
        // await mongoose.connect(URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });

        //  // Mongoose connection events
        // mongoose.connection.on('connected', () => {
        //     console.log('Connected to MongoDB cluster');
        // });

        // mongoose.connection.on('error', (error) => {
        //     console.log('Error in MongoDB connection:', error);
        // });

        // mongoose.connection.on('disconnected', () => {
        //     console.log('Disconnected from MongoDB');
        // });

        mongoose.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((data)=>{
            console.log('connected')
        })

    } catch (error) {
        console.log('Error while connecting to the database:', error);
    }
};

// ConnectDatabase();

module.exports = ConnectDatabase;
