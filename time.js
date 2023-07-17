//for finding time to execute a task

console.time("for loop")
for (let index = 0; index < 500; index++) {
    if(index==499){
        console.log("done")
    }
}
console.timeEnd("for loop")
let i=0
console.time("while loop")
while (i<500) {
    if(i==499){
        console.log("done")
    }
    i++
}
console.timeEnd("while loop")