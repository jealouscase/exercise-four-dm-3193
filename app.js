const express = require('express')
const path = require('path')
const app = express()
const port = 4000
const router = express.Router()

const indexRoute = require('./routes/index')
const aboutRoute = require('./routes/about')

app.use('/', indexRoute)
app.use('/about', aboutRoute)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get("/image", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "IMG_6809.png"))
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
