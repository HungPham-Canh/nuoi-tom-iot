import pondController from '../app/controllers/PondController'
import client from './mqtt'

client.on('message', (topic, message) => {
  console.log(`received message from ${topic}: ${message.toString()}`);
});