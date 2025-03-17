const os = require('os');
console.log('platform:',os.platform());
console.log('Free memory :',os.freemem()); 
console.log('uptime:',os.uptime());
console.log('temporary files:',os.tmpdir());
console.log('home directory:',os.homedir());
console.log('type:',os.type());
console.log('release:',os.release());
console.log('cpu info:',os.cpus());
