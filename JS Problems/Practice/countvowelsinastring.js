const str = "hello world";
function vowelscount(s){
    let vowels = 'aeiouAEIOU';
    let vowelstr = '';

    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            vowelstr += s[i];
        }
    }
    return vowelstr;
}

console.log(vowelscount(str));