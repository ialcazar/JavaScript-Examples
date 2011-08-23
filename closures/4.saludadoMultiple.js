/*
Saludador múltiple: Modificar la función anterior, ahora puede recibir un array de nombres y 
devuelve un array de funciones. Cada una de estas funciones saludará a la persona correspondiente según el orden del array.
Test: var saludos=crearSaludo(["Pepe", "María"]); saludos[0](); saludos[1]() imprimirá 
en la consola Hola Pepe y Hola María en líneas separadas
*/
/* Tiene un problema y es que parece que pudiera funcionar pero devuelve siempre: "Hola undefined".
   Es un problema de las Closures al crear la función dentro del bucle.
*/
function crearSaludo(param){
    var param = (Array.isArray(param))?param:[];
      
        var len = param.length;
        
        var result = [];
        for(var i=0;i<len;i++){
            if(typeof param[i] != 'undefined'){
               result[i] = function(){ return "Hola "+param[i]};
            }
        }
        return (result.length==0)?undefined:result;
      
}