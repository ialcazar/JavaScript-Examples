var concatenate = (function(){
	//Private functions
    function hasElements(){
        return params.length>0;
    }
    //Public
    return function (parameters){
        var result = "";
        params = parameters && Array.isArray(parameters)?parameters:[ ];
    
        if(hasElements()){
            result = parameters.join(",");
        }  
        return result;
    }
})();