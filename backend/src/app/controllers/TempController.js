import TempData from "../models/TempData";

//use for adding data from adafruit
class TempController {
    addTempData(data) {
        const newData = new TempData({pondNo: 1, value: data})
        newData.save()
            .then(() => {console.log('Added temp successfully')})
            .catch((err) => console.log("Added temp failed, error: " + err))
    }
}

export default new TempController