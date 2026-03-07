function reverse(s){
    let reversedstr = "";
    for(let i = s.length -1 ; i >=0; i--){
        reversedstr += s[i];
    }
    return reversedstr;
}
console.log(reverse("hello world"));