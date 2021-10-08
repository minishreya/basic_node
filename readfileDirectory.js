//const { error } = require('console')
const fs=require('fs')
const path=require('path')
const pathdir=path.join(__dirname)
fs.readdir(pathdir,(error,files)=>
{
    
    if(error)
    {
        console.log(error.message)
    }
    else{
        files.forEach(files=>{
            console.log(files)
        })

    }
})