// ejercicios 1-9
let miNombre="Bruno Marcos"
let miApellido="Ferreira"
let miEdad=23
let miMascota="Freya"
let edadMascota = 5
let nombreCompleto = miNombre + " " +  miApellido
let textoPresentacion= "dasda"
let sumaEdades = miEdad+edadMascota
let restaEdades = miEdad-edadMascota
let productoEdades = miEdad*edadMascota
let divisionEdades = miEdad/edadMascota
console.log("anda");
console.log("Hola mi nombre es "+ nombreCompleto +  " tengo " + miEdad + " años Tengo una mascota llamada " + miMascota);
console.log("Suma edades: "+sumaEdades)
console.log("Resta edades: "+restaEdades)
console.log("Productos edades: "+productoEdades)
console.log("Division edades: "+divisionEdades)

// ejercicios 10-15
let alumno={
    nombre: miNombre,
    apellido: miApellido,
    edad: miEdad,
    fechaNacimiento: "04-02-2000",
    localidad:"Misiones"
}
console.table(alumno)
let mascota={
    nombre:miMascota,
    edad:edadMascota,
    color:"negro",
    raza:"callejero fino",
    nombrePadre:"no tiene"
}
console.table(mascota)
const arrayFrutas=["Sandia","Melon","Manzana","Mandarina","Naranja"]
console.log(arrayFrutas)
console.log(arrayFrutas[0])
console.log(arrayFrutas[1])
console.log(arrayFrutas[2])
console.log(arrayFrutas[3])
console.log(arrayFrutas[4])

const arrayNumeros =[1,3,20,40,160]

console.log(arrayNumeros)
console.log(arrayNumeros[0])
console.log(arrayNumeros[1])
console.log(arrayNumeros[2])
console.log(arrayNumeros[3])
console.log(arrayNumeros[4])

let arrayFamilia=[
    familia1 ={
        nombreFamilia:"Simpson"
    },
    familia2 ={
        nombreFamilia:"Simpson"
    },
    familia3 ={
        nombreFamilia:"Simpson"
    },
    familia4 ={
        nombreFamilia:"Simpson"
    },
    familia5 ={
        nombreFamilia:"Simpson"
    }
]
let familiaArray= arrayFamilia[0].nombreFamilia
let textoAleatorio = arrayFrutas[1]+" "+arrayNumeros[3]+" "+ familiaArray
console.log(textoAleatorio);

// ejercicios 16-19
let edad = prompt("Ingrese su edad")
console.log("Soy mayor de edad con: "+ edad);

let edadCompañero = prompt("Ingrese la edad de su compañero: ")

console.log("Mi edad es igual a la de mi compañero:"+ edad==edadCompañero)
console.log("Mi edad es mayor a la de mi compañero:"+ edad>=edadCompañero)
console.log("Mi edad es menor a la de mi compañero:"+ edad<=edadCompañero)
