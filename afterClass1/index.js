class Prestamo {
  constructor(nombre, id) {
    this.nombre = nombre
    this.id = id
    this.bancos = [
      {
        nombre: 'bancolombia',
        tasas: [
          {
            meses: 12,
            interes: this.generarInteres(),
          },
          {
            meses: 24,
            interes: this.generarInteres(),
          },
          {
            meses: 36,
            interes: this.generarInteres(),
          },
        ],
      },
      {
        nombre: 'davivienda',
        tasas: [
          {
            meses: 12,
            interes: this.generarInteres(),
          },
          {
            meses: 24,
            interes: this.generarInteres(),
          },
          {
            meses: 36,
            interes: this.generarInteres(),
          },
        ],
      },
      {
        nombre: 'itau',
        tasas: [
          {
            meses: 12,
            interes: this.generarInteres(),
          },
          {
            meses: 24,
            interes: this.generarInteres(),
          },
          {
            meses: 36,
            interes: this.generarInteres(),
          },
        ],
      },
    ]
  }

  generarInteres() {
    return Math.floor(Math.random() * 20 + 1)
  }

  anadirBanco(nombre){
    const banco = {nombre:nombre}
    this.bancos.push(banco)
  }
}
const prestamos = []
const vivienda = new Prestamo('vivienda', 1)
vivienda.anadirBanco('bogota')
prestamos.push(vivienda)
const vehicular = new Prestamo('vehicular', 2)
prestamos.push(vehicular)
const libre = new Prestamo('libre', 3)
prestamos.push(libre)
//console.log(prestamos)

const tipoCreditoSeleccionado = parseInt(
  prompt('Ingrese el tipo de credito: 1.vivienda - 2.vehicular - 3.libre')
)
const existeTipoDePrestamo = prestamos.find(
  (pres) => pres.id === tipoCreditoSeleccionado
)
//console.log(existeTipoDePrestamo)

const mesesPrestamo = parseInt(
  prompt('A cuantos meses quieres sacar el prestamo?: 12, 24 o 36')
)
const bancos = existeTipoDePrestamo.bancos
//console.log(bancos)

const arrayInteresSegunMesesSeleccionado = []
bancos.forEach((banco) => {
  const tasasArray = banco.tasas
  //console.log(tasasArray)
  const interesPorBanco = tasasArray.find(
    (tasa) => tasa.meses === mesesPrestamo
  )
  //console.log(interesPorBanco)
  arrayInteresSegunMesesSeleccionado.push({
    nombre: banco.nombre,
    interes: interesPorBanco.interes,
  })
})
//console.log(tasasArray)
console.log(arrayInteresSegunMesesSeleccionado)

arrayInteresSegunMesesSeleccionado.sort((a, b) => a.interes - b.interes)
console.log(arrayInteresSegunMesesSeleccionado)
const bancoMenorTasa = arrayInteresSegunMesesSeleccionado[0]
console.log(bancoMenorTasa)

const valorCredito = parseInt(prompt('Ingrese el monto que quieras prestar: '))

const cuotaMensualCapital = valorCredito / mesesPrestamo
const cuotaMensualIntereses =
  cuotaMensualCapital * (bancoMenorTasa.interes/ 100)
const cuotaMensualTotal = cuotaMensualCapital + cuotaMensualIntereses

alert(
  `El banco que ofrece la tasa mas baja es ${bancoMenorTasa.nombre} con un valor de $${cuotaMensualTotal} por mes`
)
