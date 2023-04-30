import LightData from "../models/LightData";

//use for adding data from adafruit
class LightController {
    addLightData(data) {
        const newData = new LightData({pondNo: 1, value: data})
        newData.save()
            .then(() => {console.log('Added light successfully')})
            .catch((err) => console.log("Added light failed, error: " + err))
    }
}

export default new LightController