function mostrar()
{
    var num;
    var letra;
    var rta = "si";
    var cont = 0;
    var acumNumerosPares = 0;
    var acumNumerosImpares = 0;
    var acumCeros = 0;
    var promedioPositivo;
    var negativo = 0;
    var positivo = 0;
    var min = 100;
    var letraMin;
    var max = -100;
    var letraMax;
    var contNum = 0;
    var sumaNegativos;

    while(rta != "no"){
        cont++;

        num = prompt("Ingrese un numero.");
        num = parseInt(num);
        
        letra = prompt("Ingrese una letra.");

        while(num < -100 || num > 100 || isNaN(num)){
            num = prompt("Ingrese un numero valido.");
            num = parseInt(num);

           contNum++

        } if(num % 2 == 0){
            acumNumerosPares++

        } else{
            acumNumerosImpares++

        } if(num == 0){
            acumCeros++

        } if(num < min){
            min = num;
            letraMin = letra;

        } else if(num > max){
            max = num;
            letraMax = letra;

        } if(num < 0){
            negativo = negativo + num;

        } else{
            positivo = positivo + num;
        }
         rta = prompt("Desea Ingresar otro numero?");

    } 
    
    promedioPositivo = positivo / cont;
    sumaNegativos = negativo + cont;

    document.write("Cantidad numeros pares: " + acumNumerosPares + "<br>" + "Cantidad de numeros impares: " + acumNumerosImpares + "<br>" 
    + "Cantidad de ceros: " + acumCeros + "<br>" + "El promedio de los positivos ingresados: " + promedioPositivo + "<br>" 
    + "La suma de todos los negativos: " + sumaNegativos + "<br>" + "El numero y la letra del minimo: " + min + ", " + letraMin + "<br>"
    + "El numero y letra del maximo: " + max + ", " + letraMax + "<br>");
 
}
