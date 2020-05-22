function saludo() { //----- scope externo ----------------
	var a = "hola"										//
	function genial() {//---scope interno 1 ----------  //
		var b = "mundo"								//  //
		function total() {//-- scope interno 2 ---	//	//
			var c = "bonito"					//	//	//
			console.log(a)						//	//	//
			console.log(b)						//	//	//
			console.log(c)						//	//	//
			console.log(d)						//	//	//
		}//---------------------------------------	//	//
		total()// AQUI EJECUTAMOS LA FUNCION total
	}//-----------------------------------------------	//
	genial()// AQUI EJECUTAMOS LA FUNCION genial
} //------------------------------------------------------
saludo() // AQUI EJECUTAMOS LA FUNCION saludo