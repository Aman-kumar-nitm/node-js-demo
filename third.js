//os module provides many methds and property to interact with the os and server

const { log } = require('console');
const os=require('os');

//this will give information about current user
const user=os.userInfo();
console.log(user);

// the system uptime
console.log(`the run time is ${os.uptime()} seconds`);

const currentos={
    name:os.type(),
    release:os.release(),
    freemem:os.freemem(),
    totalmem:os.totalmem(),
}
console.log(currentos);