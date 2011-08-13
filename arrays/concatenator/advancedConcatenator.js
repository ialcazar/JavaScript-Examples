Object.prototype.isArray = function(){
    return (this && typeof(this.push) === 'function' && typeof(this.pop) === 'function' && typeof(this.shift) === 'function');
}

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

