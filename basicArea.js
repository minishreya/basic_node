// const http=require('http')
// const f=require('./area')
// const server=http.createServer()


// server.on('request',function(req,res)
// {

//     f.square(res)
  

// })
// server.listen(3000,function()
// {
//     console.log("listing")
// })
const helper = require("./area")


console.log("Square", helper.square(5))
console.log("area of rectangle", helper.rectangle(2, 3))
console.log("area of circle", helper.circle(2))
require("./area")