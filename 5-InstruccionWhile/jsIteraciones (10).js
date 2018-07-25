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

document.write(<br>acumuladorN</br><br>acumuladorP</br><br>contadorP</br><br>contadorN</br><br>contadorPar</br><br>promedioP</br><br>promedioN</br><br>diferencia</br>

}

//FIN DE LA FUNCIÓN