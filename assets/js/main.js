//https://swapi.dev/api/people/

const botonUno = document.getElementById("btnUno")
const botonDos = document.getElementById("btnDos")
const botonTres = document.getElementById("btnTres")


async function mostrarInfo(){
    const urlAPI = await fetch("https://swapi.dev/api/people/")
    const data = await urlAPI.json()

    let resultado = data.results

    const crearCard = ({name}) => {
        return `
            <div>
                <h2>${name}</h2>
            </div>
        `
    }

    let elementos = document.getElementById('personajes')
    let html = ""

    for(let i=0; i<5; i++){
        html += crearCard(resultado[i])
        console.log(resultado[i])
    }

    elementos.innerHTML = html

}


botonUno.onclick = mostrarInfo



async function mostrarMedianos() {
    const urlAPIMedianos = await fetch("https://swapi.dev/api/people/")
    const data = await urlAPIMedianos.json()

    let resultadoMedianos = data.results

    const crearCard = ({name}) => {
        return `
            <div>
                <h2>${name}</h2>
            </div>
        `
    }

    let elementos = document.getElementById('personajes')
    let html = ""

    for(let i=5; i<10; i++){
        html += crearCard(resultadoMedianos[i])
        console.log(resultadoMedianos[i])
    }

    elementos.innerHTML = html
}

botonDos.onclick = mostrarMedianos