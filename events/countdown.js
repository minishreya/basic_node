// const EventEmitter=require('events')
// class Countdown{
//     constructor(starttime)
//     {
//         this.starttime=starttime;
//         this.ee=new EventEmitter();

//     }
//     start()
//     [
//         let current
//     ]
// }
const EventEmitter = require( 'events' );
console.log("called timer")

class Countdown {
    constructor( startTime ) {
        this.startTime = startTime;
        this.ee = new EventEmitter();
    }

    start() {
        let currentTime = this.startTime;

        this.id = setInterval(() => {
            currentTime--;

            if( currentTime <= 0 ) {
                clearInterval( this.id );//that is stop and out of timer
            }

            if( currentTime % 5 === 0 ) {
                this.ee.emit( 'multiple_5', {
                    currentTime: currentTime
                });
            }
            if(currentTime%10===0)
            {
                this.ee.emit('multiple_of_10',{
                    currentTime:currentTime
                })
            }
        }, 1000);

        this.ee.emit( 'started' );
    }

    stop() {
        clearInterval( this.id );
    }
}

module.exports = Countdown;