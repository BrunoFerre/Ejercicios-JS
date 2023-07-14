const cervezas = beers
/* ejercicio1 */
console.log(cervezas);
function filtrarCervezasPorAlcohol(cervezas, alcoholMaximo) {
    const cervezasFiltradas = cervezas.filter(function (cerveza) {
        return cerveza.abv <= alcoholMaximo;
    })
    return cervezasFiltradas;
}

const alcoholMaximo = 6

const cervezasFiltradas = filtrarCervezasPorAlcohol(cervezas, alcoholMaximo);

console.log(cervezasFiltradas);
/* ejercicio 2 */

function ejr2(cervezas) {
    cervezas.sort((a, b) => b.attenuation_level - a.attenuation_level)
    const masAlcohol = cervezas.slice(0, 10)
    return masAlcohol
}
const imprimirCer = ejr2(ejr2(cervezas))
console.log(imprimirCer)
/* ejercicio 3 */
function ejr3(cervezas) {
    cervezas.sort((a, b) => b.ibu - a.ibu)
    const masAlcohol = cervezas.slice(0, 10)
    return masAlcohol
}
const imprimirCerMenos = ejr2(ejr2(cervezas))
console.log(imprimirCer)

/* ejercicio 4 */
const ejr4 = (cervezas, atributo, orden) => {
    const cervezaMas = []
    if (typeof (cervezas[0][atributo]) === 'string') {
        console.log('es string')
        if (orden) {
            cervezas.sort((a, b) => {
                if (a[atributo] > b[atributo]) return 1;
                if (a[atributo] < b[atributo]) return -1;
                return 0;
            });
        } else {
            cervezas.sort((b, a) => {
                if (a[atributo] > b[atributo]) return 1;
                if (a[atributo] < b[atributo]) return -1;
                return 0;
            });
        }
    } else {
        console.log('es number')
        if (orden) {
            cervezas.sort((a, b) => a[atributo] - b[atributo])
        } else {
            cervezas.sort((b, a) => a[atributo] - b[atributo])
        }
    }

    for (let index = 0; index < 10; index++) {
        cervezaMas.push(cervezas[index])
    }
    return cervezaMas;
}
console.log(ejr4(cervezas, 'name', true))

/* ejercicio 5 */
const html = document.getElementById('cervezas')

let crearMaqueta = (arrayCervezas) => {
    return `<ul>
        <li>Name:${arrayCervezas.name}</li>
        <li>ABV:${arrayCervezas.abv}</li>
        <li>IBU:${arrayCervezas.ibu}</li>
    </ul>`
}



let filtrarMaqueta = (arrayCervezas) => {
    const arrayFiltrado = []
    let filtrandoArray = arrayCervezas.forEach(element => {
        arrayFiltrado.push(element.name, element.abv, element.ibu)
    });
    return arrayFiltrado
}
console.log(filtrarMaqueta(cervezas))


let imprimirMaqueta = (arrayCervezas) => {
    for (const element of arrayCervezas) {
        html.innerHTML += crearMaqueta(element)
    }
}
imprimirMaqueta(cervezas)