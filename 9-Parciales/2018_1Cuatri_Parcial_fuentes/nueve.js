function mostrar()
{
    var marca = prompt("Ingrese la marca.");
    var peso = prompt("Ingrese el peso.");
    var temperatura = prompt("Ingrese la temperatura.");
    var temperaturaPar, temperaturaMenor = 0;
    var promedioPeso = 0;
    var pesoMax, pesoMin = 0;
    

    peso = parseInt(peso);
    temperatura = parseInt(temperatura);

    while(peso < 1 || peso > 100){
        peso = prompt("Ingrese un peso valido.");
        peso = parseInt(peso);

    } while(temperatura < -30 || temperatura > 30){
        temperatura = prompt("Ingrese una temperatura valida.");
        temperatura = parseInt(temperatura);

    } if(temperatura % 2 == 0){
        temperaturaPar++;

    } if(temperatura < 0){
        temperaturaMenor++;

    } 





}
