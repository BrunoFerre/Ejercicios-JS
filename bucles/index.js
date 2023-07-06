/* function multiplo(numero) {
   for(let i=1;i<=10;i++){
    console.log(numero*i);
   }
}
multiplo(3)
 */
/* ejercicio 2 */
/* let numero = Number(prompt("Ingrese numero"))
let Numeros=[]
let contador =1 
while (numero !=0) {
   Numeros.push(numero)
   numero = Number(prompt("Ingrese numero"))
   console.log(Numeros);
}

 let ultimoNumero = Numeros[Numeros.length-1]
console.log(`El ultimo numero fue ${ultimoNumero}`)
let nroIngreso = Number(prompt("Ingrese un Numero para adivinar"))
if(nroIngreso==0 || nroIngreso==" "){
   alert("Usted no ingreso nada")
}else{
   while (nroIngreso != ultimoNumero && nroIngreso>=1 && nroIngreso<=100){
      contador++
      if (nroIngreso>ultimoNumero) {
         alert("Es mas grande")
      } else {
         alert("Es mas chico")
      }
      nroIngreso=Number(prompt("Ingrese un numero para adivinar"))
   }
   alert(`Ganaste en ${contador} intentos`)
} 
 */
// ejercicio 4
/* let introduce = prompt("Escribe un número")
 let numeros

 for (numeros = 2; numeros < introduce / 2; numeros++) {
     if (introduce % numeros === 0) {
         console.log(numeros, " lo divide ")
     }
 } */


//  ejercicio 5
/* let elementos =["Bruno","Gabriel","Juli","Fabri","Marian","Maxi","Isa","Alanis","Fede","Lucre"]

for(let elemento of elementos){
   console.log(elemento);
}

 */
/*ejercicio 6  */
 const numeros = [2,4,6,3,6,4,8,9,6,3]

// for (let numero of numeros) {
//     console.log(numero*2);
// }

/* ejercicio 7 */
/* let arrayFamilia=[
   {
       Familia:"Messi",
       NombrePadre:"Lionel",
       NombreMadre:"Antonella",
       Hijos:["Ciro","Mateo","Thiago"]     
   },
   {
       Familia:"Di Maria",
       NombrePadre:"Angel",
       NombreMadre:"Jorgelina",
       Hijos:["Mia","Pia"]
   },
   {
       Familia:"Martinez",
       NombrePadre:"Dibu",
       NombreMadre:"Madhina",
       Hijos:["Santi","Ava"]
   },
   {
      Familia:"Otamendi",
      NombrePadre:"Nico",
      NombreMadre:"Celeste",
      Hijos:["Morena","Mia","Valentin"]
   },
   {
      Familia:"Scaloni",
      NombrePadre:"Lionel",
      NombreMadre:"Elisa",
      Hijos:["Ian","Noah"]
   }
]
let mensaje=""
for(let familia of arrayFamilia){
   mensaje=`Es la familia ${familia.Familia}, el papá se llama ${familia.NombrePadre},
   la mamá se llama ${familia.NombreMadre} y tienen ${familia.Hijos.length} hijos, ${familia.Hijos}`
   console.log(mensaje);
} */
/* ejercicio 9 */
/* const numerosPares=[]
const numerosImpares=[]
for (let i=0; i < numeros.length; i++) {
   const num= numeros[i]
   if (num % 2 === 0 ) {
      numerosPares.push(num)      
   }else{
      numerosImpares.push(num)
   }
}
console.log(numerosPares);
console.log(numerosImpares); */

/* ejercicio 10 */
 let numero = Number (prompt("Ingrese un numero"))
 let numCalculo = []
 let sumaPar = 0
 let sumaImpar = 0

 while (numero !=0){
     numCalculo.push(numero)
     numero = Number(prompt("Ingrese su numero"))
 }

 for (let i = 1; i<=numCalculo.length - 1; i++) {
     if(numCalculo[i] % 2 === 0){
         sumaPar += numCalculo[i] 
     }else{
         sumaImpar += numCalculo[i]
     }
 }

 console.log(sumaPar)
 console.log(sumaImpar)



/* ejercicio 11 */
const masGrande= Math.max(...numeros)
console.log(masGrande)