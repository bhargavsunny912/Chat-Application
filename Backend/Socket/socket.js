import http from 'http';
import express from 'express'
import { Server } from 'socket.io';

const app=express()

const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:['http://localhost:5173'],
        methods:['GET','POST']
    }
});

io.on('connection',(socket)=>{
    console.log('user connected to socket',socket.id);
})

export default {app,server,io} 