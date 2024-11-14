//file module either sync and async
const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/first.txt','utf8');
//second element is just for sake
console.log(first);
writeFileSync('./content/first.txt','this is me added aman');//this will override all the previous value
console.log(first);

//if we add a {flag:'a'} then it will add one more element and it will be two times
