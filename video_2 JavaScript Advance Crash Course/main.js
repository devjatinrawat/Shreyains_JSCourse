




// Var Example ✅
function abcd(){
    for(var i = 1 ; i < 12 ; i++){
        console.log(i);
    }

    console.log(i);
}


// Let Example ✅
function abcde(){
    for(let j = 1 ; j < 12 ; j++){
        console.log(j);
    }
    // let is braces scoped yanni katam ❌
    console.log(j);
}


abcd();
abcde();

// For window check ✅
var a = 10;
let b = 20;
