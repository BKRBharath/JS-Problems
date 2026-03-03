// Sumofarrayelements
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// Find duplicates in array

const arr1 = [1, 2, 3, 2, 2, 1, 3, 2, 3, 4, 5];

const duplicates = new Set();

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] === arr1[j]) {
            duplicates.add(arr1[i]);
            break; // stop checking same element again
        }
    }
}

console.log([...duplicates]);

// twosum

let arr2 = [2, 8, 7, 11, 15];
let target = 9;
let map = new Map();

for (let i = 0; i < arr2.length; i++) {
    let summ = target - arr2[i];
    if (map.has(summ)) {
        console.log([map.get(summ), i]);
    }
    map.set(arr2[i], i);
}

// sumofevennumbers & oddnumbers
let arr3 = [1, 2, 3, 4, 5, 6];
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        evenSum += arr3[i];
    }
    else{
        oddSum += arr3[i];
    }
    }
console.log(evenSum);
console.log(oddSum);

// calculate average of array elements
let arr4 = [1,2,4,3,6,7,4,8];
let total = 0;
for (let i = 0; i <arr4.length; i++){
    total += arr4[i];
}
console.log(total/arr4.length);

// Find largest and smallest number in an array
let arr5 = [34, 12, 5, 67, 23, 89, 2];
let largest = arr5[0];
let smallest = arr5[0]; 
for (let i = 1; i < arr5.length; i++) {
    if (arr5[i] > largest) {
        largest = arr5[i];
    }
    if (arr5[i] < smallest) {
        smallest = arr5[i];
    }               
}
console.log("Largest number is: " + largest);
console.log("Smallest number is: " + smallest);