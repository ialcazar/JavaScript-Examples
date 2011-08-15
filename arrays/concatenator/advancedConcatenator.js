var concatenate = (function(){
    //Private properties
    var params;
    
    //Private functions
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

    function isArray(arr){
       if(!Array.isArray){
           Object.prototype.isArray = function(){
                return Object.prototype.toString.call(arg) === '[object Array]';
           }
        }

    }
    
    //Public
    return function (parameters){
        var result = "";
        params = parameters && Array.isArray(parameters)?parameters:[ ];
    
        if(hasElements()){
            result = createString();
        }  
        return result;
    }
})();
