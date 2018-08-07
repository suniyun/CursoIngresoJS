function mostrar()
{
    var libroNombre;
    var cantDePaginas;
    var cantDeVentas;
    var libroTema;
    var rta = "si";
    var paginasPares = 0;
    var paginasImpares = 0;
    var cantceroVentas = 0;
    var promedioventas;
    var pagProgramacion = 0;
    var acumVentas = 0;
    var cont = 0;

    while(rta != "no"){
        cont++;

        libroNombre = prompt("Ingrese el nombre del libro.");

        cantDePaginas = prompt("Ingrese la cantidad de páginas.");
        cantDePaginas = parseInt(cantDePaginas);

        cantDeVentas = prompt("Ingrese la cantidad de ventas.");
        cantDeVentas = parseInt(cantDeVentas);

        libroTema = prompt("Ingrese el tema (Robotica, programacion, patrones o base de datos).");

        while(cantDeVentas < 0 || isNaN(cantDeVentas)){
            cantDeVentas = prompt("Ingrese una cantidad de ventas valida.");
            cantDeVentas = parseInt(cantDeVentas);

        }  acumVentas = acumVentas + ventas;

        while(libroTema != "robotica" && libroTema != "programacion" && libroTema != "patrones" && libroTema != "base de datos"){
            libroTema = prompt("Ingrese un tema valido (Robotica, programacion, patrones o base de datos).");

        } if(cantDePaginas % 2  == 0){
            paginasPares++;

        } else{
            paginasImpares++;

        } if(cantDeVentas == 0){
            cantceroVentas++;

        } if(libroTema == "Programacion"){
            pagProgramacion = pagProgramacion + cantDePaginas;
            
        } 

    } promedio = acumVentas / cont;

    document.write("Cantidad de libros con paginas pares: " + paginasPares + "<br>" + "Cantidad de libros con paginas impares: " + paginasImpares + "<br>"
    + "Cantidad de Cero Ventas: " + cantceroVentas + "<br>" + "El promedio de todas las ventas ingresadas: " + promedio + "<br>"
    + "La suma de todas las paginas de los libros de Programacion: " + pagProgramacion);


    

}
