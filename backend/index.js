import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import toDoRoute from "./routes/toDoRoute.js"
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const mongoDBURL = process.env.mongoDBURL;
const PORT = 5555;

//Midleware for parsing request body
app.use(express.json());


app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send("MERN TUTORIAL")
});

//Middleware for handling cors policy 
app.use(cors());

app.use('/task', toDoRoute)

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    });