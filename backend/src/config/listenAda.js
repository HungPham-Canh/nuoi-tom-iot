import tempController from '../app/controllers/TempController'
import lightController from '../app/controllers/LightController'
import client from './mqtt'

export default client.on('message', (topic, message) => {
  console.log(`received message from ${topic}: ${message.toString()}`);
  const feed_key = topic.split('/')[2]
  switch (feed_key) {
    case 'dadn.setemp':
      tempController.addTempData(message)
      break
    case 'dadn.selight':
      lightController.addLightData(message)
      break
  }
});