// clave - valor   nombre = farid  ----- apellido = hernandez ------ edad = 32

let primerObjeto = {
nombre:"Farid",
apellido:"Hernandez",
edad:32
};

const nombrePerro = "Firulais"

const animal1 = {
tipo:"perro",
nombre:nombrePerro,
edad:4,
raza: "French"
};

//let animal1Tipo = "perro"
//let animalnombre = "Firulais"

// console.log(animal1)
// console.log(animal1.tipo,primerObjeto.nombre) // 1
// console.log(animal1["tipo"]) // 2

//alert(`Este ${animal1.tipo} vive con ${primerObjeto.nombre} y se llama ${animal1.nombre}`)
 

// anadiendo propiedades a objeto animal1
//console.log(animal1)
animal1.vivo = true
//animal1.dueno = "Victor"
animal1["dueno"] = "Victor"
animal1.nombre = "Rocky"
//console.log(animal1)

const animal2 = {
    tipo:"perro",
    nombre:"Roro",
    edad:5,
    raza: "Siberiano"
}

const animal3 = {
    tipo:"gato",
    nombre:"Mishu",
    edad:7,
    raza: "Siamesa"
}

function Animal(tipo,nombre,edad,raza){
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
} 

const animal4 = new Animal("gato","Fiufiu",5,"Blanco")
const animal5 = new Animal("pez","Dory",2,"Bailarina")
// console.log(animal4)
// console.log(animal5)
// console.log(Animal)

// function Usuario(nombre,email,password){
//     this.nombre = nombre
//     this.email = email
//     this.password = password
//     this.tieneEmail = function(){
//         if(this.email){
//             return true
//         } else{
//             return false
//         }
//     }
//     this.cambiarPassword = function(nuevaPassword){
//         this.password = nuevaPassword
//     }
// }

//const usuario1 = new Usuario("Farid","fsesin@mail.com","12345")
//const usuario2 = new Usuario("Cris",null,"abcde")
//console.log(usuario1,usuario2)

// function tieneEmail(usuario){
//     if(usuario.email){
//         return true
//     } else{
//         return false
//     }
// }
//console.log(tieneEmail(usuario2))
// function cambiarPassword(usuario,nuevaPassword){
//     usuario.password = nuevaPassword
// }
//cambiarPassword(usuario1,'hola')
//console.log(usuario1)

// console.log(usuario1.tieneEmail())
// usuario1.cambiarPassword('chao')
// console.log(usuario1)

class Usuario {
constructor(nombre,email,password){
    this.nombre = nombre
    this.email = email
    this.password = password
}
    tieneEmail(){
        if(this.email){
            return true
        } else{
            return false
        } 
    }
    cambiarPassword(nuevaPassword){
        this.password = nuevaPassword
    }
}

const usuario3 = new Usuario("Juan","juan@mail.com","clave1234")
console.log(usuario3.tieneEmail())