function sumArray(a,tranfrom)
{
   return tranfrom(a[0])+tranfrom(a[1])+tranfrom(a[2])
}
function square(a)
{
    return a*a;
}
function cube(a)
{
    return a*a*a
}


console.log(sumArray([1,2,3,5],square))
console.log(sumArray([1,2,3],cube))
console.log(sumArray([2,3,5],function(a)
{
    return a+a+a
}))


//https://javascript.info/
//good website ...........


//https://javascript.info/function-object


//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


//install
//https://robomongo.org/

//robot 3T


//https://docs.mongodb.com/database-tools/installation/installation/


