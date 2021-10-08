//const { error } = require('console')
const fs=require('fs')
const path=require('path')
const newfile=path.join(__dirname,"hello.txt")
//contain of file 

const contents=`
<html>
<title>
hello title</title>
<body>
content thatat are
</body>
</html>`

//non blocking..
//but in writefileSync is blocking ... no need third argument...means first complete this after go next..like line number 28 to move
fs.writeFile(newfile,contents,(error)=>
{
    if(error)
    {
        console.log("error>",error.message)
        return;
    }
    console.log("sucessfully ")
})

console.log("working .........last line...")