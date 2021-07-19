// const animal = ['dog','cat','rabit','pig'];
// animal.push("chicken");
// console.log(animal);


// puch method add at last of array 


// unshift can add element first in array

// animal.unshift("goat");
// console.log(animal);


// console.log(animal.pop());
// console.log(animal);

// console.log(animal.shift());
// console.log(animal);



//challenge time

//add december month in array in last 

const years = ['january','ferbary','march','april','june','july'];

// years.push("december");
// console.log(years);

// console.log(years.splice('december'));
// console.log(years);

// const newmonth = years.splice(years.length,0,"December");
// console.log(newmonth);

// const indexnumber = years.indexOf("january");
// if(indexnumber != -1){
//     years.splice(indexnumber,1,'Amit birthday');
//     console.log(years);
// }else{
//     console.log('data is not present so action not permit');
// }


// to delete specific element from array

// const indexnumber = years.indexOf("january");
// if(indexnumber != -1){
//     years.splice(indexnumber,1);  //do not mention any string detail so that it can not update
//     console.log(years);
// }else{
//     console.log('data is not present so action not permit');
// }



//to delete after the selected element

const indexnumber = years.indexOf("january");
if(indexnumber != -1){
    years.splice(indexnumber,Infinity); //rest of the selected elemt all delete at infinit key word
    console.log(years);
}else{
    console.log('data is not present so action not permit');
}