//  Strings in Java Script :

let str="Vikash";
console.log(str[3]); //a

str="          apna college    ";
let newstr=str.toUpperCase();
console.log(str);
console.log(newstr);

//   trim method:  !! trim start and end white space !!

let trim=str.trim();
console.log(trim);

// slice method:  !! end wala  fianl ans me include nahi hoga !!

str="0123456";
console.log(str.slice(1,5));

// concat method : !! merge two strings !!
let str1="vikash";
let str2="kumar";
let res=str1.concat(str2); // res= str1 + str2; (in java script)
console.log(res);


//  Template Literals :
let obj={
    item: "pen",
    price: 10,
}
let output=`The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output); // The cost of pen is 10 rupees

console.log("the cost of",obj.item, "is",obj.price,"rupees"); //string method


// Practice Question:
let str4=prompt("Enter Full name without space");
let username = "@"+str4+str4.length;
console.log(username);