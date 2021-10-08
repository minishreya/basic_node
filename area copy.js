// const setAsHmil=(res)=>{
//     res.setHeader('Content-Type','text/html')
// }
// // const result=function(value)
// // {
// // value=value*value
// // return value;
// // }

// exports.square=function(data)
// {
// setAsHmil(data)
// const v=55
// data.end("value is hard coded square value",v)
// }
// exports.rectangle=function(data)
// {
// setAsHmil(res)
// res.end("value is hard coded rectangle")
// }
// exports.circle=function(data)
// {
// setAsHmil(res)
// res.end("value is hard coded circle")
// }
// exports.pi=function(data)
// {
// setAsHmil(res)
// res.end("value is hard coded pi")
// }
console.log("wroking")

const PI = 3.14

const square = function(data){
    return data**2
}

const rectangle = function(w, l){
    return w*l
}

const circle = function(r){
    return PI*(r**2)
}

module.exports = {
    square,
    rectangle,
    circle
}
