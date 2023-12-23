const fs=require('fs');
function readfile(){
    console.log("inside readfile");
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data)
        })
    })
}
function printer(data){
    console.log(data);
}
a=readfile();
a.then(printer)//if a is there printer is called
console.log("this will get executed first and the promise thing is done asynchronously")