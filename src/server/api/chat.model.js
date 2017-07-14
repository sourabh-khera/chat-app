/**
 * Created by sourabh on 12/7/17.
 */
const Mongoose = require("mongoose");
const ChatSchema = new Mongoose.Schema({
     chatData:{
         type:String,
     },
},{versionKey:false,timestamps:true});

module.exports=Mongoose.model('chat',ChatSchema);
