//forEach loop
let arr=[1,2,3,4,5];
arr.forEach(element => {
    console.log(element*element)
});

//Array.from 
let name="akhil"
let arr1=Array.from(name)//for each couldnot be used for object so we use this
console.log(arr1)

//for off
for (const i of arr) {
    console.log(i)
}

//for in 
for (const key in arr) {
        console.log(key, "is index of ",arr[key])
        
    }

//map
let a= arr.map((value)=>{
    console.log(value)
    return value*10
})
console.log(a)//the new array is returned thing of the map function
//map and for each looks similiar but for each doesnt create a new array
//both map and array have 3 inputs value,index,array

//array filter method
let a1=arr.filter((value)=>{
    return value>3
})
console.log(a1)

//reduce method
let a2=arr.reduce((e1,e2)=>{//here e1 and e2 are first 2,then e1 is result e2 is third
    return e1+e2
})
console.log(a2)