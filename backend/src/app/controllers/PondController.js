import Pond from '../models/Pond'
import PumpData from '../models/PumpData'
import TempData from '../models/TempData'
import LightData from '../models/LightData'

class PondController {
    index(req, res, next) {
        Pond.find({})
            .then(ponds => res.json(ponds))
            .catch(next)
    }

    getPumpData(req, res, next) {
        
    }

    getCurrTempData(req, res, next) {
        TempData.findOne({pondNo: req.params.pondNo}).sort({createdAt: -1})
            .then(temp => res.json(temp))
            .catch(next)
    }

    getAllTempData(req, res, next) {
        // console.log(req.params.pondNo)
        TempData.find({pondNo: req.params.pondNo}).sort({createdAt: "asc"})
            .then(temps => res.json(temps))
            .catch(next)
    }

    getCurrLightData(req, res, next) {
        LightData.findOne({pondNo: req.params.pondNo}).sort({createdAt: -1})
            .then(light => res.json(light))
            .catch(next)
    }

    getAllLightData(req, res, next) {
        // console.log(req.params.pondNo)
        LightData.find({pondNo: req.params.pondNo}).sort({createdAt: "asc"})
            .then(lights => res.json(lights))
            .catch(next)
    }

}

export default new PondController