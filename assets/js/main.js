const botonUno = document.getElementById("btnUno")
const botonDos = document.getElementById("btnDos")
const botonTres = document.getElementById("btnTres")


//personajes populares
async function mostrarPopulares(){
    const urlAPI = await fetch("https://swapi.dev/api/people/")
    const data = await urlAPI.json()

    let personajesPopulares = data.results
    let elementos = document.getElementById('personajes')
    elementos.style.display = "flex"

    const crearCard = ({name, height, mass}) => {
        return `
        <div class="card mb-3" style="max-width: 540px;" id="card-populares">
        <div class="row g-0">
          <div class="col-md-4">
            <p class="circulo-rojo"></p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Estatura: ${height} cm</p>
              <p class="card-text">Peso: ${mass} kg</p>
            </div>
          </div>
        </div>
      </div>
        `
    }
    
    let htmlDos = ""
    let html = ""

    for(let i=0; i<5; i++){
        html += crearCard(personajesPopulares[i])
    }

    htmlDos += `
    <div class="card mb-3" style="max-width: 620px;" id="card-populares">
    <div class="row g-0">
      <div class="col-md-4">
        <p class="circulo-rojo"></p>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">En esta sección...</h5>
          <p class="card-text">Encontraras información sobre los personajes más populares de las películas.</p>
        </div>
      </div>
    </div>
  </div>
    `

    elementos.innerHTML = htmlDos + html

}

//función para ocultar las cards
function ocultarPopulares(){
    let elementos = document.getElementById('personajes')
    elementos.style.display = "none"
}

botonUno.onmouseover = mostrarPopulares
botonUno.onmouseout = ocultarPopulares



//****************************** */
//personajes secundarios
async function mostrarSecundarios() {
    const urlAPIMedianos = await fetch("https://swapi.dev/api/people/")
    const data = await urlAPIMedianos.json()

    let personajesSecundarios = data.results
    let elementos = document.getElementById('personajes')
    elementos.style.display = "flex"

    const crearCard = ({name, height, mass}) => {
        return `
        <div class="card mb-3" style="max-width: 540px;" id="card-secundarios">
        <div class="row g-0">
          <div class="col-md-4">
            <p class="circulo-verde"></p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Estatura: ${height} cm</p>
              <p class="card-text">Peso: ${mass} kg</p>
            </div>
          </div>
        </div>
      </div>
        `
    }

    let htmlDos = ""
    let html = ""

    for(let i=5; i<10; i++){
        html += crearCard(personajesSecundarios[i])
    }

    htmlDos += `
    <div class="card mb-3" style="max-width: 540px;" id="card-secundarios">
    <div class="row g-0">
      <div class="col-md-4">
        <p class="circulo-verde"></p>
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">En esta sección...</h5>
        <p class="card-text">Encontraras información sobre personajes secundarios importantes.</p>
        </div>
      </div>
    </div>
  </div>
    `

    elementos.innerHTML = htmlDos + html
}


//función para ocultar las cards
function ocultarSecundarios(){
    let elementos = document.getElementById('personajes')
    elementos.style.display = "none"
}

botonDos.onmouseover = mostrarSecundarios
botonDos.onmouseout = ocultarSecundarios




//****************************** */
//personajes significativos
async function mostrarSignificativos(){
    const url = await fetch("https://swapi.dev/api/people/?page=2")
    const data = await url.json()

    let personajesSignificaticos = data.results

    let elementos = document.getElementById('personajes')
    elementos.style.display = "flex"

    const crearCard = ({name, height, mass}) => {
        return `
        <div class="card mb-3" style="max-width: 540px;" id="card-significativos">
        <div class="row g-0">
          <div class="col-md-4">
            <p class="circulo-azul"></p>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">Estatura: ${height} cm</p>
              <p class="card-text">Peso: ${mass} kg</p>
            </div>
          </div>
        </div>
      </div>
        `
    }

    let htmlDos = ""
    let html = ""

    for(let i=1; i<6; i++){
        html += crearCard(personajesSignificaticos[i])
    }

    htmlDos += `
    <div class="card mb-3" style="max-width: 540px;" id="card-significativos">
    <div class="row g-0">
      <div class="col-md-4">
        <p class="circulo-azul"></p>
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">En esta sección...</h5>
        <p class="card-text">Encontraras otros personajes significativos.</p>
        </div>
      </div>
    </div>
  </div>
    `
    elementos.innerHTML = htmlDos + html

}

//función para ocultar las cards
function ocultarSignificativos(){
    let elementos = document.getElementById('personajes')

    elementos.style.display = "none"
}

botonTres.onmouseover = mostrarSignificativos
botonTres.onmouseout = ocultarSignificativos
