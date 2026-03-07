const string = "madam";
function ispalindrome(s){
    let reversedstr = "";

    for(let i = s.length -1 ; i >=0 ; i--){
        reversedstr += s[i];
        if (string == reversedstr){
            return "palindrome";
        }
    }
    return "not a palindrome";
}
console.log(ispalindrome(string));