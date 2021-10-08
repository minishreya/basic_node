const fs=require('fs')
const path=require('path')
console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname,'area.js'))// too join the file with dietory
const filepath=path.join(__dirname,'area.js')
const rs=fs.createReadStream(filepath)


//chunk size default is 64kb is limit is maximum required

let numberofchunk=0;
rs.on('data',chunk=>{
    console.log(numberofchunk)
    numberofchunk++
    //console.log(chunk)
    process.stdout.write(chunk)// atomatically convert utf8 that convert buffer into string..
    //console.log(chunk)// give in buffer formate so convert into string..

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
})
rs.on('end',()=>
{
    console.log("file has been read...")
})
rs.on('error',error=>
{
    console.error(".......",error.message)
})
rs.read()