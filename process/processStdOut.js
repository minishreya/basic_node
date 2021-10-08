const fs=require('fs')
const path=require('path')

const ws=fs.createWriteStream(path.join(__dirname,"userinput.txt"))

process.stdin.on('data',chunk=>{
    ws.write(chunk)

})
process.stdin.on('end',()=>
{
    ws.end();
}
)

// process.stdin.pipe(ws)

process.stdin.read()