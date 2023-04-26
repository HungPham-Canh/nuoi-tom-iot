require('dotenv').config()
const express = require('express');
import db from './config/database'

const app = express();
const PORT = process.env.PORT
db.connect()
app.listen(PORT || 3001, (error) => {
    if(!error) {
        console.log(`Server is running on port ${PORT}`);
    }
    else {
        console.log("Error occurred", error);
    }
})