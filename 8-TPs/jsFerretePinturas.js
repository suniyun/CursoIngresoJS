/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
    var Centigrados;

    Fahrenheit = document.getElementById("Temperatura").value;

    Fahrenheit = parseInt(Fahrenheit);

    Centigrados = Fahrenheit - 32/1,8;

    alert(Fahrenheit + " Fahrenheit son " + Centigrados + " Centigrados");
    

}

function CentigradosFahrenheit () 
{
    var fahrenheit;
    var centigrados;

    centigrados = document.getElementById("Temperatura").value;

    centigrados = parseInt(centigrados);

    fahrenheit= centigrados + 32*1,8;

    alert(centigrados + " Centigrados son " + fahrenheit + " Fahrenheit");

    
}
