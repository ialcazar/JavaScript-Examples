function map(arr,f){
    	var arr = (Array.isArray(arr))?arr:[];
      
        var result = [];
        for(var i=0,len=arr.length;i<len;i++){
            result.push(f(arr[i]));

			//Por qué esto no funciona?
			//f.apply(null,arr[i]);
           
        }
        
    return result;
      
}