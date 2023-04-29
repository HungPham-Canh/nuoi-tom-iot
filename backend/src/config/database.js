import mongoose from 'mongoose';

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