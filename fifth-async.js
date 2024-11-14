//this is for asynchronous behaviour
const {readFile,writeFile}=require('fs');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});
//if we dont provide utf coading then it will give buffer