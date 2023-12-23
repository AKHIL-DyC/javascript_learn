//settimeout a async function
function add(a,b){
    //a=9;
    //b=8;
    console.log(a+b);
     return a+b;                               
}
//setTimeout(add,2000) if no parameter in function.
setTimeout(function(){
    add(40,60)
},2000);
console.log("hello");