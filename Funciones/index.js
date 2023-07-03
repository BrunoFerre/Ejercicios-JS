// 
function saludar(nombre) {
    console.log("ejercicio 1");
    console.log(`Hola ${nombre}`);
    console.log("----------------");
}
saludar("Bruno")

// ejercicio 2
function  multiplicar(a,b) {
    console.log("ejercicio 2");
    let resultado = a*b
    console.log(`El resultado es ${resultado}`);
    console.log("----------------");
}
multiplicar(3,4)

// ejercicio 3
function areaTriangulo(base,altura) {
    console.log("ejercicio 3");
    let resultado = base*altura/2
    console.log("EL area es "+resultado);
    console.log("----------------");
}
function  perimetroTrianulo(lado1,lado2,lado3) {
    return lado1+lado2+lado3
}
areaTriangulo(5,3)
perimetroTrianulo(4,5,6)

// ejercicio 4
function esMayorDeEdad(edad) {
    console.log("ejercicio 4");
    if(edad>=18){
        console.log("Eres mayor de edad con "+ edad);
    }else{
        console.log("No sos mayor de edad ");
    }
    console.log("----------------");
}
esMayorDeEdad(19)
function calcularImpuestos(ingresoAnual) {
    if (ingresoAnual > 20000) {
      return ingresoAnual * 0.2;
    } else if (ingresoAnual > 10000) {
      return ingresoAnual * 0.15;
    } else {
      return ingresoAnual * 0.1;
    }
  }
let impuestos= calcularImpuestos(23000)
console.log(`El impuesto a pagar es ${impuestos}`);
console.log("----------------");
// ejercicio 7
function verificarDia(numeroDia) {
    if(numeroDia>=1 && numeroDia <=5){
        console.log("Es un dia laboral");
    }else{
        console.log("No es dia laboral");
    }
}
verificarDia(3)