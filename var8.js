let arr = [1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];
function arraySumMul(array){
let sum = 0;
let mul = 1;
for(let i = 0; i < array.length; i++){
    sum += array[i];
    }
console.log(sum);
let i = 0;
while(i < array.length){
    mul *= array[i];
    i++;
    }    
console.log(mul);
}
arraySumMul(arr);