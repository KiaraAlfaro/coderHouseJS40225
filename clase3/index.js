// if(condicion1){

// } else if(condicion2){

// } else {

// }

// for ===> conteo

// let numeroFinalizacion = parseInt(prompt('Ingresa un numero'))

// i = i + 1 -> i++
// for(let i = 0;i<=numeroFinalizacion;i++){
//     if(i===6){
//         //break
//         continue
//     }
//     console.log('iteracion numero: '+i)
// }

// usuario ingresa = 10   1+2+3+4+5+...+10

//EJERCICIO FOR 1

// let numero = parseInt(prompt('Ingrese un numero'))
// let resultadoSuma = 0

// for(let i = 0;i<=numero;i++){
//     resultadoSuma = resultadoSuma + i
//     console.log(i,resultadoSuma)
// }

//EJERCICIO FOR 2
// let numero1 = parseInt(prompt('Ingrese un primer numero'))
// let numero2 = parseInt(prompt('Ingrese un segundo numero'))

// if(numero1<numero2){
//     for(let i=numero1;i<=numero2;i++){
//         console.log(i)
//     }
// } else if(numero1>numero2){
//     for(let i=numero1;i>=numero2;i--){
//         console.log(i)
//     }
// } else {
//     alert('Los numeros ingresados son iguales')
// }

// //for
// for(let i =0;i<=5;i++){

// }

// while ===> ciclo condicional
// let i = 0
// while(i<=5){
// //bloque de codigo a ejecutar si mientras que la condicion se cumpla
// console.log('iteracion numero: ',i)
// i++
// }
// // console.log(i)

// // do...while ===> ciclo condicional
// do {
//   console.log('iteracion: ', i)
//   i++
// } while (i <= 5)

//EJEMPLO DO...WHILE

// let numero = parseInt(prompt('Ingrese un numero'))
// let iteracion = 1
// do{
// numero = numero + 5 
// console.log(numero)
// iteracion++

// }while(iteracion<=8)

//EJEMPLO WHILE

// let suma = 0
// let numero = parseInt(prompt('Ingrese un numero'))

// while(suma<=30){
//     suma = suma + numero //27
//     //       0   + 20  => primera vuelta
//     //         20 + 2 => segunda vuelta
//     //          22 + 5 => tercera vuelta
//        numero = parseInt(prompt('La suma va en '+suma+', ingresa otro numero')) //5
//     if(suma+numero>30){
//         break
//     }
// }
// alert('La suma es: '+suma)

// let numero = parseInt(prompt('Ingrese un numero'))

// while(numero<=10 || numero>20){
//     numero = parseInt(prompt('Ingrese otro numero'))
// }
// alert('El numero ingresado es:'+numero)


// let nombre = prompt('Ingresa un nombre')

// do{
//     alert('Hola'+nombre)
//     nombre = prompt('Ingresa un nombre')
// }while(nombre!=='juan')
// alert('No eres bienvenido '+nombre)




// while(nombre!=='juan'){
//     alert('Hola '+nombre)
//     nombre = prompt('Ingresa un nombre')
// }
// alert('No eres bienvenido '+nombre)

let color = prompt('Ingresa un color')

switch(color){
    case('azul'):
    alert('El color es azul')
    break
    case('rojo'):
    alert('El color es rojo')
    break
    case('verde'):
    alert('El color es verde')
    break
    default:
    alert('No ingresaste ningun color esperado')
    break
}

