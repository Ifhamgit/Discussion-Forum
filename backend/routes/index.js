const express = require("express")
const router = express.Router()
const questionRouter = require("./Question")
const answerRouter = require("./Answer")

router.get("/", (req,res)=>{
    res.send("This api is reserved for the discussion forum")
})

router.use("/question", questionRouter)
router.use("/answer", answerRouter)


module.exports = router