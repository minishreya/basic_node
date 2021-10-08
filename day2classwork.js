// import http from 'http';
const http = require( 'http' );
const url = require( 'url' );

const server = http.createServer();

server.on( 'request', ( req, res ) => {
    // if we mention true as the second parameter, we get the parts of the query string as well
    console.log( req.url );
    const parts = url.parse( req.url, true );
    // pathname - just the path (/home), query is an object with the query string parameters - eg. { name: 'John Doe' }

    console.log( parts );
    //res.end(parts)
  //  res.end( `You requested for ${parts.pathname}. The name is ${parts.query.abc} and age is` );
        
    if(parts.pathname=="/add")
    {
       // res.end("working add")
      const value=parseInt(parts.query.x)+parseInt(parts.query.y);
       res.end(`${value}`)
        console.log("working parth")
    }
    if(parts.pathname=="/multiply")
    {
       // res.end("working add")
      const value=parseInt(parts.query.x)*parseInt(parts.query.y);
       res.end(`${value}`)
        console.log("working parth")
    }
});

server.on( 'error', ( error ) => {
    console.error( error.message );
});

server.listen( 3000 );



// // import http from 'http';
// const http = require( 'http' );

// const server = http.createServer();

// server.on( 'request', ( req, res ) => {
//     console.log( req.url );
//     if( req.url === '/about' ) {
//         res.end( 'This is a demo application\n' );
//     } else if( req.url === '/home' ) {
//         res.setHeader( 'Content-Type', 'text/html' );
//         res.end( '<h1>Home page</h1>' );
//     } else {
//         res.end( 'Hello there!' );
//     }
// });

// server.on( 'error', ( error ) => {
//     console.error( error.message );

//     // EXERCISE: generalize this to find the current port being tried and try the next port (eg. if 4500 is being tried, use 4501 instead)
//     server.listen( 3001 );
// });

// // alternatively...
// // const server = http.createServer(( req, res ) => {
// //     console.log( req.headers );
// //     res.write( 'Hello, world\n' );
// //     res.end( 'Ok, ttyl' );
// // });

// // (till 1024 port is reserved for standard services) - 65535
// server.listen( 3000 );



