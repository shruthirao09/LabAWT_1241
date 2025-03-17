const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('An event occurred!');
});
myEmitter.emit('event');
myEmitter.once('onceEvent', () => {
  console.log('This will only be triggered once.');
});

myEmitter.emit('onceEvent');
myEmitter.emit('onceEvent'); 
