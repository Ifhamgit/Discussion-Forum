const mongoose = require("mongoose")

const AnswerSchema = new mongoose.Schema({
    answer: String,
    questionID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions"
    },
    
    createdAt:{
        type:Date,
        default: Date.now()
    },
    
})

module.exports = mongoose.model("Answer", AnswerSchema)