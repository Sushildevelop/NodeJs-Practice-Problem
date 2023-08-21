const os = require('os');

console.log("Cpu architecture : " + os.arch());

console.log("free memory: " + os.freemem());

console.log("total memory: " + os.totalmem());

console.log("list of network interfaces : " + os.networkInterfaces());

console.log("os default directory for temp files : " + os.tmpdir());

console.log("endianess of system " + os.endianness());

console.log("hostname of system " + os.hostname());
console.log("operating system name: " + os.type());
console.log("opearting system platform: " + os.platform());
console.log("os release: " + os.release());