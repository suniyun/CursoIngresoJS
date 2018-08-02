function mostrar()
{
    var num = prompt("Ingrese el número.");
    var contDiv = 0;

    for(var i = 1; i <= num; i++){
        if(num % i == 0){
            contDiv++
            console.log(i);
            
        }
    }




}//FIN DE LA FUNCIÓN