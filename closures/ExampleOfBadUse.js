// EXAMPLE 1
// This function returns a function that always returns v 

function constfunc(v) { 
    return function() { return v; }; 
}

// Create an array of constant functions: 
var funcs = []; 
for(var i = 0; i < 10; i++) 
    funcs[i] = constfunc(i);

// The function at array element 5 returns the value 5. 
funcs[5]()	// => 5

//------------------------------------------------------------
// EXAMPLE 2
// Return an array of functions that return the values 0-9 
function constfuncs() {
    var funcs = []; 
    for(var i = 0; i < 10; i++)
        funcs[i] = function() { return i; }; 
    return funcs;
}
var funcs = constfuncs(); 
funcs[5]();	// What does this return?....OHHH always 10


// how can I work example 2 out? Creating a function f1 external to the loop

function f1(value){
	return function(){return value;};
}

function constfuncs() {
    var funcs = []; 
    for(var i = 0; i < 10; i++)
        funcs[i] = f1(i); 
    return funcs;
}
var funcs = constfuncs(); 
funcs[5]()

