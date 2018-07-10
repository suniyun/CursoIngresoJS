function mostrar()
{
    var descuento;
    var precio; 
    var iva;
    var preciodescontado;
    var preciodescontado1;
    var preciodescontadoconiva;

    precio = prompt("Ingrese el precio");
    descuento = prompt("Ingrese el porcentaje");

    precio = parseInt(precio);
    descuento = parseInt(descuento);

    preciodescontado = precio * descuento/100;
    iva = precio * 21/100; 

    preciodescontado = parseInt(preciodescontado);
    iva = parseInt(iva);
    
    preciodescontado1 = precio - descuento;
    preciodescontado1 = parseInt(preciodescontado1);

    preciodescontadoconiva = precio + iva - descuento;
    preciodescontadoconiva = parseInt(preciodescontadoconiva);
    
    alert("El descuento es de " + preciodescontado + ", el precio con descuento es de " + preciodescontado1 + ", y el IVA a aplicar es de " + iva);
    document.getElementById("elPrecioFinal").value = preciodescontadoconiva;




}
