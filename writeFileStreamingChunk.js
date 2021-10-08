//const { error } = require('console')
const fs=require('fs')
const path=require('path')
const newfile=path.join(__dirname,"hellochunk.txt")
//contain of file 

const contents=`
<html>
<title>
hello title</title>
<body>
content thatat are
</body>
</html>`

const another=`
..............................
<html>
<title>
hello title</title>
<body>
content thatat are
</body>
</html>`


const ws=fs.createWriteStream(path.join(__dirname,"hellochunk.txt"))
ws.write(contents)
ws.write(another)
ws.end()