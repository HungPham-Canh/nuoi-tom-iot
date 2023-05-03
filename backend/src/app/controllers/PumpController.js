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

        try {
            data = JSON.stringify(newData)
            const topic = topics[1]
            client.publish(topic, data, (err) => {
                console.log(data)
                if (err) {
                    console.log("Failed to publish feed")
                    console.error(err);
                    throw new Error(err.message);
                } else {
                    console.log(`message published to ${topic}: ${data}`);
                }
                // // close the client connection
                // client.end();
            });

            // add data to database
            newData.save()
                .then(() => { console.log('Added successfully') })
                .catch((err) => {
                    console.log("Added failed, error: " + err)
                    throw new Error(err)
                })

            res.send(null)
        }
        catch (e) {
            res.send(e.message)
        }
        
        //newest commit
        // newData.save()
        //     .then(() => { console.log('Added successfully') })
        //     .catch((err) => console.log("Added failed, error: " + err))
    }s
}

export default new PumpController