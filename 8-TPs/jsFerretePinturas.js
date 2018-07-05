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
    var Fahrenheit;
    var Centigrados;

    Centigrados = document.getElementById("Temperatura").value;

    Centigrados = parseInt(Centigrados);

    Fahrenheit= Centigrados + 32*1,8;

    alert(Centigrados + " Centigrados son " + Fahrenheit + " Fahrenheit");

    
}
