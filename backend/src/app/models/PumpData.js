import mongoose from "mongoose";
const Schema = mongoose.Schema

const PumpData = new Schema({
    pondNo: {type: Number}, //set khoa ngoai
    value: {type: Number},
}, {
    timestamps: true
})

export default mongoose.model('PumpData',PumpData)