function mostrar()
{
	//declarar contadores y variables 
	var contador=0;
	var respuesta="si";
	var numero;
	var contadorN = 0;
	var contadorP = 0;
	var contadorI = 0;
	var contadorPar = 0;
	var acumuladorN = 0;
	var acumuladorP = 0;
	var diferetencia;
	var promedioP;
	var promedioN;


	while(respuesta!="no"){
		numero = prompt(numero);
		numero = parseInt(numero);

	} while(isNaN(numero)){
		numero = prompt(numero);
		numero = parseInt(numero);

	} if(numero < 0){
		contadorN++;
		acumuladorN += numero;

	} else if(numero > 0){
		contadorP++;
		acumuladorP++;

	} if (numero % 2 == 1){
		contadorPar++

	} 
	promedioP = acumuladorP / contadorP;
	promedioN = acumuladorN / contadorN;

	diferencia = contadorP - contadorN;

	if(diferencia > 0){
		msg("Hay más positivos.");

	}else{
		msg("Hay más negativos" + diferencia);

	}

document.write(acumuladorN + "<br>" + acumuladorP + "<br>" + contadorP + "<br>");
document.write(contadorN + "<br>" + contadorPar + "<br>" + promedioP + "<br>");
document.write(promedioN + "<br>" + diferencia + "<br>");

}

//FIN DE LA FUNCIÓN