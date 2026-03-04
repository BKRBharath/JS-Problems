// const str = "bharath";

// console.log(str.split("").reverse().join(""));
const str = "bharath";

function reverse(s){
    let rev = "";
    for(let i = s.length -1; i >= 0; i--){
        rev += s[i];
    }
    return rev;
}
console.log(reverse(str));