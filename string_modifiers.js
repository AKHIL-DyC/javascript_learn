let name="Akhil"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(1,3))
let newname=name.replace("il","shay")
console.log(newname)

//trim() removes white spaces

//for joining multiple string
console.log(name.concat("is a friend of ",newname," keep that in mind"))
console.log(name[2])//prints the 2 index of string similar to as of array 

//to check if a  word is included or not
const string="github is cool"
const word ="github"
console.log(string.includes(word))

//to change a string into a integer 
let amount="1000"
console.log(typeof amount)//we get type as string
amount=Number.parseInt(amount)
console.log(typeof amount)//we get the type as number