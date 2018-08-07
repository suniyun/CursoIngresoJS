function mostrar()
{
    var nota;
    var sexo;
    var contAlumnos = 0;
    var acumNotas = 0;
    var min = 10;
    var max = 0;
    var notasVarones = 0;
    var promedio;
    var sexoNotaBaja;

    while(contAlumnos < 5){
        contAlumnos++;

        nota = prompt("Ingrese la nota.");
        nota = parseInt(nota);

        sexo = prompt("Ingrese el sexo.");

        while(nota < 0 || nota > 10 || isNaN(nota)){
            nota = prompt("Ingrese una nota valida.");
            nota = parseInt(nota);

        } acumNotas = acumNotas + nota;

        while(sexo != "f" && sexo != "m"){
            sexo = prompt("Ingrese un sexo valido.");

        } if(nota < 6 && sexo == "m"){
            notasVarones++;

        } if (nota < min){
            min = nota;
            sexoNotaBaja = sexo;
        }

    } promedio = acumNotas / contAlumnos;

    alert("Promedio total: " + promedio + " Nota más baja y el sexo: " + min + ", " + sexoNotaBaja 
    + " Cantidad de varones con nota mayor a 6 " + notasVarones);


}
