
// requerimos al modulo chai
const expect = require('chai').expect
//requerimos lo que sera testeado '..' ,ira hasta arriba en
//packaja.json  verificara el archivos platzon.js
// se colcoa default xq la funcion esta asi con default .
// se guarda la funcion en una variable en este caso convertchar y se usa mas abajo
const convertchar = require('..').default

describe('#ConvertChar', function (){


	it('si la palabra termina en "ar", se le quitan esos dos caracteres', function (){
		const translation = convertchar('rezar')
		expect(translation).to.equal('rez')
	})
	it('si la palabra inicia con Z se añade "pe" al final', function (){
		const translation = convertchar('zarpar')
		expect(translation).to.equal('zarppe')

		const translation2 = convertchar('zorro')
		expect(translation2).to.equal('zorrope')
	})
		
		it('si la palabra traducida tiene 10 o mas letras,se debe partir a la mitad y unir con un guion del medio', function (){

			const translation = convertchar('abecedario')
		expect(translation).to.equal('abece-dario')
		
	})
	it(' si la palabra original es un palindromo ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function (){

		const translation = convertchar('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})


})