const mongoose = require('mongoose');

//  Your code goes here
const MarioModel=new mongoose.model('mariochar',new mongoose.Schema({name:{type:String,default:"Luigi"}, weight:{type:Number,default:60} }));

module.exports = MarioModel;
