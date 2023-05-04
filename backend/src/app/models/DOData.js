import mongoose from "mongoose";
const Schema = mongoose.Schema

const DOData = new Schema({
    pondNo: {type: Number}, //set khoa ngoai
    value: {type: Number},
}, {
    timestamps: true
})

export default mongoose.model('DOData',DOData)