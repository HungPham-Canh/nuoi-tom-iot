const express = require('express');
const router = express.Router()
import pondController from '../controllers/PondController'
import pumpController from '../controllers/PumpController';
import fanController from '../controllers/FanController';

router.get('/', pondController.index)
// router.get('/:pondNo/pump', pondController.getPumpData)
// router.post(':pondNo/pump', pondController.sendPumpData)
//https://localhost:8080/pond/1/pump
router.get('/:pondNo/temp', pondController.getCurrTempData)
router.get('/:pondNo/temps', pondController.getAllTempData)

router.get('/:pondNo/do', pondController.getCurrDOData)
router.get('/:pondNo/dos', pondController.getAllDOData)

router.post('/:pondNo/pump/toggle', pumpController.addPumpData)
router.post('/:pondNo/fan/toggle', fanController.addFanData)

export default router