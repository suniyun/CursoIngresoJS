function mostrar()
{
    var precio = prompt("Ingrese el precio");
    var descuento = prompt("Ingrese el porcentaje del descuento a aplicar");
    var preciodescontado;
    var preciofinal;

    preciodescontado = precio * descuento/100;
    preciofinal = precio - preciodescontado;

    document.getElementById("elPrecioFinal").value = preciofinal;
    
}
