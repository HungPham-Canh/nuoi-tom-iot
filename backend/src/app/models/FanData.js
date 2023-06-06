import mongoose from "mongoose";
const Schema = mongoose.Schema

const FanData = new Schema({
    pondNo: {type: Number}, //set khoa ngoai
    value: {type: Number},
}, {
    timestamps: true
})

export default mongoose.model('FanData',FanData)