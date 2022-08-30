//program to find the factorial of all prime numbers between a given range. find the values for numbers 1-100
var number = 100;
var isPrime;
for(let i=2; i<=number; i++){
    for(let j=2; j<i; j++){
        if(i % j ===0){
            isPrime = 0;
            break;
        }else{
            isPrime = 1;
            break;
        }
    }
    if(isPrime === 1){
        console.log(i);
    }
}