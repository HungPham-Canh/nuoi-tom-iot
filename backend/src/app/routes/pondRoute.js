const express = require('express');
const router = express.Router()
import pondController from '../controllers/PondController'
import pumpController from '../controllers/PumpController'

router.get('/', pondController.index)
router.get('/:pondNo/pump', pondController.getPumpData)
// router.post(':pondNo/pump', pondController.sendPumpData)
//https://localhost:8080/pond/1/pump
router.get('/:pondNo/temp', pondController.getCurrTempData)
router.get('/:pondNo/temps', pondController.getAllTempData)

router.get('/:pondNo/light', pondController.getCurrLightData)
router.get('/:pondNo/lights', pondController.getAllLightData)

router.post('/toggle/pump', pumpController.toggle)

export default router