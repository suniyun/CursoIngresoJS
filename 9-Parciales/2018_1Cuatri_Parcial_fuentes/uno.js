
function mostrar()
{
    var ancho, largo;
    var perimetro;

    ancho = prompt("Ingrese el ancho.");
    ancho = parseInt(ancho);

    largo = prompt("Ingrese el largo.");
    largo = parseInt(largo);

    perimetro = largo * ancho;

    alert("El perimetro es " + perimetro);

}
