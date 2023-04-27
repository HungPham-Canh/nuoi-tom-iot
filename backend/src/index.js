require('dotenv').config()
const express = require('express');
import bodyParser from 'body-parser';
import db from './config/database'
import route from './routes'
const methodOverride =  require('method-override')

db.connect()

const app = express();
const PORT = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(methodOverride('_method'))

route(app)

app.listen(PORT || 3001, (error) => {
    if(!error) {
        console.log(`Server is running on port ${PORT}`);
    }
    else {
        console.log("Error occurred", error);
    }
})