import Pond from '../models/Pond'

class Pond {
    index(req, res, next) {
        Pond.find({})
            .then(ponds => res.json(ponds))
            .catch(next)
    }
}

export default new Pond