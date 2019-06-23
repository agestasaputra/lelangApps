const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lelangSchema = new Schema({
    name: String,
    address: String,
    business_field: String,
    start_time: String,
    contract_value: String,
    warranty: String,
})

//create model (file name, schema name, collection name on mongo database/mlab)
module.exports = mongoose.model('lelang', lelangSchema, 'lelang')