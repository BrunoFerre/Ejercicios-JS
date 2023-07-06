// ejercicios 1 y 2 3
// function mayor(nro1,nro2) {
//     if(nro1==nro2){
//         console.log("Los numeros son iguales ");
//     }else if(nro1>nro2){
//         console.log("Los numeros son diferentes ");
//         console.log("El mayor numero es "+nro1);
//     }else{
//         console.log("Los numeros son diferentes ");
//         console.log("El mayor numero es "+nro2);
//     }
// }
// mayor(14,30)
// function mayorTres(nro1,nro2,nro3) {
//     if((nro1>nro2) && (nro1>nro3)){
//         console.log(`El mayor numero es ${nro1}`);
//     }else if((nro2>nro1)&& (nro2>nro3)){
//         console.log(`El mayor numero es ${nro2}`);
//     }else{
//         console.log(`El mayor numero es ${nro3}`);
//     }
// }
// mayorTres(2,1,3)


// const persona1={
//     nombre:'Bruno',
//     edad:23,
//     altura:180
// }
// const persona2={
//     nombre:'Leonel',
//     edad:22,
//     altura:160
// }
// function altura(personaUno,personaDos) {
//     let text;
//     let alturaPersona1= personaUno.altura
//     let alturaPersona2 = personaDos.altura
//     if(alturaPersona1>alturaPersona2){
//          text=`La persona de nombre ${personaUno.nombre} es mas alta con ${personaUno.altura} cm`
//         console.log(text);
//     }else{
//          text=`La persona de nombre ${personaDos.nombre} es mas alta con ${personaDos.altura} cm`
//         console.log(text);
//     }
// }
// altura(persona1,persona2)


// let edadPersona = prompt("Ingrese su edad")
// let alturaPersona = prompt("Ingrese su altura")
// let visionPersona = prompt("Ingrese su vision(0-10)")

// function licencia(edad,altura,vision) {
//     if(edad<18 || altura<150 || vision<8){
//         console.log("Permiso denegado");
//     }else if(edad>=18 && altura>=150 && vision>=8){
//         console.log("Permiso Ok");
//     }
// }
// licencia(edadPersona,alturaPersona,visionPersona)

// let nombre = prompt("Ingrese su nombre")

// function puedePasar(nombreF){
//   if (nombreF !== "bruno") {
//     let pase = prompt("ingrese su pase")
//     if (pase!=="vip") {
//         let entrada = prompt("Desea comprar entrada")
//         if (entrada == "si") {
//             let cantidad = Number(prompt("Ingrese monto mayor a $1000"))
//             if (cantidad >=1000) {
//                 alert("Pase")
//             }else{
//                 alert("No pasa")
//             }
//         }else{
//             alert("NO QUIERE NADA")
//         }
//     }
//     else{
//         alert("Puede pasar libre por su pase")
//     }
//   }
//   else{
//     alert("Puede pasar libre por su nombre")
//   }
// }
// puedePasar(nombre)


//ejercicio 8
// function adivinanza() {
//   let numeroIncognita = 3
//   let vida=3
//   while (vida>0 && vida<4) {
//     let numeroIngresado = prompt(`Ingrese un numero del 1 al 10, te quedan ${vida} vidas`)
//     if(numeroIngresado>numeroIncognita){
//       alert("El numero es mayor")
//       vida--
//     }else if(numeroIngresado<numeroIncognita){
//       alert("El numero es menor")
//       vida--
//     }else if(numeroIncognita==numeroIngresado){
//       alert('Son iguales')
//       alert('ganaste')
//       vida=0
//     }else{
//       alert('Te quedaste sin vida')
//     }
//   }
// }
// adivinanza()

 /* ejercicio 9 */ 
 let Edad = Number(prompt('Ingrese su edad'))
 function persona(edad) {
     if (edad>=0 && edad <=12) {
         alert('Sos infante')
     }else if(edad>=13 && edad <=18){
         alert('Sos adolecente')
     }else if(edad>=19 && edad <=45){
         alert('Sos mayor joven')
     }else if(edad>=45 && edad<100){
         prompt('Sos anciano')
     }else{
        alert("Tiene esa edad")
     }
 }
 persona(Edad)


// ejercicio 10
/* function juego(persona1, persona2) {
    if (persona1 == persona2) {
        return alert('Empate')
    } else if ((persona1 === "piedra" && persona2 === "tijera") ||
        (persona1 === "tijera" && persona2 === "papel")
    ) {
        return alert('Persona Una gana')
    } else if (
        (persona2 === "piedra" && persona1 === "tijera") ||
        (persona2 === "papel" && persona1 === "piedra") ||
        (persona2 === "tijera" && persona1 === "papel")) {
        return alert('Persona Dos gana')
    } else {
        alert('Ingrese piedra papel o tijera')
    }
}
let per1 = prompt('Ingrese piedra, papel o tijeras')
let per2 = prompt('Ingrese piedra, papel o tijeras')
juego(per1, per2) 


/*ejercicio 11  */
/* let color = prompt("Ingrese color")
switch (color) {
    case "negro":
        alert('Falta de color')
        break
    case 'verde':
        alert('Color de la naturaleza')
        break
    case 'azul':
        alert('Color del agua')
        break
    case 'amarillo':
        alert('Color del sol')
        break
    case 'rojo':
        alert('Color del fuego')
        break    
    case 'marron':
        alert('Color de la tierra')
        break
} */
/* Ejercicio 12 */
/* function operacion(numero1,numero2){
    if (numero2 !=0) {
        let operacionMate= prompt("Que operacion(suma-resta-multiplicacion-divisiond)")
        if (operacionMate=="suma") {
           alert(`El resultado de la suma es ${numero1+numero2}`)
        }else if(operacionMate=="resta"){
            alert(`El resultado de la resta es ${numero1-numero2}`)
        }else{
            alert(`El resultado de la multiplicacion es ${numero1*numero2}`)
        }
    }else{
        alert('EL segundo numero no puede ser 0')
    }
}
let nro1 = Number( prompt("Ingrese una numero"))
let nro2 = Number( prompt("Ingrese otro numero") )
operacion(nro1,nro2) */
