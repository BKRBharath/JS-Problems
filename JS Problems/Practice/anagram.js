// function isAnagram(str1, str2) {
//     str1 = str1.toLowerCase().replace(/\s/g, "");
//     str2 = str2.toLowerCase().replace(/\s/g, "");

//     return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(isAnagram("listen", "silentt"));
// console.log(isAnagram("hello world", "world hello"));
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, "");
    str2 = str2.toLowerCase().replace(/\s/g, "");

    if (str1.length !== str2.length) return false;

    let count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello world", "world hello"));