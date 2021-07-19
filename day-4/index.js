

var amio = ['Amit','kumar','mohan','sohan'];

// for (var i = 0; i < amio.length; i++) {

// console.log(amio[i]);
// }

// for(let elemto in amio){           // to find array index in array  for in loop 
//     console.log(elemto);
// }


// for(let elemto of amio){           // to find array data what is inside in array for in loop 
//     console.log(elemto);
// }


//for each loop 
var amio = ['Amit','kumar','mohan','sohan'];

amio.forEach(function(element,index,array) {

    console.log("DATA : " +element+" , "+"  index is : " +index+" , "+"  array data area : " +array)
}
)
