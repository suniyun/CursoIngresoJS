function mostrar()
{
    var numero1 = prompt("Ingrese el primer numero.");
    numero1 = parseInt(numero1);

    var numero2 = prompt("Ingrese el segundo numero.");
    numero2 = parseInt(numero2);

    var suma = numero1 + numero2;
    var resultado;

    if(numero1 == numero2){
        alert("Su resultado es " + numero1 + ", " + numero2);


    } if(numero1 > numero2){
        resultado = numero1 - numero2;
        alert("Su resultado es " + resultado);

    } if(numero1 < numero2){
        resultado = numero1 + numero2;
        alert("Su numero es " + resultado);

    } if (suma > 10){
        alert("La suma es de " + suma + " y supero el 10.");

    }

}
