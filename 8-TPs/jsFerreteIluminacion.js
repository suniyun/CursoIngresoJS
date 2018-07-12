/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad = document.getElementById("Cantidad").value;
     var pdescuento;
     var precio = 35;
     var marca = document.getElementById("Marca").value;
     var ptotal = cantidad * precio;
     var total 

     if (cantidad > 5){
         pdescuento = ptotal * 0,5;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;

     } else if (cantidad == 5 && marca == "ArgentinaLuz"){
         pdescuento = ptotal * 0,4;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;
         
     } else if (cantidad == 5){
         pdescuento = ptotal * 0,3;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;

     } else if (cantidad == 4 && (marca == "FelipeLamparas" || marca == "ArgentinaLuz")){
         pdescuento = ptotal * 0,25;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;

     } else if (cantidad == 4){
         pdescuento = ptotal * 0,2;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;

     } else if (cantidad == 3 && marca == "ArgentinaLuz"){
         pdescuento = ptotal * 0,15;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;

     } else if (cantidad == 3 && marca == "FelipeLamparas"){
         pdescuento = ptotal * 0,1;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;

     } else {
         pdescuento = ptotal * 0.05;
         total = ptotal - pdescuento;
         total = parseInt(total);
         document.getElementById("precioDescuento").value = total;
    
     } if (total > 120){
         pdescuento = ptotal * 1,1;
         total = ptotal + pdescuento;
         total = parseInt(total);
         alert("IIBB Usted pagó " + total + " siendo " + pdescuento + " el impuesto que se pagó");

     }

}
