//node package manager npm
//npm global command come with node js
//npm version

//local dependency -use it only in this project
//npm i <packageName>

//try to go with local download which will work in only current project


//global dependency use it any project
//npm install-g <packageName>
//sudo install -g <packageName> (mac)


//package.json stores important info about our project/package
//manual approach create a package.json in root ,create properties etc
//npm init(step by step ,press enter to skip)
//npm init -y(everything default)


//by going to terminal if we download package.json by just clicking npm init then it will ask some question but by just going through npm init -y it will download with  default things we can change it by going into package .json now if we want to download let say lodash package then simply we will write npm i lodash and it will automatically download


const aman=require('lodash');
const items=[1,2,[3,[4,[5]]]];
//lodash has property to flatten deep array
const result=aman.flattenDeep(items);
console.log(result);
// [ 1, 2, 3, 4, 5 ]

//for pushing file on gihub first we will create gitignore for modules so that it wont go on github repo

// npm i nodemon -D to download dependencies
