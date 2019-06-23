const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://useragesta:indosatim3@ds341247.mlab.com:41247/lelangdb"

const Lelang = require('../models/lelang')

//avoid warning to throws error
mongoose.Proimse = global.Promise
//connext to the database
mongoose.connect(db, { useNewUrlParser: true }, (error) => {
    if(error) {
        console.log('Error! ' + error)
    } else {
        console.log("Connected to Database Successfully..")
    }
})

//listening request
router.get('/', (req, res) => {
    // res.send('api lelangApps works!')
    res.send('welcome to API Lobby!')
})

//listening request to Lelang
router.get('/lelang', (req, res) => {
    console.log('GET Request all Lelang successfully..')
    console.log('cek req', req)
    console.log('cek res', res)

    Lelang.find({})
    .exec((error, data) => {
        if(error) {
            console.log('Error! ' + error)
        } else {
            res.json(data)
        }
    })
})

router.get('/lelang/:id', (req, res) => {
    console.log('GET Request by Id to Lelang successfully..')
    console.log('cek req', req)
    console.log('cek res', res)

    Lelang.findById(req.params.id)
    .exec((error, data) => {
        if (error) {
            console.log('Error! ' + error)
        } else {
            res.json(data)
        }
    })
})

router.post('/lelang', (req, res) => {
    console.log('POST Request to Lelang successfully..')
    console.log('cek req', req)
    console.log('cek res', res)

    const newLelang = Lelang()
    newLelang.name = req.body.name
    newLelang.address = req.body.address
    newLelang.business_field = req.body.business_field
    newLelang.start_time = req.body.start_time
    newLelang.contract_value = req.body.contract_value
    newLelang.warranty = req.body.warranty
    
    newLelang.save((error, data) => {
        if (error) {
            console.log('Ini error')
        } else {
            res.json(data)
        }
    })
})

router.put('/lelang/:id', (req, res) => {
    console.log('PUT Request to Lelang successfully..')
    console.log('cek req', req)
    console.log('cek res', res)

    Lelang.findByIdAndUpdate(req.params.id,
    {
        $set: {
            name: req.body.name,
            address: req.body.address,
            business_field: req.body.business_field,
            start_time: req.body.start_time,
            contract_value: req.body.contract_value,
            warranty: req.body.warranty,
        }
    },
    {
        // useNewUrlParser: true
        new: true,
    },
    (error, data) => {
        if (error) {
            console.log('Error!', error)
            res.send('Error updating movies')
        } else {
            res.json(data)
        }
    })
})


module.exports = router