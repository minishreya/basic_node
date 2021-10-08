const ee = require( './event.js' );

// ...in another place in you application
ee.on( 'update', ( result ) => {
    console.log( result.progress );
});

// ...in yet another place in you application
// process.nextTick(() =>
// {ee.on( 'update', ( result ) => {
//     console.log( `Progress so far is ${result.progress}%` );
// })
// });
//ee.on("checking")