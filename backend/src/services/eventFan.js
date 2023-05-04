import mqttClient, {host, topics} from '../config/mqtt'

class FanEvent {
    checkDO(data) {
        const topic = topics[3]
        if (data < 4.5) {
            fetch(`https://${host}/api/v2/${topic}/data`)
                .then(res => res.json())
                .then((datas) => {
                    // console.log(datas)
                    const currentData = datas[0]
                    if(currentData.value === "0") {
                        mqttClient.publish(topic, JSON.stringify({value: 1}), err => {
                            if (err) {
                                console.log("Failed to publish feed")
                                console.error(err);
                                throw new Error(err.message);
                            } else {
                                console.log(`message published to ${topic}: ${data}`);
                            }
                        })
                    }
                })
                .catch(err => console.error(err))
        }

        else if(data >= 6) {
            fetch(`https://${host}/api/v2/${topic}/data`)
                .then(res => res.json())
                .then((datas) => {
                    // console.log(datas)
                    const currentData = datas[0]
                    if(currentData.value === "1") {
                        mqttClient.publish(topic, JSON.stringify({value: 0}), err => {
                            if (err) {
                                console.log("Failed to publish feed")
                                console.error(err);
                                throw new Error(err.message);
                            } else {
                                console.log(`message published to ${topic}: ${data}`);
                            }
                        })
                    }
                })
                .catch(err => console.error(err))
        }
    }
} 

export default new FanEvent