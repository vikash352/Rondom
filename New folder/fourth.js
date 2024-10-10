//  Arrays :

// Basic Introduction:
let marks=[92,95,98,82,52];
console.log(marks);
console.log(length.marks);

let heroes=["hulk","antman","spiderman","batman","thor","shaktiman"];
console.log(heroes);

// Looping Over Array:

// 1. for loop
 for(let idx=0; idx<heroes.length;idx++)  //Standar tarika (kabhi v less than equal nhi )
 {
    console.log(heroes[idx]);
  }

//  2. for of
for(hero of heroes)
    {
        console.log(hero);
     }

     
    //  Practice Question 1:

    let m=[85,97,44,37,76,60];
    let sum=0;
    for(let value of m)
    {
         sum+=value;
        console.log(value);
    }
    let avg=sum/m.length;
    console.log(`total marks is ${sum}`);
    console.log("average marks of class is:",avg);

    // Practice Question 2:
    let prices=[250,645,300,900,50];
              // Using for of loop:

    let i=0;
    for(let val of prices)
    {
        console.log(`value at index ${i} = ${val}`);
        let offer=val/10;
        prices[i]=prices[i]-offer;
        console.log(`value after offer applied is ${prices[i]}`);
        i++;
    }

    // Using for loop:
    let items=[250,645,300,900,50];
    for( i=0;i<prices.length;i++)
    {
        let offer=items[i]/10;
        items[i]=items[i]-offer;
    }
    console.log(items);
