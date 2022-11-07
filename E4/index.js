const url = "https://pokeapi.co/api/v2/pokemon/"
const input = document.getElementById('input-texto')
const elementList = document.querySelector('.ul')
const btnAgregar = document.getElementById('btn-agregar')

const calcularTamaño = (e) => {
    let value = e / 10;
    return value
}



const mensajeVacio = () => 
`
<li class="li"> 
    <h2 class="letraDescripcion"> No existe un <span class="letraPokemon">Pokemon</span> con ese número de ID</h2>
</li>
`

const mensajeError = () => 
`
<li class="li"> 
    <h2 class="letraDescripcion"> Por favor ingresar un valor para tu <span class="letraPokemon">Pokemon</span></h2>
</li>
`

const buscarPokemon = async () => {
    const id = input.value;
    if (id.length == 0) {        
        elementList.innerHTML = mensajeError()
        return
    }
    const pokemon = await fetch(url+id); 
    if (pokemon.status == 404) {       
        elementList.innerHTML = mensajeVacio()
        return
    }
    const data = await pokemon.json();
    const html =
    `
    <li class="li"> 
            <div id="div_titulo">
            <div>            
                <img src=${data.sprites.other.home.front_default} alt="img_pokemon" class="img">
            </div>
        
        </div>
        <div id="div_datos">
            <h2 class="letraPokemon"> Nombre: ${data.name} </h2>        
           
            <h3 class="letraDescripcion"> Tipo/s: ${data.types.map((e) => e.type.name )} </h3>
            <h3 class="letraDescripcion"> Altura: ${calcularTamaño(data.height)} metros</h3>
            <h3 class="letraDescripcion"> Peso: ${calcularTamaño(data.weight)} kilogramos</h3>
        </div>
    </li>
    `
    elementList.innerHTML = html
    console.log(data)
    return data
}


const init = () => {
 
    btnAgregar.addEventListener ('click', buscarPokemon)
    
}

init()