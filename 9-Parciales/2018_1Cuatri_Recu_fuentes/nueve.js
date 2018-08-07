function mostrar()
{
    var rta = "si";
    var nombre;
    var peso;
    var temperatura;
    var temperaturaPar = 0;
    var pesoMin = 1000;
    var pesoMax = 1;
    var temperaturaMax = -30;
    var temperaturaMin = 30;
    var cont = 0;
    var promedioPeso;
    var acumPeso = 0;
    var nombreMax;
    var animalesTemperaturaBaja = 0;
    var pesomaxTemperaturaBaja = 0;
    var pesominTemperaturaBaja = 0;

    while(rta != "no"){

        nombre = prompt("Ingrese el nombre del animal.");

        peso = prompt("Ingrese el peso del animal.");
        peso = parseInt(peso);

        temperatura = prompt("Ingrese la temperatura del hábitat.");
        temperatura = parseInt(temperatura);

        while(peso < 1 || peso > 1000 || isNaN(peso)){
            peso = prompt("Ingrese un peso valido (entre 1 y 1000).");
            peso = parseInt(peso);

        } acumPeso = acumPeso + peso;

        while(temperatura < -30 || temperatura > 30){
            temperatura = prompt("Ingrese una temperatura valida (entre -30 y 30)");
            temperatura = parseInt(temperatura);

        } if(temperatura % 2 == 0){
            temperaturaPar++

        } if(peso > max){
            max = peso;
            nombreMax = nombre;
            temperaturaMax = temperatura;

        } if(temperatura < 0){
            animalesTemperaturaBaja++;

        } if(peso > max && temperatura < 0){
            pesomaxTemperaturaBaja++;

        } else if (peso < min && temperatura < 0){
            pesominTemperaturaBaja++;

        }

    } promedioPeso = acumPeso / cont;
    
    document.write("Cantidad de temperaturas pares: " + temperaturaPar + "<br>" + "El nombre y la temperatura del animal mas pesado: " + nombreMax + ", "
    + temperaturaMax + "<br>" + "Cantidad de animales que viven en -0 grados: " + animalesTemperaturaBaja + "<br>" + "Promedio del peso de todos los animales: "
    + promedioPeso + "<br>" + "El peso maximo de todos los animales que viven en temperaturas bajo cero: " + pesomaxTemperaturaBaja + "<br>"
    + "El peso minimo de los animales que viven en temperaturas bajo cero: " + pesominTemperaturaBaja);
}
