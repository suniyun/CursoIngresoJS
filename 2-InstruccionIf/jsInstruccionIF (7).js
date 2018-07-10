function mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;
var estadocivil = document.getElementById("estadoCivil").value;

if (edad < 18 || estadocivil != soltero){
    alert("Usted es muy pequeño para NO estar soltero");
}

	


}//FIN DE LA FUNCIÓN