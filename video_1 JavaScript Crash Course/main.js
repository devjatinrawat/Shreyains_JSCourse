




// var Examples ✅

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

var student = "aman";
var teacher = "anvit";

console.log(student , teacher);

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

const amountSavedThisMonth = 1000;
console.log(amountSavedThisMonth);
// hoisting Examples✅

// console.log(b3);
// var b3 = 10;

var b3;
console.log(b3);
b3 = 10;
console.log(b3);

var a = 12;

// banta hai 

var a;
a = 12;

function greet(name){
    var a;
    console.log(a);
    console.log("Hello " ,name);
}

greet('jatin');

// types in js Examples ✅
var a = 10;

var b = a;

var b = b + 2;

console.log(a,b);

var a = [1,2,3];

var b = [];

b = a;

b[0]  = 12;

console.log(a,b);


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


// Conditionals - if else else-if ✅
// matlab isme do hi cheezen aa skta 
// if(true)
// if(false)

// if(a > 10)

// if(a
// if b is always true if(b)

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

// loop Examples✅
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

var iterator = 10;

while(iterator > 1){
    console.log(iterator);
    iterator--;
}

var a = 12;

while(a<20){
a++;
}

function paymentGateway(name1,name2,name3){
    console.log(name1, name2 , name3);
}

paymentGateway('googlepay', 'phonepe' , 'patym' );
paymentGateway('razorpay' , 'payU' , 'instamojo' );

// function  Examples ✅
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


// arrays Examples✅

var a = [12,13];
var arr = [1,2,3,4,5,6,7];
// splice Examples ✅

// console.log(arr.splice(2,2));
// console.log(arr.splice(4,1));
// console.log(arr.splice(5,2));
// this is same as === 👇👇👇👇👇

const newArray1 = arr.splice(2,2);
console.log(newArray1);
const newArray2 = arr.splice(4,1);
console.log(newArray2);
const newArray3 = arr.splice(5,2);
console.log(newArray3);
// splice(start, deleteCount)

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
// Array Methods ✅
// For ALL Methods of Array : https://www.perplexity.ai/search/greet-jatin-function-greet-nam-0wtZeqXrQFSyiPRdJkljDg


// Objects ✅
//1) blank object 
var a = {};



//2) Filled object 
var b = {
    age : 24,
    name : "Harsh",
    email : "apnaguru2019@gmail.com",
    linkedin : "harsh",
    contact : 9023203920392932,
};

// ex musje gadhi ki saari values ko store karna hai 

var ghadi = {
    // these brand are properties
    brand : "Kenneth Cole",
    price : "16K",
    color : "silver",
    digital : false,
    kuchBolo : function(a){
        console.log(a);
    }
}

// Accessing properties and methods ✅✅
console.log(ghadi.color);
// This is prop
console.log(ghadi.kuchBolo(14));
// This is method
ghadi.digital = "Hello";

console.log(ghadi.digital);