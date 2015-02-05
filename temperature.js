"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original       = document.getElementById("original");
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[-+]?\d+)?)\s*([cf])\s*$/i;
  
  /*
  Función match, se le pasa una expresión regular a una cadena
   y nos devuelve las palabras que coinciden con  la expresión.
  */

  var m = temp.match(regexp);
  
  if (m) {

  	/*
  	Seleccionamos por un lado el número, y por otro el tipo de valor 
  	(Farenheit o  Celsius)

	*/

    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "Error!";
  }
}