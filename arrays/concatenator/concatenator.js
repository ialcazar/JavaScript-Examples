var params;
function concatenate(parameters){
    var result = "";

    params = parameters || [ ];

    if(hasElements()){
        result = createString();
    }  
    return result;
}

function hasElements(){
    return params.length>0;
}

function createString(){
    var res = "";
    for(var i=0;i<params.length;i++){
            res += params[i];
            if(isLastParam(i)){
                res+=",";
            }
    }  
    return res;
}
function isLastParam(p1){
    return (p1<params.length-1);
}


// TEST
console.group("Given an empty param");
    console.assert("" === concatenate(),"Then returns empty String");
console.groupEnd();

console.group("Given an array with zero length ");
    console.assert("" === concatenate([]),"Then returns empty String");
console.groupEnd();


console.group("Given an array with strings");
    console.assert("hola" === concatenate(["hola"]),"Then returns 'hola'");
    console.assert("hola,que,tal" === concatenate(["hola","que","tal"]),"Then returns 'hola,que,tal'");
console.groupEnd();

console.group("Given an array with array elements");
     console.assert("" === concatenate([[]]),"Then returns empty String");
     console.assert("hola" === concatenate([["hola"]]),"Then returns 'hola'");
     console.debug(concatenate([["hola","soy","luis"]]));
     console.assert("hola,soy,luis" === concatenate([["hola","soy","luis"]]),"Then returns 'hola,soy,luis'");
console.groupEnd();

console.group("Given an array with array and string elements");
      console.assert("hola,soy,luis" === concatenate(["hola",["soy","luis"]]),"Then returns 'hola,soy,luis'");
      console.assert("hola,soy,luis,y,estoy,bien" === concatenate(["hola",["soy","luis"],"y","estoy","bien"]),"Then returns 'hola,soy,luis,y,estoy,bien'");
console.groupEnd();

console.group("Given an array with arrays of arrays and string elements");
    console.assert("hola,soy,juan,fernandez,y,no,tengo,dinero" === concatenate(["hola", ["soy", ["juan", "fernandez"] ], "y", ["no", "tengo", ["dinero"] ] ]),"Then returns 'hola,soy,juan,fernandez,y,no,tengo,dinero'");
    console.debug(concatenate(["hola", ["soy", ["juan", "fernandez"] ], "y", ["no", "tengo", ["dinero"] ] ]));
console.groupEnd();
