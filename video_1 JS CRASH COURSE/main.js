

var dulha = "Lab";
var dulhan = "Labby";

console.log(dulha + " " + dulhan);

// Ex aagya aur dulha ki value badl di
var dulha = "Haramzaada";

console.log(dulha + " " + dulhan);

const dulha1 = "lab";
const dulhan1 = "labby";

console.log(dulha1 + " " + dulhan1);

// hoisting

var a = 12;

// banta hai 

var a;
a = 12;


// undefined and not defined ho gya 

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



function abcd(a,b,c){
console.log(a,b,c)
}

// ye 12 function abcd mey recieve hoga
abcd(12, 13 , 14);