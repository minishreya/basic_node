const setAsHmil=(res)=>{
    res.setHeader('Content-Type','text/html')
}

const gm=(res)=>{
    setAsHmil(res);// to know what we are knowing as Content type having to know html type
    res.end('<i> new good morning</i>')
}
const ggn=(res)=>{
    setAsHmil(res);
    res.end('<i>goodafternoon</i>')
}
module.exports=
{
    gm,ggn
}