const express = require('express');
const router = express.Router()
import pondController from '../controllers/PondController'

router.get('/', pondController.index)
router.get('/:pondNo/pump', pondController.getPumpData)
router.get('/:pondNo/temp', pondController.getTempData)
router.get('/:pondNo/light', pondController.getLightData)

export default router