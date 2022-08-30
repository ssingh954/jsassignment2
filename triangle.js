//Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

let a,b,c
a=60
b=60
c=60

let sum=a+b+c

let check
if(a!=0 && b!=0 && c!=0){
check = (sum== 180 && a==b && b==c && a==c) ? console.log("Triange is valid type equilateral triange") : 
(sum== 180 && a!=b && b!=c && a!=c) ? console.log("triange is valid type scalene triange") :
(sum == 180) ? console.log("triange is valid type isosceles triange") : console.log('triangel is not valid')
}
else{
  console.log("triangle is not valid")
}