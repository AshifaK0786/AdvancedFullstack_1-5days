const path = require('path');
basedName=path.basename('C:\Users\Dell\Desktop\mern\nodejs\sample.txt')
console.log(basedName);

const extensionName=path.extname('C:\Users\Dell\Desktop\mern\nodejs\sample.txt')
console.log(extensionName);

const joinedPath=path.join('C:\Users\Dell\Desktop\mern\nodejs','sample.txt')
console.log(joinedPath);