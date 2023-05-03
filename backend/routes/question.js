const express = require("express")
const router = express.Router()

const questionDB = require("../models/Question")

//Adding a question
router.post("/", async (req, res) =>{
    console.log(req.body)

    try{
        await questionDB.create({

            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,
            user:req.body.user,

        }).then(()=>{
            res.status(201).send({
                status:true,
                message: "Question added succesfully"
            })
        }).catch((err)=>{
            res.status(400).send({
                status:false,
                message:"Question not added"
            })
        })
    }catch(e){
        res.status(500).send({
            status:false,
            message:"Error while adding question"
        })
    }
    
})




//Retrieving all the answers for that particular question
router.get("/", async (req,res)=>{

    // We will use mongoDB lookup and aggregate to join two tables and present them as one
    try {
        await questionDB.aggregate([
        {
            //lookup is use to fetch data from other table using the given ID
            $lookup:{
                from: "answers", //collection to join
                localField: "_id", //field from the input document
                foreignField: "questionID",
                as:"allAnswers" //output array  field

                // In this case, "_id" is used as the localField and questionID as the foreignField, which means that the _id field
                // of the Questions collection will be matched with the questionID field of the Answer collection and then all the 
                //matched answers will be returned in the array "allAnswers".
            }
        }
    ]).exec().then((doc)=>{
        res.status(200).send(doc)

    }).catch((error)=>{
        res.status(500).send({
            status:false,
            message: "Unable to get the question details"
        })
    })
        
    } catch (error) {
        res.status(500).send({
            status:false,
            message:"Unexpected error"
        })
        
    }
    

})

module.exports = router  