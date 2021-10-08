const fs=require('fs')
const path=require('path')
//const path=pa
//fs.readFile
console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname,'area.js'))// too join the file with dietory
const filepath=path.join(__dirname,'area.js')
// fs is non blockinf function..
//sir ney result ko content likha h ..............
fs.readFile(filepath,(error,result)=>{
    console.log("after inside fs")
    if(error)
    {
        console.log(">.......",error.message)
        return;// it return no othere will work it go out of this fs.read .....
    }
    // else{
    //     console.log("working in else ")
    // }
    console.log("after inside fs end.....",result.toString('utf-8'))//utf is encoding that convert into byte that means buffer......
})
// fs.readFile(filepath,'utf-8',(error,result)=>{
//     console.log("after inside fs")
//     if(error)
//     {
//         console.log(">.......",error.message)
//         return;// it return no othere will work it go out of this fs.read .....
//     }
//     // else{
//     //     console.log("working in else ")
//     // }
//     console.log("after inside fs end.....",result)
// })
console.log("after fs file is executing..")




//........................................................................................
//for readsync as blocking function

// const fs = require( 'fs' );
// const path = require( 'path' ); // takes care of OS differences when constructing file paths

// // folder path of this .js file, and path of this .js file
// // console.log( __dirname );
// // console.log( __filename );

// const packageFilePath = path.join( __dirname, 'package.json' );

// // console.log( packageFilePath );

// try {
//     // fs.readFileSync() is a blocking function
//     // Never use sync functions - they block execution of rest of script
//     const contents = fs.readFileSync( packageFilePath, 'utf-8' );
//     console.log( contents );
// } catch( error ) {
//     console.error( error.message );
// }

// console.log( 'after call to fs.readFile' );