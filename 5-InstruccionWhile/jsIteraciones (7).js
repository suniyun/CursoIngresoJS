function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var suma = 0;

	while(resputa == 'si'){
		contador++;

		acumulador = prompt("Ingrese un número.");
		acumulador = parseInt(acumulador);

		suma = suma + acumulador;

		repuesta = confirm("Continuar?");
		
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN