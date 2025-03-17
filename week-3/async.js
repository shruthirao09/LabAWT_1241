function fetchuserid(id){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const user ={userid : id, name : "Nishritha" , type : "premium"};
            resolve(user);
        },1000);
    });
}

function fetchusersettings(type){
    return new Promise((resolve, reject) => {
        const s = type === `premium` ? {theme : "dark" , Notification : true, access : "High"} : {theme : "dark" , Notification : false, access : "low"};
        resolve(s);
    });
}

async function display() {
    let user = await fetchuserid(1)
    let s = await fetchusersettings(user.type)
    console.log(s);
    
}
display();