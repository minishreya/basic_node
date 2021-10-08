
process.on('exit',()=>
{
    console.log("process is exitis")
})
// very bad pratice...
process.on('uncaughtException',error=>{
    console.log(error.message)
})
foo();// throws an error -we calling not defined...