function start(e) {
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.4'; 
}

/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(e){
	e.target.style.opacity = ''; // Restaura la opacidad del elemento			
	e.dataTransfer.clearData("Data");			
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
function enter(e) {
	return true;
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {
	if ((e.target.className == "dropbox") || (e.target.id == "imgbox"))
		return false;
	else
	return true;
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/
function drop(e){
	e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
	var elementoArrastrado = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
	comprobarPuzzle();
}

function comprobarPuzzle(){
	if((document.getElementById('drag1').parentNode.id=='1') &&
		(document.getElementById('drag2').parentNode.id=='2') &&
		(document.getElementById('drag3').parentNode.id=='3') &&
		(document.getElementById('drag4').parentNode.id=='4') &&
		(document.getElementById('drag5').parentNode.id=='5') &&
		(document.getElementById('drag6').parentNode.id=='6') &&
		(document.getElementById('drag7').parentNode.id=='7') &&
		(document.getElementById('drag8').parentNode.id=='8') &&
		(document.getElementById('drag9').parentNode.id=='9') &&
		(document.getElementById('drag10').parentNode.id=='10') &&
		(document.getElementById('drag11').parentNode.id=='11') &&
		(document.getElementById('drag12').parentNode.id=='12') &&
		(document.getElementById('drag13').parentNode.id=='13') &&
		(document.getElementById('drag14').parentNode.id=='14') &&
		(document.getElementById('drag15').parentNode.id=='15') &&
		(document.getElementById('drag16').parentNode.id=='16'))
	{
		alert('Felicidades, has hecho el puzzle.');
	}
}

/**
* Muestra un mensaje de advertencia si el navegador no soporta Drag & Drop. (En Windows no lo soportan ni IE ni Safari)
**/
function comprobarnavegador() {
	if( 
		(navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
		((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
	{
		alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
	}

}

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}