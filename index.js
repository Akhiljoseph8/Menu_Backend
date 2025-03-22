require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Router/routes')
require('./DB/connection')
const app = express()


app.use(cors())
app.use(express.json())
app.use(router)


const PORT = 3000

app.listen(PORT, () => {
    console.log(`server is running at:${PORT}`)
})

app.get('/', (req, res) => {
    res.status(200).send("<h1>The request is hit at server..</h1>")
})