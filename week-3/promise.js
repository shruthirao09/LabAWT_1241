
var b = true
let p = new Promise((resolve,reject)  => 
{
    if(b){
        resolve("Success");
    }
    else{
        reject("Failure");
    }
})

.then(result =>(console.log(result)));