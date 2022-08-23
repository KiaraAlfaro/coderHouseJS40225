// // creando una funcion

// function sumar(){
// const numero1 = parseInt(prompt('Ingresa un numero'))
// const numero2 = parseInt(prompt('Ingresa otro numero'))

// const resultado = numero1 + numero2
// alert('El resultado es '+resultado)
// }

// //sumar() // llamando a la funcion

// function restar(numero1,numero2){
//     const restando = numero1 - numero2
//     const mitad = restando/2
//     console.log(restando)
//     return mitad
// }
// //console.log(restando)
// const resultadoResta = restar(10,5)
// console.log(resultadoResta)
// console.log(restando)
// //alert('el resultado es: '+resultadoResta)

// const variableGlobal = 2


// function mayorA10(num1, num2) {
// let variableLocal = 10
//   const resultado = num1 + num2 + variableGlobal
//   if (resultado > 10) {
//     return 'mayor a 10'
//   } else {
//     return 'menor o igual a 10'
//   }
// }


// const resultadoMayorA10 = mayorA10(4, 5)
// console.log('el resultado es ' + resultadoMayorA10)

function esVocal(letra) {
    console.log(variableLocal)
  const letraMinuscala = letra.toLowerCase()
  if (
    letraMinuscala === 'a' ||
    letraMinuscala === 'e' ||
    letraMinuscala === 'i' ||
    letraMinuscala === 'o' ||
    letraMinuscala === 'u'
  ) {
    return 'es una vocal'
  } else {
    return 'no es una vocal'
  }
}

// console.log(esVocal('A'))

// let esVocal = function(letra){

// }


// esVocal()
let exponenteFunction = function(num,exponenteParams){
    return num**exponenteParams
}
let exponenteArrow = (num,exponenteParams) =>{
    return num**exponenteParams
}

//let cuadrado = exponente(2)
//let cubo = exponente(3)

console.log(exponente(6,2))
console.log(exponente(6,3))

//funcion autoinvocada

// +function(letra) {
//     //console.log(variableLocal)
//   const letraMinuscala = letra.toLowerCase()
//   if (
//     letraMinuscala === 'a' ||
//     letraMinuscala === 'e' ||
//     letraMinuscala === 'i' ||
//     letraMinuscala === 'o' ||
//     letraMinuscala === 'u'
//   ) {
//     return 'es una vocal'
//   } else {
//     return 'no es una vocal'
//   }
// }('A')

