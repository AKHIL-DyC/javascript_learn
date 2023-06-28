let n=[1,2,5,7];

let p=n.toString()//converts array into a string
console.log(p)

let q=n.join("-")//joins the element with whatever is written in " "
console.log(q)

//to add element to array
n.push(9)//pushes the value inside()into last position of array
console.log(n)
n.unshift(45)//pushes the value inside()into the first position
console.log(n)

//to remove elements of array
let r=n.pop()//pops out the last element 
console.log(n)//gives the array after popping the last element that is original array is effected
console.log(r)//gives the poped element 

let s=n.shift()//pops out the first element
console.log(n)//gives the after popping the first element that is original array is effected
console.log(s)//gives the popped element

delete n[1]//removes the the element with index [x]that is x+1 th element
console.log(n)//array length is not changed <empty item > is printed

//To add 2 array
let m=[12,97,5,1,16,19]
let new_added_array=n.concat(m)
console.log(new_added_array)//the old arrays are unaffected

//to sort an array
m.sort()//sorts the array in alphabetic order,not in increasing order
console.log(m)//original array is affected

let compare=(a,b)=>{return a-b}//to sort an array in ascnding order ,(b-a)for descending
m.sort(compare)
console.log(m)

//to remove some element and add some other
m.splice(2,3,102,106,905,786)
console.log(m)

//slice same as of string,reverse()reverses the array elements 