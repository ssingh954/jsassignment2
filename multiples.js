//JavaScript program to find the sum of the multiples of 3 and 5 under 1000
let sum = 0;
for (let x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
