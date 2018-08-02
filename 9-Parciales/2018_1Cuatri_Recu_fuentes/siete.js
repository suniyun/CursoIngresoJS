function mostrar()
{
    var nota = prompt("Ingrese su nota.");
    var sexo = prompt("Ingrese su sexo (f ó m).");
    var edad = prompt("Ingrese su edad.");
    var promedioBajo, promedioTotal = 0;
    var varonesMayores = 0;
    var contAlumnos = 0;
    var contNotas = 0;

    nota = parseInt(nota);
    edad = parseInt(edad);
    
    while(contAlumnos < 5){
        while(nota < 0 || nota > 10 || isNaN(nota)){
        nota = prompt("Ingrese una nota valida.");
        nota = parseInt(nota);

        } while(sexo != "f" || sexo != "m"){
            sexo = prompt("Ingrese su sexo (f ó m).");

        } if(nota > 0 && nota <= 10){
            contNotas++;

        } if(edad > 0 && edad < 100 && sexo == "f" || sexo == "m"){
            contAlumnos++;
            
        } 
        
        promediototal = contNotas;
        
    } 
}
