const mqtt = require('mqtt');

const AIO_USERNAME = 'CurtisDo';
const AIO_KEY = 'aio_elTN112umL0wr62yrhTorjg4YFPj';

// create a client object
const client = mqtt.connect({
  host: 'io.adafruit.com',
  port: 1883,
  username: AIO_USERNAME,
  password: AIO_KEY
});

// handle connection events
client.on('connect', () => {
  console.log('connected to Adafruit IO MQTT broker');
  
  // publish a message to a feed
//   const feedName = 'your-feed-name';
//   const message = 'Hello from Node.js!';
//   const topic = `${AIO_USERNAME}/feeds/${feedName}`;
//   client.publish(topic, message, (err) => {
//     if (err) {
//         console.log("Failed to publish feed")
//       console.error(err);
//     } else {
//       console.log(`message published to ${topic}: ${message}`);
//     }
//     // close the client connection
//     client.end();
//   });

client.end()
});

// handle error events
client.on('error', (err) => {
  console.error('connection error:', err);
});

export default client