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
router.get('/:pondNo/light', pondController.getLightData)
router.post('/api/toggle/pump', (req, res) => {
    console.log(req.body);
})

export default router