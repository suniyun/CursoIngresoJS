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
    
    largo = document.getElementById("largo").value;
    ancho = document.getElementById("ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    alambre = largo * ancho;

    confirm("La cantidad a usar de alambre es " + alambre);





    
    
}
function Circulo () 
{
    var radio
    var alambre

    radio = document.getElementById("radio").value;

    radio = parseInt(radio);

    
	
}
function Materiales () 
{
	var largo;
    var ancho;
    var materiales;

    largo=document.getElementById("largo").value;
    ancho=document.getElementById("ancho").value;

    largo=parseInt(largo);
    ancho=parseInt(ancho);



}