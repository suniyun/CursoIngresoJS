/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;
    
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    alambre = largo * ancho;

    confirm("La cantidad a usar de alambre es " + alambre);
    
}
function Circulo () 
{
    var radio
    var alambre

    radio = document.getElementById("Radio").value;

    radio = parseInt(radio);
    

    alambre = Math.PI * Math.pow(radio, 2);
    alambre = parseInt(alambre);
    

    confirm("La cantidad a usar de alambre es "+ alambre);
    
	
}
function Materiales () 
{
	var largo;
    var ancho;
    var cemento;
    var cal;

    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;

    largo=parseInt(largo);
    ancho=parseInt(ancho);

    cemento = largo * ancho;
    cal = largo * ancho;

    confirm("La cantidad de bolsas de cemento necesarias es " + cemento + " y de cal "+ cal);





}