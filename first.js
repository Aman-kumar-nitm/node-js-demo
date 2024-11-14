//  globals -NO Windows!!!
// __dirname   it will give directory name or path name
// __filename  it will give the file name
// require   function to use modules(js)
// module    info about current module (file)
// process   info about environment where programme is being executed


console.log(__dirname);
console.log(__filename);
setInterval(()=>{
    console.log("hello world");
},1000);//it will print hello world after 1s 
// globals you can access it any  where inside the program no matter how nested it how complex it


//global object
global.myglobalvariables='hello world';

setTimeout(()=>{
    console.log("this is time out it will print after 2s")
},2000);

setImmediate(()=>{
    console.log("it will run immediately withour wasting any time after the current event loop cycle")
})