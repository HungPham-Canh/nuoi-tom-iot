import pondController from '../app/controllers/PondController'
import client from './mqtt'

export default client.on('message', (topic, message) => {
  console.log(`received message from ${topic}: ${message.toString()}`);
});