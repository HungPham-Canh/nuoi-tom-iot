import tempController from '../app/controllers/TempController'
import doController from '../app/controllers/DOController'
// import pumpController from '../app/controllers/PumpController'; //newest commit
import fanEvent from '../services/eventFan'
import client from './mqtt'

export default client.on('message', (topic, message) => {
  console.log(`received message from ${topic}: ${message.toString()}`);
  const feed_key = topic.split('/')[2]

  switch (feed_key) {
    case 'dadn.setemp':
      tempController.addTempData(message)
      break
    case 'dadn.sedo':
      doController.addDOData(message)
      fanEvent.checkDO(message)
      break
  }
});