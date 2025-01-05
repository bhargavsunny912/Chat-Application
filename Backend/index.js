import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config({});
import connectdatabase from './Config/database.js';
import userRoute from './routes/userroutes.js';
import MessageRoute from './routes/Messageroutes.js';
import cookie from 'cookie-parser';
import cors from 'cors';

const Port=process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookie());
const corsoptions={
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsoptions));

app.use('/user',userRoute);
app.use('/message',MessageRoute);

app.listen(Port,(req,res)=>{
    connectdatabase();
    console.log("app is working at 3000");
})