import FanData from "../models/FanData";
import client, { topics } from "../../config/mqtt";

//use for adding data from adafruit
class FanController {
    addFanData(req, res, next) {
        let data = req.body;
        const newData = new FanData(data)

        try {
            data = JSON.stringify(newData)
            const topic = topics[3]
            client.publish(topic, data, (err) => {
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
        // client.pulish(data)
        // const newData = new FanData(data)
        // // client.publish(newData)
        // console.log(newData)

        // newData.save()
        //     .then(() => { console.log('Added successfully') })
        //     .catch((err) => console.log("Added failed, error: " + err))
    }
}

export default new FanController