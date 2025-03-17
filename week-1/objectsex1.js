/*
const nameofperson = 'Shruthi';
const age = 20;
const user = { name: nameofperson, age };  
console.log(user);

const person={
    greet(){
        console.log("Welcome to AWT lab.");
    }
}
person.greet();

const propName ='dynamicKey';
const obj={
    [propName]:'dynamicValue'
}
console.log(obj);

const patient={tokenNO:100,Name:'Shruthi'};
const{tokenNO:x,Name:y}=patient;
console.log(x);
console.log(y);

const patient={tokenNO:100,Name:'Shruthi'};
console.log(patient.tokenNO);
console.log(patient.Name);

const patient={tokenNO:100};
const{tokenNO:x,Name='sofiya'}=patient;
console.log(x);
console.log(Name);

const patient=[tokenNO=100,Name='Shruthi'];
const[x,y]=patient;
console.log(x);
console.log(y);

const product ={
    title : 'Laptop',
    details :{
        brand : 'HP',
        price :90000
    }
};
const{details:{brand,price}}=product;
console.log(price);

//object Methods

const target={a:1,b:2};
const source={b:5,c:3,d:8,a:8};
Object.assign(target,source);
console.log(target);

const objectEntries = { a: 10, y: 20 };
console.log(Object.entries(objectEntries));
console.log(Object.keys(objectEntries));
console.log(Object.values(objectEntries));

class Animal{
    constructor(name,species){
        this.name=name;
        this.species=species;
    }
    describe(){
        return `${this.name} is a ${this.species}`;
    }
};
const animal=new Animal('Lion','WildCat');
console.log(animal.describe());

const obj1={p:1,q:2};
const obj2={q:3,r:4};
const mergedObj={...obj1,...obj2};
console.log(mergedObj);

const [first, ...rest] = [1, 2, 3, 4];
console.log(first);  
console.log(rest);   

const person = {
  name: 'John',
  age: 30
};

Object.freeze(person);  // Freezing the object

person.name = 'Doe';    // Attempting to change the value of 'name'
person.age = 35;        // Attempting to change the value of 'age'
person.city = 'New York'; // Attempting to add a new property

console.log(person); */
/*function fetchuserdata(user){
    return new Promise((resoolve,reject)=>{
        setTimeout(()=>{
            const user={id:'UserId',name:'John Doe',type:premium};
            resolve(user);
        },1000);
    });
}
function fetchUserSetting(usertype){
    return new Promise((resolve,reject)=>{
        console.log('fetching setting for usertype:$(usertype)');
        const setting=usertype=='premium'
        ?{theme:'dark',notification:true,accesslevel:'high'}
        :{theme:'light',notification:false,accesslevel:'low'}
        resolve(setting);
    });
}
fetchuserdata(1)
.then(user=>fetchUserSetting(user.type))
.then(setting=>{console.log(setting)})
.catch(error=>{console.log(error)})*/
/*const xhr=new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
xhr.onload=function(){
    if(xhr.status>=200&&xhr.status<300){
       res=JSON.parse(xhr.responseText);
    console.log(res);      
}
};
xhr.send();*/


