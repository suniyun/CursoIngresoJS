function mostrar()
{
    var rta = "si";
    var marca;
    var peso;
    var temperatura;
    var temperaturaPar, temperaturaMenor = 0;
    var temperaturaMax = -30;
    var temperaturaMin = 30;
    var promedioPeso;
    var pesoMax = 1;
    var pesoMin = 100;
    var marcaMax;
    var acumPeso = 0;
    var contTemperatura = 0;
    var cont = 0;

    while(rta != "no"){
        cont++;

        peso = prompt("Ingrese el peso.");
        peso = parseInt(peso);

        marca = prompt("Ingrese la marca.");

        temperatura = prompt("Ingrese la temperatura.");
        temperatura = parseInt(temperatura);

    while(peso < 1 || peso > 100 || isNaN(peso)){
        peso = prompt("Ingrese un peso valido.");
        peso = parseInt(peso);

    } acumPeso = acumPeso + peso; 
    
        while(temperatura < -30 || temperatura > 30 || isNaN(temperatura)){
        temperatura = prompt("Ingrese una temperatura valida.");
        temperatura = parseInt(temperatura);

        contTemperatura++;

    } if(temperatura % 2 == 0){
        temperaturaPar++;

    } if(temperatura < 0){
        temperaturaMenor++;

    } if(peso > pesoMax){
        pesoMax = peso;
        marcaMax = marca;

    } else{
        pesoMin = peso;

    } rta = prompt("Desea introducir otro producto?");

    } promedioPeso = acumPeso / cont;

    document.write("Cantidad de temperaturas pares: " + temperaturaPar + "<br" +  " La marca del producto mas pesado: " + marcaMax + "<br>"
    + " Cantidad de producto que se conserva a menos de 0 grados: " + temperaturaMenor + "<br>" + " El promedio del peso de todos los productos: " + promedioPeso + "<br>"
    + " El peso maximo y minimo: " + pesoMax + ", " + pesoMin);






}
