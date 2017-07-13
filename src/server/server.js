/**
 * Created by sourabh on 12/7/17.
 */
const express= require("express");
//require("./configuration/datasource");
const app=express();
const server=require("http").Server(app);
const io=require("socket.io")(server);



io.on('connection',(socket) => {
   console.log("user connected", socket.id);
   socket.on('new-message',(message)=>{
       io.emit("receive-message",message)
   });

    socket.on('disconnect',()=>{
        console.log("user disconnected")
    })
});

server.listen(3000,()=>{
    console.log("server is listening on : 3000");
});

