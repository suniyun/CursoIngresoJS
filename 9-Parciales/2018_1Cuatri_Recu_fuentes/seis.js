function mostrar()
{
    var nota;

    switch(nota){
        case "0":
        case "1":
        case "2":
        case "3":
            alert("La proxima se puede.");
        break;
        case "4":
        case "5":
        case "6":
            alert("Raspando.");
            if(nota <= 5){
                alert("Debes preocuparte más.");
            }
        break;
        case "7":
        case "8":
        case "9":
        case "10":
            alert("Aprobó.");
            if(nota >= 8){
                alert("Muy bien.");

            }
        break;
        default:
            alert("La nota ingresada no es valida.");

    }
    
    

}
