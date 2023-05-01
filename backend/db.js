const mongoose = require("mongoose")
 const url = "mongodb://127.0.0.1:27017/Discussion_Forum"

 module.exports.connect = ()=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connected succesfully")
    }).catch((error)=>{
        console.log("Error:",error)
    })
 }