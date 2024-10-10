// Loops in Java Script
//  1. For Loop :

for(i=1;i<=100;i++){
    console.log("Apna College");
}
console.log("loop has ended");

// Example 1: sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++)
{
    sum+=i;
}
console.log("sum=",sum);
console.log("loop has ended");

// Example 2: print 1 to 5
let count;
for(count=1;count<=5;count++)
{
    console.log(count);
}
console.log("loop has ended");

//  Example 3: Infinte Loop
// let m;
// for(m=1;m>=0;m++)
// {
//     console.log("vikash");
// }

//  2. While Loop :
let k=1;
while(k<=5)
{
    console.log("k=",k);
    k++;
}

//  3. Do While loop :
let j=1;
do{
    console.log("j=",j);
    j++;
}
while(j<=10);
{
    console.log("loop has ended");
}

//  4. for-of loop:
let str="ApnaCollege";
let size=0;
for(i of str)
{
console.log("i=",i);
size++;
}
console.log("the size of given string is :",size);

//  5. for-in loop:
let student={
    name:"Vikash Kumar Singh",
    age:20,
    cgpa:8.5,
    isPass:true,
}
for(let key in student)
{
    console.log("key=",key, "value=",student[key]);
}

//  Practice Question :
//  Question 1: all even numbers from 0 to 100
 let num;
 for(num=1;num<=100;num++)
 {
    if(num%2==0)  //even number condition
    {
        console.log("num= ",num);
    }
 }

//   Question 2:create a game where you start with any random number, guessing the number until user enter correct value.

let gameNum=25;
let userNum=prompt("Guess the game number :");
console.log(userNum);
while(userNum != gameNum)
{
userNum=prompt("you enetered wrong number . Guess again :");}
console.log("congratulations you entered the right number");
