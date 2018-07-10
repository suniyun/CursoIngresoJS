
function mostrar()
{   
    var base
    var altura
    var superficie
    var perimetro

    base = prompt("Ingrese la base");
    altura = prompt("Ingrese la altura");

    base = parseInt(base);
    altura = parseInt(altura);

    superficie = (base * altura)/2;
    superficie = parseInt(superficie);

    perimetro = base * 3;
    perimetro = parseInt(perimetro);

    alert("La superficie es de " + superficie + " y el perimetro es " + perimetro);

}
