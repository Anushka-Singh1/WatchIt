import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()




//iN THIS APPROACH INSIDE THE IIFI FUNCTION WE ARE CONNECTING AND AT THE SAME TIME HANDLING THE ERROR THAT MAY ARRISE CONNECTING EXPRESS TO THE DATABASE AND LISTENING TO THE PORT


/*
import express from "express";

const app = express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', (error) => {
            console.error("Error", error);
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
     }
    catch (error) {
        console.error("Error", error);
    }
 })()
 */