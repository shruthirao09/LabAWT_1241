const path = require('path');
const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath); 
const ext = path.extname('file.txt');
console.log(ext);
const normalizedPath = path.normalize('folder/./subfolder/../file.txt');
console.log(normalizedPath);
