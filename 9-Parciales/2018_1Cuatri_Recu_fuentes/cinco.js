function mostrar()
{
    var dias = prompt("Ingrese un día.");

    switch(dias){
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            alert("A trabajar.");
        case "Sabado":
        case "Domingo":
            alert("Buen finde.");
        default:
            alert("El día ingresado no es valido.");
            
    }

}
