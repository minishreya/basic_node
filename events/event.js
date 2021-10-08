// EventEmitter provides a means for communication between pieces of your code
// The object of EventEmitter class can be used for communiction
const EventEmitter = require( 'events' );

const ee = new EventEmitter();

// One who wants to send a message will do some operation and send this from one place in the application...
// process.nextTick(() => {
//     ee.emit( 'update', {
//         progress: 40
//     });    
// });

setInterval(()=>{
   //  ee.emit('checking',console.log("timerr"))
ee.emit( 'update', {
    progress: 40
}); 
 },1000)

module.exports = ee;