// const fs = require( 'fs' );
// const path = require( 'path' );

// const rs=fs.readFile( path.join( __dirname, 'package.json' ), 'utf-8', ( error, contents ) => {
//     if( error ) {
//         console.error( 'Some error occured. Copy file will not be created.' );
//         return;
//     }

//     fs.writeFile( path.join( __dirname, 'package-copy.json' ), contents, error => {
//         if( error ) {
//             console.error( 'Some error occured when creating a copy', error.message );
//             return;
//         }

//         console.log( 'Copy was created' );
//     });
// });

const fs = require( 'fs' );
const path = require( 'path' );

const rs = fs.createReadStream( path.join( __dirname, 'area.js' ), 'utf-8' );
const ws = fs.createWriteStream( path.join( __dirname, 'area-copy.js' ) );

rs.on( 'data', chunk => {
    ws.write( chunk );
});

rs.on( 'end', () => {
    console.log( 'File has been read and written' );
    ws.end()
});

rs.on( 'error', error => {
    console.error( error.message );
});

ws.on( 'error', error => {
    console.error( error.message );
});


rs.read();


// //>>>>>>>>>>>>>>>>.short to cpoy by pipe>>>>>>>>>>>>>>>>>.....
// //start read automatically in chunk and wrt automatically by write...
// rs.pipe(ws)///short form.....to read and write
// //for handling error we have to handle by read as well as write
// rs.on( 'error', error => {
//     console.error( error.message );
// });

// ws.on( 'error', error => {
//     console.error( error.message );
// });
