let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let seguirComprando = true
let decision
let productos = []
let carrito = []
// class Producto {
//   constructor(nombre, precio,stock) {
//     this.nombre = nombre
//     this.precio = precio
//     this.stock = stock
//   }

//   modificarStock(){
//     this.stock = this.stock - 1
//   }
// }
// const iphone = new Producto('Iphone', 650,5)
// iphone.modificarStock()
// iphone.modificarStock()
// iphone.modificarStock()


// const tv = new Producto('TV', 350)
// const ipad = new Producto('Ipad', 250)
// const computador = new Producto('Computador', 1200)

const iphone = {
  nombre:'Iphone',
  precio: 650
}
productos.push(iphone)
const tv = {
  nombre:'TV',
  precio: 350,
}
productos.push(tv)
const ipad = {
  nombre:'Ipad',
  precio: 250
}
productos.push(ipad)
const computador = {
  nombre:'Computador',
  precio: 1200
}
productos.push(computador)

console.log(productos)

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    carrito.push(productos[0])
  } else if (productoSeleccionado === 2) {
    carrito.push(productos[1])
  } else if (productoSeleccionado === 3) {
    carrito.push(productos[2])
  } else if (productoSeleccionado === 4) {
    carrito.push(productos[3])
  } else {
    productoSeleccionado = parseInt(
      prompt(
        'ingresa un producto existente: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
    continue
  }

  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))
  if (decision === 1) {
    productoSeleccionado = parseInt(
      prompt(
        'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
      )
    )
  } else if (decision === 2) {
    seguirComprando = false
  }
}

console.log(carrito)

for(let i=0;i<carrito.length;i++){
  totalCompra = totalCompra +carrito[i].precio
}

for (const prod of carrito) {
  totalCompra = totalCompra +prod.precio
}




alert('El valor total sin descuento ni impuestos es: ' + totalCompra)

// function calcularPrecioConDescuento(valor) {
//   let descuento = 0
//   if (valor <= 1000) {
//     descuento = 10
//   } else if (valor > 1000 && valor <= 1500) {
//     descuento = 15
//   } else if (valor > 1500 && valor <= 2000) {
//     descuento = 20
//   } else {
//     descuento = 25
//   }
//   let valorDescuento = valor * (descuento / 100)
//   valor = valor - valorDescuento
//   return valor
// }
// let valorConDescuento = calcularPrecioConDescuento(totalCompra)
// alert('El total con descuento sin impuestos es: ' + valorConDescuento)

// function calcularPrecioConImpuesto(valor) {
//   const impuestos = valor * (8 / 100)
//   return valor + impuestos
// }

// let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
// alert('El valor final a pagar es de: ' + valorFinalConImpuesto)

// class CalculadoPrecioFInal {
//   constructor(total) {
//     this.total = total
//   }

//   calcularPrecioConDescuento() {
//     let descuento = 0
//     if (this.total <= 1000) {
//       descuento = 10
//     } else if (this.total > 1000 && this.total <= 1500) {
//       descuento = 15
//     } else if (this.total > 1500 && this.total <= 2000) {
//       descuento = 20
//     } else {
//       descuento = 25
//     }
//     let valorDescuento = this.total * (descuento / 100)
//     let valor = this.total - valorDescuento
//     return valor
//   }

//   calcularPrecioConImpuesto(){
//     const precioConDescuento = this.calcularPrecioConDescuento()
//     const impuestos = precioConDescuento * (8 / 100)
//   return precioConDescuento + impuestos
//   }
// }


// const calculadora = new CalculadoPrecioFInal(totalCompra)
// console.log(calculadora.calcularPrecioConImpuesto())

