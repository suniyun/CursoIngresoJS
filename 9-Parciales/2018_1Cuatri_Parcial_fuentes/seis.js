function mostrar()
{
    var hora = document.getElementById("laHora").value;
    var msg;
    var msgAdicional = "";

    switch(hora){
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            msg = "Es de mañana.";
        break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
            msg = "Es de tarde.";
        break;
        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
            msg = "Es de noche.";
        break;
        default:
            msg = "La hora ingresada no es valida.";
        break;

    } if(hora < "24"){
        msgAdicional = "A dormir.";

    } alert(msg + msgAdicional);



}
