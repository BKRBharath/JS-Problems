const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8];
function removeduplicatess(arr){
    let unique = [];
    for (let i = 0; i <arr.length; i++){
        if (arr.indexOf(arr[i]) === i){
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeduplicatess(arr));