/**
 /**
 * Created by sourabh on 27/6/17.
 */

const Mongoose=require("mongoose");

Mongoose.connect("mongodb://localhost/chat_app");

(()=>{
    Mongoose.connection.on("open", (err, data) => {

        console.log("connection made------------")

    });

    Mongoose.connection.on("error", (err, data) => {

        console.log("connection not successful------------")

    })
})();

