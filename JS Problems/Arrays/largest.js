const arr = [1,53,66,54,77,45,34,88];
let largest = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }   
}
console.log(largest);