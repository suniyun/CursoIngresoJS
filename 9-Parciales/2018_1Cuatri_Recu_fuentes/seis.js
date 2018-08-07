function mostrar()
{
    var nota;
    var msg;
    var msgAdicional = "";

    switch(nota){
        case "0":
        case "1":
        case "2":
        case "3":
            msg = "La proxima se puede.";
        break;
        case "4":
        case "5":
        case "6":
            msg = "Raspando. " ;
            if(nota <= 5){
                msgAdicional = "Debes preocuparte más.";
            }
        break;
        case "7":
        case "8":
        case "9":
        case "10":
            msg = "Aprobó.";
            if(nota >= 8){
                msgAdicional = "Muy bien.";

            }
        break;
        default:
            msg = "La nota ingresada no es valida.";

    } alert(msg + msgAdicional);
    
}
