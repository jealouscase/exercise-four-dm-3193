const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("About route")
})

router.get('/me', (req, res) => {
    res.send("Me route")
})

module.exports = router