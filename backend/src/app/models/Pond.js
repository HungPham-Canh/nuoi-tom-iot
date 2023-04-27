import mongoose from "mongoose"
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema

const Pond = new Schema({
    size: {type: Number}
})

Pond.plugin(AutoIncrement, {inc_field: 'pondNo'})

export default mongoose.model('Pond',Pond) 