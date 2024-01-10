const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");

app.use(express.json());
app.use(cors());

// DATABASE CONNECTION WITH MONDODB
mongoose.connect("mongodb+srv://deeplearn2024:deep@cluster0.julocok.mongodb.net/learningportal-main")


// API CREATION

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})



app.listen(port,(error)=>{
    if(!error){
        console.log("Server is Running on port "+port)
    }else{
        console.log("Error : "+error)
    }
})