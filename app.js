const express = require('express')
const path = require('path')
const app = express()
const port = 4000
const router = express.Router()

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')

app.use('/', router)
app.use('/index', indexRouter)
app.use('/about', aboutRouter)

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
