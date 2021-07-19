// dom manipulation

let emo = document.getElementById("click");
console.log(emo);


let emoclass = document.getElementsByClassName("container");
console.log(emoclass);

emoclass[0].style.background = "silver";
emoclass[0].classList.add("bg-primary");


// Event in javascript
function clicked(){
    console.log("Amit Clicked this button");
}

window.onload = function(){
    console.log("the page was loaded");
}