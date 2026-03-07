const str = "hello world";
const vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}


console.log(count);