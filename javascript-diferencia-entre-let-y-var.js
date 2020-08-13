// usando var
var arrFuncsVar = [];
for (var x = 0; x < 3; x++) {
	arrFuncsVar.push(function() { console.log('El valor de X: '+ x) })
}
var funcVar0 = arrFuncsVar[0];
funcVar0();
var funcVar1 = arrFuncsVar[1];
funcVar1();
var funcVar2 = arrFuncsVar[2];
funcVar2();
/*
Se espera
El valor de X: 0
El valor de X: 1
El valor de X: 2

Pero imprime
El valor de X: 3
El valor de X: 3
El valor de X: 3
*/

// ejemplo usanod let
var arrFuncsLet = [];
for (let x = 0; x < 3; x++) {
	arrFuncsLet.push(function() { console.log('El valor de X: '+ x) })
}
var funcLet0 = arrFuncsLet[0];
funcLet0();
var funcLet1 = arrFuncsLet[1];
funcLet1();
var funcLet2 = arrFuncsLet[2];
funcLet2();

/*
Se espera
El valor de X: 0
El valor de X: 1
El valor de X: 2

Imprime
El valor de X: 0
El valor de X: 1
El valor de X: 2
*/