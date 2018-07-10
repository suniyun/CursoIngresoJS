function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notas = Math.floor(Math.random()*(11-1))+1;

	if(notas >= 9){
		alert("Excelente");
	}
	else if (notas > 4){
		alert("Aprobó");
	}
	else {
		alert("Vamos, la proxima se puede");
	}

	

}//FIN DE LA FUNCIÓN