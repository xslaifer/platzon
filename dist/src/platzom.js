'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ConvertChar;

// export default toma la priemra funcion por defecto
//si tuvieramos mas solo se usaria export y la siguiente sentencia
//import {convertchar} from 'platzon'
function ConvertChar(str) {

	var translation = str;

	// si la palabra termina en "ar", se le quitan esos dos caracteres

	if (str.toLowerCase().endsWith('ar')) {

		//de donde empieza y hasta donde mostraras, -2 se cortara dos letras antes de terminar

		translation = str.slice(0, -2);
	}

	// si la palabra inicia con Z se añade "pe" al final

	if (str.toLowerCase().startsWith('z')) {

		translation += 'pe';
	}

	//si la palabra traducida tiene 10 o mas letras,
	//se debe partir a la mitad y unir con un guion del medio
	var tam = translation.length;
	if (tam >= 10) {
		//slice indica partir la palara ini,fin
		var halffisrt = translation.slice(0, Math.round(tam / 2));
		var halfsecond = translation.slice(Math.round(tam / 2));

		translation = halffisrt + '-' + halfsecond;
	}

	//si la palabra original es un palindromo
	//ninguna regla anterior cuenta y se devuelve
	//la misma palabra intercalando mayusculas y minusculas

	//split para separa caracter por caracter , reverse se puede usar despues del split para girar las letras, y con join se 
	//vuelven a unir.
	var reversa = function reversa(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {

		var tam = str.length;
		var translation = '';
		var capitalize = true;

		for (var i = 0; i < tam; i++) {
			//charart muestra el carcater de la posicion enviada
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return translation;
	}

	if (str.toLowerCase() == reversa(str.toLowerCase())) {
		// minmay intercala mayusculas y minusculas
		return minMay(str);
	}

	return translation;
}