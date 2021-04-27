//canvas en Js
var canvas=document.getElementById("Canvas");
var papel=canvas.getContext("2d");
//Botón Color
var botoncito=document.getElementById("Boton");
botoncito.addEventListener("mousedown",colorStroke);
var borrador=document.getElementById("Borrador");
borrador.addEventListener("mousedown",borrar);
function borrar(infoColor)
{
    Color="#ffffff";
}

function colorStroke(info_Event)
{
    Color=botoncito.value;
}
//evento en el canvas
canvas.addEventListener("mousemove", dibujitoMouse);
canvas.addEventListener("mouseup", puntoIncialFlechas);
document.addEventListener("keydown", trazoFlecha);
var Color;
var Xi;//coordenada en x
var Yi;//coordenada en y
var distancia;
var teclitas=
{
	LEFT:37,
	UP:38,
	RIGHT:39,
	DOWN:40 
};
//Función para generar las cordenadas del punto inicial para dibujar con las Flechitas del teclado.
function puntoIncialFlechas(info_Evento)
{
    Xi=info_Evento.layerX;
    Yi=info_Evento.layerY;
}
//Función que dibuja según la determinada flecha oprimida.
function trazoFlecha(info_Evento)
{
    var distancias=5;
    //Color=botoncito.value;
	switch(info_Evento.keyCode)
	{
		case teclitas.LEFT:
		trazar(
        Color,
		Xi,
		Yi,
		Xi-distancias,
		Yi)
		Xi=Xi-distancias;
        console.log(Xi);
		break;

		case teclitas.UP:
		trazar(
        Color,
        Xi,
		Yi,
		Xi,
		Yi-distancias)
		Yi=Yi-distancias;
		break;

		case teclitas.RIGHT:
		trazar(
        Color,
        Xi,
        Yi,
        Xi+distancias,
        Yi)
        Xi=Xi+distancias;
		break;

		case teclitas.DOWN:
		trazar(
        Color,
        Xi,
        Yi,
        Xi,
        Yi+distancias)
        Yi=Yi+distancias;
		break;
		//El else de switch es default
		default:

		break;
	}
}
//Función que dibuja cuando se mantiente oprimido el click y se mueve el cursor.
function dibujitoMouse(info_evento)
{
    Xi=info_evento.layerX;//coordenada en x del cursor en movimiento.
    Yi=info_evento.layerY;//coordenada en y del cursor en movimiento.
    distancia=20;
    clickdown=info_evento.which;//which es el atributo de la información del evento que indica con 1 o 0 si estamos haciendo click(1) o no(0).
    if(clickdown==1)//Si mantenemos el click mientras movemos el cursor, entonces va a comenzar a dibujar.
    {
        trazar(Color,Xi,Yi,Xi,Yi+distancia)//Este trazo es como un puntico.
    } 
}
//Función para dibujar por trazos.
function trazar(color,xi,yi,xf,yf)
{
    papel.beginPath();
    papel.strokeStyle=color;
    papel.lineWidth=20;
    papel.moveTo(xi,yi);
    papel.lineTo(xf,yf);
    papel.stroke();
    papel.closePath();
}





















