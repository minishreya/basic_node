const fs = require( 'fs' );
const path = require( 'path' );
const zlib=require('zlib')

// const rs = fs.createReadStream( path.join( __dirname, 'area.js' ) );
// const ws = fs.createWriteStream( path.join( __dirname, 'area-copy.js.gzip' ) );
// const gs=zlib.createGzip()


// rs.pipe(gs).pipe(ws)

// rs.on( 'error', error => {
//     console.error( error.message );
// });

// ws.on( 'error', error => {
//     console.error( error.message );
// });


// too unzip the file.....
const rs=fs.createReadStream(path.join(__dirname,'area-copy.js.gzip'))
const ws=fs.createWriteStream(path.join(__dirname,'areazip.js'))
const ugs=zlib.createGunzip()
rs.pipe(ugs).pipe(ws)
rs.on( 'error', error => {
    console.error( error.message );
});

ws.on( 'error', error => {
    console.error( error.message );
});



