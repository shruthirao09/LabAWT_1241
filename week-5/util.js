const util = require('util');
const name='madhu';
const age=30;
console.log(util.format('my name is %s,and I am %d years old',name,age ))
const obj={name:'alice',
           age:25,
           hobbiesP:[
            'reading','coding'
           ]
        };
console.log(util.inspect(obj));
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile);

readFilePromise('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));