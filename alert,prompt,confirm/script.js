alert("learn javascript")
let a = prompt("enter your favourite number to advance")
a=Number.parseInt(a)
console.log("type of a " +(typeof a))
let write=confirm("will you learn js with consistency")
if(write){document.write("good choice,keep the consistency going..small efforts build up to big at end")}
else{document.write("bad choice,youll regret this choice")}
setTimeout(function(){let colour=prompt("enter your facvourite colour")
document.body.style.backgroundColor=colour},4000);
// Code before the delay

setTimeout(function(){
    // Code to be executed after the delay
    let input=prompt("enter the value corresponding to where you  wanna go")
    input=Number.parseInt(input)
if (input==1) {location.href="https://github.com/AKHIL-DyC"
}
if(input==2){
    location.href="https://www.linkedin.com/in/akhil-i-a-387307256/"
}
if (input==3) {
    location.href="https://www.youtube.com/channel/UCKRXJDSF63mB6s1yFlAbhhw"
}
  }, 4000); // 4000 milliseconds = 2 seconds
  
