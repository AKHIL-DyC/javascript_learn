function hello(){
    let p=new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there"),2000
        })
    });
    return p;
}
console.log(hello());
async function main(){
    const value=await hello();
    console.log(value);
}
main();
console.log("last written log");