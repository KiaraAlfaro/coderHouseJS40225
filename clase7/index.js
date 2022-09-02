

// // caso 1
// function ordenSuperior1(){
//     return function(){

//     }
// }
// // caso 2
// function ordenSuper2(suma){
//     return
// }


// //ejemplo caso 1

// function elevar(n){
//  return function(m){
//     return m**n
//  }
// }

// let cuadrado = elevar(2)
// let cubo = elevar(3)
// let cuatro = elevar(4)

// console.log(cuadrado(7))
// console.log(cuadrado(3))

// //ejemplo caso 2
// function suma(num1,num2){
//     return num1+num2
// }
// function resta(num1,num2){
//     return num1-num2
// }

// function ope(n1,n2,fn){
//     return  fn(n1,n2)
// }

// console.log(ope(5,2,suma))
// console.log(ope(5,2,resta))

const arregloNum = [2,4,6,43,2,6,78,4,3,78,3,7,8]

const arregloObjeto = [
    {nombre:'Carlos',edad:24,curso:'JS8'},
    {nombre:'Juan',edad:22,curso:'JS10'},
    {nombre:'Edwin',edad:32,curso:'JS7'},
    {nombre:'Andres',edad:36,curso:'JS10'},
    {nombre:'Laura',edad:18,curso:'JS12'},
]

// for (let i = 0; i < arregloNum.length; i++) {
//     console.log(arregloNum[i])
// }

//arregloObjeto.forEach(obj=>console.log(obj.edad+10))
// let buscador = prompt('ingresa el nombre que quieras buscar')
// const elementoBuscado = arregloObjeto.find(obj=>obj.nombre===buscador)
// //console.log(elementoBuscado)
// if(elementoBuscado){
//     alert('este nombre existe')
// } else{
//     alert('elemento no existe')
// }

// const objetosFiltrados = arregloObjeto.filter(obj=>obj.nombre!=='Juan')
// console.log(objetosFiltrados)

// const objetosFiltrados = arregloObjeto.some(obj=>obj.nombre!=='Juan')
// console.log(objetosFiltrados)

// const objetosFiltrados = arregloObjeto.map(obj=>obj.edad)
// console.log(objetosFiltrados)

// const resultado = arregloObjeto.reduce((obj1,obj2)=>(obj1+obj2.edad),0)
// console.log(resultado)

// console.log(arregloNum.sort((num1,num2)=>num2-num1))
// console.log(arregloObjeto.sort((obj1,obj2)=>obj1.edad-obj2.edad))
// console.log(arregloObjeto.sort((obj1,obj2)=>obj2.nombre.localeCompare(obj1.nombre)))


//Math

console.log(Math.PI)
console.log(Math.sqrt(9))
console.log(Math.pow(2,2))
console.log(Math.round(3.5674456))
console.log(Math.floor(4.277865))
console.log(Math.ceil(Math.random()*20))

const fecha = new Date()
const fechaCumpleanos = new Date(1995, 11, 17)

// console.log(fecha.getFullYear())
// console.log(fecha.getMonth())
console.log(fechaCumpleanos.toLocaleString())
