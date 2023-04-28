import Pond from '../models/Pond'
import PumpData from '../models/PumpData'
import TempData from '../models/TempData'

class PondController {
    index(req, res, next) {
        Pond.find({})
            .then(ponds => res.json(ponds))
            .catch(next)
    }

    getPumpData(req, res, next) {
        
    }

    getCurrTempData(req, res, next) {}

    getAllTempData(req, res, next) {
        // console.log(req.params.pondNo)
        TempData.find({pondNo: req.params.pondNo}).sort({createdAt: "asc"})
            .then(temps => res.json(temps))
            .catch(next)
    }

    getLightData(req, res, next) {}

}

export default new PondController