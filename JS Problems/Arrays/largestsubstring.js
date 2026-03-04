const str = "abcabcbb";

function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }
        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}
console.log(longestSubstring(str)); // Output: 3 (the longest substring is "abc")