//callbacks
console.log("sater");

function importantAction(username,cb){
    setTimeout(() =>{
        cb (`subscribe to ${username}`)
    },1000)
}

const message = importantAction("Roadside coder",function(message){
    console.log(message);
});
console.log("stop");