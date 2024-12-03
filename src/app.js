import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
// for allowing the cross origin request
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
// for allowing the json request
app.use(express.json({ limit: "16kb" }))
// for making express understand the encoded data retrieved from the URL
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// for getting statis data from public folder
app.use(express.static("public"));
//for allowing server to access the cookies from the browser
app.use(cookieParser());



export { app };