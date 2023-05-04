require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
import db from './config/database'
import route from './app/routes'
const methodOverride = require('method-override')
import listenAdafruit from './config/listenAda'

db.connect()

const app = express();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(methodOverride('_method'))

route(app)

app.listen(PORT || 3001, (error) => {
    if (!error) {
        console.log(`Server is running on port ${PORT}`);
    }
    else {
        console.log("Error occurred", error);
    }
})