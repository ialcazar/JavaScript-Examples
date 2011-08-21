function crearSaludo(param){
    param = (typeof param == 'string')?param :undefined;
    return function(){
        var result;
        if(typeof param != 'undefined')
           result = "Hola "+ param;
        
        return result;
    };
}

console.group("Anything is a param")
    var saludo = crearSaludo(3);
    console.assert(typeof saludo() == 'undefined' ,"When param is 3, Then returns undefined");
    var saludo = crearSaludo(3.2);
    console.assert(typeof saludo() == 'undefined',"When param is 3.2, Then returns undefined");
    
     var saludo = crearSaludo(function(){});
    console.assert(typeof saludo() == 'undefined',"When param is function(){}, Then returns undefined");
console.groupEnd();


console.group("A person's name")
    var saludo = crearSaludo("");
    console.assert("Hola " == saludo() ,"When param is '', Then returns 'Hola '");
    var saludo = crearSaludo("Pepe");
    console.assert("Hola Pepe" == saludo() ,"When param is 'Pepe', Then returns 'Hola Pepe'");
     var saludo = crearSaludo("Luis");
    console.assert("Hola Luis" == saludo() ,"When param is 'Luis', Then returns 'Hola Luis'");
   
console.groupEnd();