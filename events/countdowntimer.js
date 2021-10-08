const Countdown = require( './countdown' );

const c = new Countdown( 100 );

c.ee.on( 'started', () => {
    console.log( 'started' );
});

c.ee.on( 'multiple_5', ( event ) => {
    console.log( event.currentTime );
});
c.ee.on('multiple_of_10',(events)=>
{
console.log(events.currentTime)
})

c.start();