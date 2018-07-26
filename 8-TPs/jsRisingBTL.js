/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var sexo = prompt("Ingrese su sexo (F ó M).");
    var edad = prompt ("Ingrese su edad.");
    var estadoCivil = prompt ("Ingrese su estado civil (1 para soltero, 2 para casado, 3 para divorciado, 4 para viudo).");
    var sueldoBruto = prompt ("Ingrese su sueldo bruto.");
    var legajo = prompt ("Ingrese su legajo.");
    var nacionalidad = prompt("Ingrese su nacionalidad.");

    switch (sexo){
        case "f":
            document.getElementById("Sexo").value = sexo;
        break;
        case "m":
            document.getElementById("Sexo").value = sexo;
        break;
        
    } switch(edad){
        case (edad > 18):
            document.getElementById("Edad").value = edad;
        break;
        case (edad < 90):
            document.getElementById("Edad").value = edad;
        break;

    } switch (estadoCivil){
        case 1:
        case 2:
        case 3:
        case 4:
            document.getElementById("EstadoCivil").value = estadoCivil;
        break;

    } switch (sueldoBruto){
        case (sueldoBruto > 8000):
            document.getElementById("Sueldo").value = sueldoBruto;
        break;
            
    } switch (legajo){
        case (legajo < 1000):
            document.getElementById("Legajo").value = legajo;
        break;
        case (legajo > 9999):
            document.getElementById("Legajo").value = legajo;
        break;

    } switch (nacionalidad){
        case "A": 
            document.getElementById("Nacionalidad").value = nacionalidad;
        break;
        case "E":
            document.getElementById("Nacionalidad").value = nacionalidad;
        break;
        case "N":
            document.getElementById("Nacionalidad").value = nacionalidad;
        break;
        }

}


