const mqtt = require('mqtt');

const AIO_USERNAME = 'CurtisDo';
const AIO_KEY = 'aio_njWD31QmgZKQYNasDifPvO8ApTQG';
const AIO_FEED_KEYS = ["dadn.selight", "dadn.sepump", "dadn.setemp"]
export const topics = AIO_FEED_KEYS.map(feedName => `${AIO_USERNAME}/feeds/${feedName}`);

// create a client object
const client = mqtt.connect({
  host: 'io.adafruit.com',
  port: 1883,
  username: AIO_USERNAME,
  password: AIO_KEY
});

// handle connection events
client.on('connect', () => {
  console.log('Connected to Adafruit IO MQTT broker');

  topics.map(topic => {
    client.subscribe(topic, (error) => {
      if (error) {
        console.log("Failed to subscribe", error);
      }
      else {
        console.log(`Subscribe to topic '${topic}'`)
      }
    })
  })
  // client.publish(topic, data, (err) => {
  //   if (err) {
  //       console.log("Failed to publish feed")
  //     console.error(err);
  //   } else {
  //     console.log(`message published to ${topic}: ${message}`);
  //   }
  //   // close the client connection
  //   client.end();
  // });

  // client.end()
});

// client.on('message', (topic, message) => {
//   console.log(`received message from ${topic}: ${message.toString()}`);
// });

// handle error events
client.on('error', (err) => {
  console.error('connection error:', err);
});


export default client