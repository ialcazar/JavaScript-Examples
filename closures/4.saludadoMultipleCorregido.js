/*
Saludador múltiple: Modificar la función anterior, ahora puede recibir un array de nombres y 
devuelve un array de funciones. Cada una de estas funciones saludará a la persona correspondiente según el orden del array.
Test: var saludos=crearSaludo(["Pepe", "María"]); saludos[0](); saludos[1]() imprimirá 
en la consola Hola Pepe y Hola María en líneas separadas
*/
/* A continuación la solución al problema anterior sacando la función fuera del bucle
*/
function componerSaludo(nombre){
    return function(){ return "Hola "+nombre};
}


function crearSaludo(param){
    	var param = (Array.isArray(param))?param:[];
      
        
        
        var result = [];
        for(var i=0,len = param.length;i<len;i++){
            if(typeof param[i] != 'undefined'){
               result[i] = componerSaludo(param[i]);
            }
        }
        return (result.length==0)?undefined:result;
      
}