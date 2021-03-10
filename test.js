function mathArray(array){
let sum = 0;
let mul = 1;
    let arr = document.getElementById('array').value;
    console.log(arr)
    let realArr = arr.split(',');
    for (let index=0; index < realArr.length; index++){
        realArr[index]=parseInt(realArr[index]);
        sum += realArr[index];
        mul *= realArr[index];
    }
    console.log(sum);
    console.log(mul);
    let outputsum = document.getElementById('outputsum');
    outputsum.innerHTML=sum;
    let outputmul = document.getElementById('outputmul');
    outputmul.innerHTML=mul;
}