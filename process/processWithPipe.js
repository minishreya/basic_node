const fs=require('fs')
const path=require('path')

const ws=fs.createWriteStream(path.join(__dirname,"userinputbyPipe.txt"))
//read stream process.stdin
process.stdin.pipe(ws)
// it will take input by terminal and show in that txt file....



//another that write and read................
//process.stdin.pipe(process.stdout)