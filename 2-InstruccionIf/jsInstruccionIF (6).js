function mostrar()
{
//tomo la edad 
var edad = document.getElementById("edad").value;

if (edad > 17){
    alert("Usted es mayor de edad");
}
else {
    if(edad < 13){
        alert("Usted es niño");
    }
    else{
        alert("Usted es adolescente");
}
}

}//FIN DE LA FUNCIÓN