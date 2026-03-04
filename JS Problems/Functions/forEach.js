function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
const numbers = [1, 2, 3, 4, 5];
forEach(numbers, function(num) {
    console.log(num * 2);
});
