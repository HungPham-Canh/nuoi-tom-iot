const express = require('express');
const router = express.Router()
import pondController from '../controllers/PondController'

router.get('/', pondController.index)

export default router