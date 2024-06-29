import express from "express";
import dotenv from 'dotenv';
import cors from "cors";

import mongooseConnection from "./db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use((_, res) => {
    res.send({
        message: 'Not found!'
    })
});

// mongooseConnection()
app.listen(process.env.PORT, (req, res) => {
    console.log(process.env.PORT);
})