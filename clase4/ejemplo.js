let totalCompra = 0
let productoSeleccionado = parseInt(
  prompt(
    'Ingresa el numero del producto que quieres comprar: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'
  )
)
let seguirComprando = true
let decision

while (seguirComprando === true) {
  if (productoSeleccionado === 1) {
    totalCompra = totalCompra + 650
  } else if (productoSeleccionado === 2) {
    totalCompra = totalCompra + 350
  } else if (productoSeleccionado === 3) {
    totalCompra = totalCompra + 250
  } else if (productoSeleccionado === 4) {
    totalCompra = totalCompra + 1200
  } else{
    productoSeleccionado = parseInt(prompt('ingresa un producto existente: 1.Iphone - 2.TV - 3.Ipad - 4.Computador'))
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

alert('El valor total sin descuento ni impuestos es: '+totalCompra)

function calcularPrecioConDescuento(valor){
let descuento = 0
if(valor<=1000){
    descuento = 10
} else if(valor>1000 && valor<=1500){
    descuento = 15
} else if(valor>1500 && valor<=2000){
    descuento = 20
} else {
    descuento = 25
}
let valorDescuento = valor *(descuento/100)
valor = valor - valorDescuento
return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuestos es: '+valorConDescuento)

function calcularPrecioConImpuesto(valor){
    const impuestos = valor * (8/100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('El valor final a pagar es de: '+valorFinalConImpuesto)