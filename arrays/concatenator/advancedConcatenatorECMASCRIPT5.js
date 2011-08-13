//In ECMAScript 5 exists this:
//Array.isArray() 
//so I don't need to modify Array.prototype

var concatenate = (function(){
    //Private properties
    var params;
    
   
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
    
    //Public
    return function (parameters){
        var result = "";
        params = parameters && parameters.isArray()?parameters:[ ];
    
        if(hasElements()){
            result = createString();
        }  
        return result;
    }
})();


