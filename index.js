import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import { movieRoutes } from './routes/movieRoutes.js';



dotenv.config();

const app = express();

app.use(cors());

//interceptor || converting body to json
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const createConnection = async()=>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};  

const client = await createConnection();



app.get("/", (req,res) => {
    res.send(`Hi There !!!`)
});


app.use("/api/movies", movieRoutes);


app.listen(PORT, ()=> console.log("Server started on the PORT", PORT));

