//Arithmetic operators:

let a=5;
let b=3;
console.log("a=",a ,"& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

//Unary operators:

a=a+1;//
a--;
console.log("a=",a);

// Assignment operators:

a**=2;
console.log("a= ",a);

//Comparison Operators:

console.log("a==b",a==b);

//Logical Operator:

let cond1=a>b; //true
let cond2= b==3; //true
console.log("cond1 && cond2=",cond1&&cond2); //true

// Conditional Statement :

// if statement
let age=25;
if(age>18){
    console.log("you can vote");
}
if(age<=18){
    console.log("you cannot vote");
}

// Ternary Operator:

let result=age>=18 ? "adult" : "not adult";
console.log(result);


// Practice Question:
 // question 1
// let num=prompt("enter a number");
// if(num %5==0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num,"is not multiple of 5");
// }


// question 2
let grade;
let score=prompt("enter score");
if(score>=80 && score<=100){
    grade="A";
    console.log("obtained grade is ",grade);
}
else if(score<=70 && score>=89){
    grade="B";
    console.log("obtained grade is ",grade);
}
else if(score<=60 && score>=69){
    grade="C";
    console.log("obtained grade is ",grade);
}
else if(score<=50 && score>=59){
    grade="D";
    console.log("obtained grade is ",grade);
}
else{
    grade="E";
    console.log("obtained grade is ",grade);
}

