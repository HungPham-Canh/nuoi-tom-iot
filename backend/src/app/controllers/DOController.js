import DOData from "../models/DOData";

//use for adding data from adafruit
class DOController {
    addDOData(data) {
        const newData = new DOData({pondNo: 1, value: data})
        newData.save()
            .then(() => {console.log('Added DO successfully')})
            .catch((err) => console.log("Added DO failed, error: " + err))
    }
}

export default new DOController