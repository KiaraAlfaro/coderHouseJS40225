let primerArray = [true,2,'hi',[1,2,3],'hola']

// posiciones       0   1   2     3       4
// largo del arreglo            5

const segundoArray = [2,3,4,5]
//console.log(primerArray)
//console.log(segundoArray)

console.log(primerArray.length) // cantidad de elementos
// console.log(primerArray[0]) // mostrar elemento posicion 2
// console.log(primerArray[1])
// console.log(primerArray[2])
// console.log(primerArray[3])
// console.log(primerArray[4])

for(let i =0;i<=primerArray.length;i++){
    console.log(i,primerArray[i])
}

for(let i =0;i<segundoArray.length;i++){
    segundoArray[i] = segundoArray[i]+1
}
console.log(segundoArray)

// .push ----  .unshift

// primerArray.push('Elemento final')
// primerArray.unshift('Elemento inicial')
// // primerArray.push(5)
// // primerArray.push(5)
// // primerArray.push(5)
// // primerArray.push(5)
// // primerArray.push(5)

// // .pop ----- .shift
// segundoArray.pop()
// segundoArray.shift()

// console.log(primerArray)
// console.log(segundoArray)

let animales = ['gato','perro','serpiente','caballo','raton']

//.splice eliminar uno o mas elementos de un arreglo
const animalesEliminados = animales.splice(1,3)
//console.log(animales)
//console.log(animalesEliminados)

let saludar = ['hola','como estas','?']
//saludar.join('')
console.log(saludar.join(' '))

console.log(primerArray.concat(segundoArray))








