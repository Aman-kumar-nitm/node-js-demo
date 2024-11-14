const secret="super secret";
//try to secure secret not to share with anyone
const john='john';
const peter='peter';
console.log(module);

//module ke export mein jo kuch bhi daalenge wo kahin bhi excess kar sakte hain so try to share minimum
    module.exports={john,peter};
//now it will be accessible to every file