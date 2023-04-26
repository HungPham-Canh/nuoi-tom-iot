import mongoose from 'mongoose';
const uri = "mongodb+srv://admin:2014289@cluster0.uelpyks.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(process.env.MONG_URI)
        console.log('Connect to MongoDB successfully')
    }
    catch (err) {
        console.log('Connect failed', err)
    }
}

export default {connect}