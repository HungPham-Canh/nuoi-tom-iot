import Pond from '../models/Pond'
import PumpData from '../models/PumpData'

class PondController {
    index(req, res, next) {
        Pond.find({})
            .then(ponds => res.json(ponds))
            .catch(next)
    }

    getPumpData(req, res, next) {
        
    }

    getTempData(req, res, next) {}

    getLightData(req, res, next) {}


    //use for mqtt data
    addTempData(data) {}
}

export default new PondController