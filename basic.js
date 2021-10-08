const http=require('http')
const f=require('./greeting')
const server=http.createServer()


server.on('request',function(req,res)
{

    //res.write("hello")
    // f(res)
   // res.end("ending")
  //  res.write("hello")
  f.ggn(res)
 // const hr=(new Date().getHours())
  

})
server.listen(4000,function()
{
    console.log("listing")
})