let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+ "from Apna College Students";

let divs=document.querySelectorAll(".box");
console.log(divs);

//  AAM Zindagi:

divs[0].innerText="vikash";
divs[1].innerText="chhaya";
divs[2].innerText="made for each other";

// Modern JS Zindagi:

let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}