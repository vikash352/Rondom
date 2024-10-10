//  Sum function:
// function sum(a,b){
//     console.log(a+b);
// }

// function sum(x,y){
//     return x+y;
// }

//  Arrow function:  Used in Modern Java Script:


const arrowSum=(a,b)=>{
    console.log(a+b);
};


const arrowMul=(a,b)=>
{
    console.log(a*b);
};


// Practice Question 1:

function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
        {
            count++;
        }
    }
    console.log(count);
}

// Question 2: Arrow function

const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
        {
            count++;
        }
    }
    console.log(count);
}


// for Each loop in array:

let nums=[2,4,6,3,5];
nums.forEach((num)=>{
    console.log(num**2);
});


