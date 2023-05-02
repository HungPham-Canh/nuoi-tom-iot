import PumpData from "../models/PumpData";
import client, { topics } from "../../config/mqtt";

//use for adding data from adafruit
class PumpController {

    addPumpData(data) {
        const topic = topics[1]
        const newAdaData = JSON.stringify(data)

        client.publish(topic, newAdaData, (err) => {
            if (err) {
                console.log("Failed to publish feed")
                console.error(err);
            } else {
                console.log(`message published to ${topic}: ${newAdaData}`);
            }
        })


        // add data to database
        const newData = new PumpData(data)
        newData.save()
            .then(() => { console.log('Added successfully') })
            .catch((err) => console.log("Added failed, error: " + err))
    }
}

export default new PumpController