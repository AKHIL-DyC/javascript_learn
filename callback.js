//callback is where a a function is a parameter of another function and is called back 
function arithmetic_operation(a,b,operator){
    let answer=operator(a,b);
    return answer
}
function sum(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function division(a,b){
    return a/b;
}
function multiplication(a,b){
    return a*b;
}
let result1=arithmetic_operation(8,2,sum);
let result2=arithmetic_operation(8,2,minus);
let result3=arithmetic_operation(8,2,multiplication);
let result4=arithmetic_operation(8,2,division);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);