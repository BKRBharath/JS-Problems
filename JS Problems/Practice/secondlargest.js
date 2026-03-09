function secondlargest(arr){
    let largest = arr[0];
    let secondLargest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

const arr = [1, 2, 3, 4, 5];
console.log(secondlargest(arr));