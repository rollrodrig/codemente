message1() // imprime "hola"
function message1(){
	console.log("print message1")
}

message2() // error --> leer artículo sobre hoisting
const message2 = function(){
	console.log("print message2")
}

const message3 = function(){
	console.log("print message3")
}
message3()