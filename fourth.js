//path module
 //we can see our path seprator
 const path=require('path');
 console.log(path.sep);//output for our system is /

 const joinedpath=path.join('/aman','rahul','prashant','mukesh');//it will join all the path by normalizing it
 console.log(joinedpath);


 //if we want last part of the joined path file
 const value=path.basename(joinedpath);
 console.log(value);

 //return absolute path
 console.log(path.resolve(__dirname,'content','subfolder','aman'));
 //C:\Users\anush\OneDrive\Desktop\free-code-camp\content\subfolder\aman it will print there