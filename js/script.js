var inputSumA = document.getElementById("sumA");
var inputSumB = document.getElementById("sumB");
var inputSumR = document.getElementById("sumR");

// Si presiona el boton sumar sumA + sumB y mostrar el resultado en sumR
function calcSum()
{
	inputSumR.value = inputSumA.value; + inputSumB.value;
}
// Si presiona el boton borrar borra el contenido de sumA, sumB y sumR
function calcClear()
{
	inputSumA.value = "";
	inputSumB.value = "";
	inputSumR.value = "";
}