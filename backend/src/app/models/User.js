import mongoose from "mongoose"
const Schema = mongoose.Schema

const User = new Schema({
    name: {type: String, maxLength: 255},
    email: {type: String, maxLength: 255, unique: true},
    password: {type: String, maxLength: 255}
})

export default mongoose.model('User',User) 