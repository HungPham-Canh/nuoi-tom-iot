import Pond from '../models/Pond'
import PumpData from '../models/PumpData'
import TempData from '../models/TempData'
import DOData from '../models/DOData'

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

    getCurrDOData(req, res, next) {
        DOData.findOne({pondNo: req.params.pondNo}).sort({createdAt: -1})
            .then(DO => res.json(DO))
            .catch(next)
    }

    getAllDOData(req, res, next) {
        // console.log(req.params.pondNo)
        DOData.find({pondNo: req.params.pondNo}).sort({createdAt: "asc"})
            .then(DOs => res.json(DOs))
            .catch(next)
    }

}

export default new PondController