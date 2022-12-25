console.log("stating");

function one(usernmae){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`from one ${usernmae}`)
        },1000)
    })
}

function two(usernmae){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`from two ${usernmae}`)
        },1000)
    })
}
function three(usernmae){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`from three ${usernmae}`)
        },1000)
    })
}


// const result = async()=>{
//     try{
//     var msg = await one("gowsia")
//     var msg1 = await two("gowsidvSFda")
//     var msg2 = await three("gowshfgcjvkbnlmia")
//     console.log(msg,msg1,msg2)
//     }
//     catch(err){
// console.log("catch block",err)
//     }
// }
// result()

function promfun(parame){
    if(parame.length === 0) return;

    const org = parame.shift();
    org
    .then((red)=>console.log(red))
    .catch((err)=>console.log(err));

    
    promfun(parame);

}

promfun([
   one("gowsia"),
   two("gowsidvSFda"),
   three("gowshfgcjvkbnlmia")
])