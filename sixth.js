// // http module

// const http=require('http');
// //here we are creating a server the first thing is request the second thing is response that server will show;
// const server=http.createServer((req,res)=>{
//     console.log(req);
//     res.write("hello its me aman");
//     res.end();//this is for ending our response
// });
// server.listen(7689);//this will be the arbitrary port
// // go to chrome and search http:7689 sure that your node sixth.js is running in your terminal



// what if we want that if user goes on about section that different page should be render

const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('its home page');
    }
    if(req.url==='/about'){
        res.end('its about page');
    }
    //this is for when he is entering out of the our url
    res.end('<h1>oops!</h1>');
})
server.listen(7687);