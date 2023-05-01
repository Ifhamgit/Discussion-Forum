const express = require("express")
const router = express.Router()
const questionRouter = require("./question")
// const answerRouter = require("./answer")

router.get("/", (req,res)=>{
    res.send("This api is reserved for the discussion forum")
})

router.use("/question", questionRouter)
// router.use("/answers", answerRouter)


module.exports = router