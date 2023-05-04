// import * as mqtt from "mqtt/dist/mqtt";

export const FEED_TEMP = 'dadn.setemp'
export const FEED_LIGHT = 'dadn.selight'
export const FEED_PUMP = 'dadn.sepump'

export const AIO_USERNAME = 'CurtisDo';
// const AIO_KEY = 'aio_njWD31QmgZKQYNasDifPvO8ApTQG';
// const AIO_FEED_KEYS = ["dadn.sepump"]
// export const topics = AIO_FEED_KEYS.map(feedName => `${AIO_USERNAME}/feeds/${feedName}`);

// const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

// // create a client object
// const client = mqtt.connect({
//   host: 'io.adafruit.com',
//   port: 443, // MQTT port for SSL connection
//   protocol: 'mqtt', // MQTT protocol for SSL connection
//   // clientId,
//   username: AIO_USERNAME,
//   password: AIO_KEY
// });

// // handle connection events
// client.on('connect', () => {
//   console.log('Connected to Adafruit IO MQTT broker');

//   topics.map(topic => {
//     client.subscribe(topic, (error) => {
//       if (error) {
//         console.log("Failed to subscribe", error);
//       }
//       else {
//         console.log(`Subscribe to topic '${topic}'`)
//       }
//     })
//   })

// });

// // client.on('message', (topic, message) => {
// //   console.log(`received message from ${topic}: ${message.toString()}`);
// // });

// // handle error events
// client.on('error', (err) => {
//   console.error('connection error:', err);
// });


// export default client