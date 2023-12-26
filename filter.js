const names=["akhil","anjan","joseph","faraz","satya"];
function filterer(s){
    if (s.startsWith("a")){
        return true
    }
    else{
        return false
    }
}
const filtered_names=names.filter(filterer);
console.log(filtered_names);