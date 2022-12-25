console.log("promise atert")
const prom = new Promise((resolve,reject)=>{
setTimeout(()=>{
    var val =true;
    if(val) resolve("it is rsolved");
    else reject(new Error("it is eror"))
},2000)
})

prom.then((res)=>{
    console.log(res);
}).catch((Err)=>{
    console.log(Err);
})

console.log("2 nd ")