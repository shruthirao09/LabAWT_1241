function fetchuserif(id){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const user = { userid : id, name : "Nishritha", type : "premium"};
            resolve(user);
        },1000);
    });
}

function fetchusersettings(usertype){
    return new Promise((resolve,reject) =>{
        console.log(`Fetching setting for user ${usertype}`);
        const s = usertype === `premium` ? { theme:"dark" , Notification : true, accesslevel : "High"}  : { theme:"light" , Notification : false, accesslevel : "low"} ;
        resolve(s);
});
}
fetchuserif(1).then(user => fetchusersettings(user.type))
.then(details => {console.log(details)})
.catch(error => {console.log(error)})