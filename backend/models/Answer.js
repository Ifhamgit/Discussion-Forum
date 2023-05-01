const mongoose = require("mongoose")

const AnswerSchema = new mongoose.Schema({
    Answer: String,
    questionID:{
        type: mongoos.Schema.Types.ObjectId,
        ref: "questions"
    },
    
    createdAt:{
        type:Date,
        default: Date.now()
    },
    
})

module.exports = mongoose.model("Answer", AnswerSchema)