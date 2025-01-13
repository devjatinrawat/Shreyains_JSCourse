console.log(firstName);
var firstName;


// hero is not a keyword 

// for
// if()
// elseif
// else
// while
// var
// let const 


var dulha = "Lab";
var dulhan = "Labby";

console.log(dulha + " " + dulhan);

// Ex aagya aur dulha ki value badl di
var dulha = "Haramzaada";

console.log(dulha + " " + dulhan);

const dulha1 = "lab";
const dulhan1 = "labby";

console.log(dulha1 + " " + dulhan1);

// var firstName = "durgesh";
// 

firstName = "durgesh";


// hoisting

var a = 12;

// banta hai 

var a;
a = 12;


// undefined and not defined same nhi hotey!

var a = 12;

var b = a;

b = b + 2;
console.log(a,b);

var a1 = [12,13];
var b1 = a1;

b1.pop();
// pop matlab hatao toh 12 bachega 
console.log(b1 , a1);


var a2 = [1,2,3,4];

// refer reference
var b2 = a2;
b2.pop();
console.log(b2,a2);
// isliye b2 badli a2 ki bhi badl gyi.

// matlab isme do hi cheezen aa skta 
// if(true)
// if(false)

// udaran 
if(a>b){

}

if("apple"){

} 
// ✅
// yeh chalega

// if(111 > 12){

// }
// else{

// }

if(11 > 12){

}
else if(12>13){

}
else if(14>16){

}
else{

}


// for loop

// for(start ; end ; change)
// 0-10 tak print karna 

// 11111111111111
//12345678910
// change kis tarikey se aagey badega 

for(var i = 0; i < 11 ; i++){
    console.log(i);
}

// pratice
// 25 - 50

for( var i = 25 ; i < 51 ; i++){
    console.log(i);
}

var a = 12;

while(a<20){
a++;
}

function abcd(){
    // function statement
}


// parameters
function abcd(a,b,c){
console.log(a,b,c)
}

// ye 12 13 14 function abcd mey recieve hoga
abcd(12, 13 , 14);
// arguemnts


// arrays

var a = [12,13];
var arr = [1,2,3,4,5,6,7];

// pop push shift unshift

var arr1 = [1,2,3,4,5,6];
// push : ek extra member jodney ke liye hota hai push
// arr1.push(8);
// console.log(arr1);
// pop : arr se htane ke liye hota hai pop
// console.log("Pop is here!");
// arr1.pop();
// console.log(arr1);
//arr ke shuru mey hota jodney  keliye hota hai : unshift
// console.log("unshift is here!");
// arr1.unshift(0);
// console.log(arr1);
// arr se shuruvat ki value hataney ke liye hota hai : shift
// console.log("shift is here!");
// arr1.shift();
// console.log(arr1);

// splice(indexofvalue,how much)
arr1.splice(2,1);
arr1.splice(2,2);


var a = 10;

var b = a;
//real copy hogyi
b = b + 10;

console.log(a,b);

// Reference Value ka Example
let array1 = [1,2,3];
let array2 = array1;

console.log("Before Changing : ");
console.log("Array1 is : ",array1);
console.log("Array2 is : ",array2);


// let update 
array2[1] = 99;


console.log("After Changing : ");
console.log("Array1 is : ",array1);
console.log("Array2 is : ",array2);


// splice 
let shivArray = [1,2,3,4,5];

// shivArray.splice(0,3);
// shivArray.splice(2,3);
shivArray.splice(3,2);

console.log(shivArray);