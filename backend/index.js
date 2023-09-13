import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import toDoRoute from "./routes/toDoRoute.js"


const app = express()

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