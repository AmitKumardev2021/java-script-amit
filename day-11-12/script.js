// alert("hi amit once again WELCOME");

// let age_info = prompt("Amit please do give your age.",27);

// console.log(age_info);

// if (age_info != null ) {
//   document.write(`your age is ${age_info}`);
// } else {
//   document.write(`age filed is blank`);
// }



//confirm function 


// let responce = confirm('Are you sure to delete this item ?');

// if(responce)
// {
// document.write("Deleted")
// }
// else{
// document.write('Not Deleted')
// }


// typeof  opertaor

// let pop = "yello" ;
// console.log('this is of '+ typeof pop +" type");


// let change = Number(pop);
// console.log(change);
// console.log(typeof change);

//string 


// let name ="Amit '\\' kumar";
// console.log(name[2]);


// let nam1 ="Amit";
// let nam2 ="kumar";

// let tri =nam2.trimEnd()

// console.log(nam1.concat(" ",nam2));
// console.log(tri);



// day-12
// arrays

// let book = ["Hindi_subject","Comuter_Science","Math_Subject","English_subject"];

// book.push("Sanskrit_subject");
// // book.pop();
// // book.shift();
// // book.shift();
// // book.splice(1,3);

// let findero = book.indexOf("Math_Subject");
// console.log("The index value  " +findero);

// //using for loop
// for(let i = 0 ; i<book.length;i++)
// {
// console.log(book[i]);
// }

// console.log(" ");
// console.log(book);


// string also behave like array

// let listo =new Array("hindi","math","sanskrit","english","social studies");

// // let liston =new Array("rohan","sohan","mohan","harish","kartik","ganesh");

// // let my_name = "this is Amit who is talking to you computer.";

// // let break_me = listo.join('  ');

// // let plus_me = listo.concat(liston);
// // console.log(plus_me);
// // console.log(break_me);

// listo.forEach(myvalue);

// function myvalue(amit){
//     console.log(amit);
// }



// function 


// function multiply(num){

//     for (let i = 1; i <=10; i++) {

//         console.log(`${num} x ${i} = ${i*num}`);
//         document.write(`${num} x ${i} = ${i*num}`);
//         document.write("<br>");
        
//     }
// }
// multiply(2);
// document.write("<br>")
// multiply(3);
// document.write("<br>")
// multiply(4);
// document.write("<br>")
// multiply(5);
// document.write("<br>")
// multiply(6);




// global variable 

// let car = "Audi";  // this is global vairable

// function tito(){
//     let car2 = "BMW"; //under fuction variable declare it is local variable 
// console.log(car2);
// document.write(car2);
// document.write("<br> <br>");
// document.write(car);



// }

// tito();


//annonymus function (which do not have name)

//decalare this function in variable like this 


// let it = setTimeout( function () {        // this is also aplicable
//     console.log("Hi Amit function");
//     document.write("I am present as per your demand")
//    },3000);


// // it();
// ( function (){
//     console.log("Hello world");

//     alert("hi Amit"); 
// })();


(function(){
    console.log("hi amit again2");
})();

