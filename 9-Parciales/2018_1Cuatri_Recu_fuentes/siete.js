function mostrar()
{
    var nota;
    var sexo;
    var edad;
    var cont = 0;
    var acumNotas = 0;
    var promedioTotal;
    var min = 10;
    var sexoMin;
    var max = 0;
    var varonesMayores = 0;
    var edadjoven = 100;
    var notaPrimeraMujer;
    var edadPrimeraMujer;
    var sexojoven;
    var notajoven;
    var contMujeres = 0;
    var bandera = true;  

    while(contAlumnos < 5){
        cont++;

        nota = prompt("Ingrese la nota.");
        nota = parseInt(nota);

        sexo = prompt("Ingrese el sexo.");
        sexo.toLowerCase();

        edad = prompt("Ingrese la edad.");
        edad = parseInt(edad);

        while(nota < 0 || nota > 10 || isNaN(nota)){
        nota = prompt("Ingrese una nota valida.");
        nota = parseInt(nota);

        } acumNotas = acumNotas + notas; 

         while(sexo != "f" && sexo != "m"){
            sexo = prompt("Ingrese su sexo (f ó m).");
            sexo.toLowerCase();

        } if(nota < min){
            min = nota;
            sexoMin = sexo;
            
        } if(nota > max){
            max = nota;

        } if(sexo == "m" && edad > 18 && nota >= 6){
            varonesMayores++;

        } if(edad < edadjoven){
            edadjoven = edad;
            sexojoven = sexo;
            notajoven = nota;

        } if(sexo == "f"){
            contMujeres++

        } if(sexo == "f" && bandera == true){
            bandera = false;
            notaPrimeraMujer = nota;
            edadPrimeraMujer = edad;

        } else if(cont == 5 && contMujeres == 0){
            notaPrimeraMujer = "No hay mujeres.";
            edadPrimeraMujer = "No hay mujeres.";

        } 

        } promedioTotal = acumNotas / cont;

        document.write("Promedio de notas total: " + promedioTotal + "<br>" + "La nota más baja y su sexo: " + min + ", " + sexoMin + "<br>"
        + "Cantidad de hombres mayores con una nota mayor o igual a 6: " + varonesMayores + "<br>" + "El sexo y la nota del más joven: " + sexojoven + ", " 
        + notajoven + "<br>" + "La edad y la nota de la primera mujer ingresada: " + notaPrimeraMujer + ", " + edadPrimeraMujer);
    
}
