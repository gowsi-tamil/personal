

// function imp(user,cb){
// cb("hi "+user)
// }

// const msg = imp("gowsik",function(msge){
//     console.log(msge)
// })

// one("gowsia").then((res)=>{
//     console.log(res);
//     return two("tamil")
// }).then((res)=>{
//     console.log(res);
//     return three("singam");

// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// function nameone(first,cb){
//     setTimeout(()=>{
//         cb(`my name ${first}`)
//     },10000)
// }
// var ko = "weef"
// const one = nameone("kowsi",function(md){
//     console.log(md)
// })
// console.log("name")

function f(a){
    return function (b){
        return `${a} ${b}`
    }
}
console.log(f(34)(38))