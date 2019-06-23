const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const cors = require('cors')

const api = require('./server/routes/api')
const port = 3000

//create instance of express
const app = express()

app.use(cors())

//specify a folder to be target of express
app.use(express.static(path.join(__dirname, 'dist/lelangApps')))
//connecting body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//setup handling routes
app.use('/api', api)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/lelangApps/index.html'))
})

app.listen(port, () => {
    console.log('Server running on port: ' + port)
})