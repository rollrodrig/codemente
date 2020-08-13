var a1 = "hola"
function example1() {
	var a1 = "adios"
	console.log(a1)
}
// llamamos a la funcion y 
example1()
// vemos que imprime "adios"


var a2 = "hola"
function example2() {
	console.log(a2)
}
// llamamos a la funcion y 
example2()
// vemos que imprime "hola"

function example3() { //----- scope externo ----------------
	var a = "hola"										//
	function genial() {//---scope interno 1 ----------  //
		var b = "mundo"								//  //
		function total() {//-- scope interno 2 ---	//	//
			var c = "bonito"					//	//	//
			console.log(a)						//	//	//
			console.log(b)						//	//	//
			console.log(c)						//	//	//
		}//---------------------------------------	//	//
		total()// AQUI EJECUTAMOS LA FUNCION total
	}//-----------------------------------------------	//
	genial()// AQUI EJECUTAMOS LA FUNCION genial
} //------------------------------------------------------
example3() // AQUI EJECUTAMOS LA FUNCION saludo




function example4() { //----- scope externo ----------------
	var a = "hola"										//
	function genial() {//---scope interno 1 ----------  //
		var b = "mundo"								//  //
		function total() {//-- scope interno 2 ---	//	//
			var c = "bonito"					//	//	//
			console.log(a)						//	//	//
			console.log(b)						//	//	//
			console.log(c)						//	//	//
		}//---------------------------------------	//	//
		total()// AQUI EJECUTAMOS LA FUNCION total
	}//-----------------------------------------------	//
	genial()// AQUI EJECUTAMOS LA FUNCION genial
} //------------------------------------------------------
example4() // AQUI EJECUTAMOS LA FUNCION saludo


