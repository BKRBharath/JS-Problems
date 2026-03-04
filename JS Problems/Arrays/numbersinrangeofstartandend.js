const start = 10;
const end = 100;


function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

function numbersInRange(start, end) {
    const result = [];  
    for (let i = start; i <= end; i++) {
        if(i%7 == 0 && i%5 != 0) {
            result.push(i);

        }
        
    }
    return result;
}
console.log(numbersInRange(start, end)); 