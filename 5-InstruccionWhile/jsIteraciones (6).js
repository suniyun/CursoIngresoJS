function mostrar()
{

	var contador=0;
	var acumulador=0;
	var suma=0
	var promedio

	while(contador < 5){
		contador++;

		acumulador = prompt("ingrese 5 números.");
		acumulador = parseInt(acumulador);

		suma = suma + acumulador;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN