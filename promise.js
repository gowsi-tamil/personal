


function naming(){
return  new Promise((resolve,reject)=>{
     setTimeout(()=>{
resolve("jii")
    },10000)
})
}

function chandler(){
    return  new Promise((resolve,reject)=>{
         setTimeout(()=>{
    resolve("oneee")
        },5000)
    })
    }

    function rachael(){
        return  new Promise((resolve,reject)=>{
             setTimeout(()=>{
        resolve("twooo")
            },2000)
        })
        }


naming().then((the)=>{
console.log(the)
return chandler();
}).then((one) =>{
    console.log(one)
    return rachael();
}).then((tw)=>{
    console.log(tw)
})
// console.log("3456u")

