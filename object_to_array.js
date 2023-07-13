const marks ={
    harry:34,
    akhil:66,
    subha:99,
}
console.table(marks)//puts objects in a table
console.log(Object.keys(marks))//Object.keys(objname) makes the object into an array
console.log(Object.keys(marks).length)//arrayname.length gives the length of the array
console.log(Object.keys(marks)[1])//arrayname[elementnumber]
console.log(marks[Object.keys(marks)[1]])//for getting mark of 2nd element

//using for loop
for (let index = 0; index < (Object.keys(marks).length); index++) {
    console.log("the marks of "+(Object.keys(marks)[index])+"is"+ marks[Object.keys(marks)[index]])
}


//for in loop
for(let i in marks){
    //console.log(i)
    console.log("the marks of "+i +" is "+marks[i])
}

