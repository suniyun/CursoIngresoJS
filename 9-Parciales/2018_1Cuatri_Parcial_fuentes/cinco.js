function mostrar()
{
    var planeta = prompt("Ingrese un planeta");
    planeta.toLowerCase();
    
    switch(planeta){
        case "tierra":
            alert("Acá vivimos.");
        break;
        case "mercurio":
        case "venus":
        case "marte":
            alert("Acá hace más calor.");
        break;
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "plutón":
            alert("Acá hace más frio.");
        break;
        
    }


}
