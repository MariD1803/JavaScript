class Pizza {
    constructor (id, nombre, ingredientes, precio, urlImg) {
        this.id = id;
        this.nombre= nombre;
        this.ingredientes= ingredientes;
        this.precio = precio;
        this.urlImg = urlImg;
    }
     
}; 

const pizzas = [];

const mozzarella = new Pizza (1, ' Mozarella', ['Salsa de tómate', 'Mozarella', 'Aceitunas verdes'], 1800, './img/muzarella.png');

const napolitana = new Pizza (2, ' Napolitana', ['Salsa de tómate', 'Mozarella', 'Tomate fresco', 'Ajo'], 1980,'./img/napolitana.png');

const brocoli = new Pizza (3, ' Brócoli y Gruyere', ['Salsa blanca', 'Gruyere', 'Aceitunas negras', 'Brocoli'], 2650, './img/brocoli.png');

const jamon = new Pizza (4, ' Jamón y Morrones', ['Salsa de tómate', 'Mozarella', 'Jámon', 'Morrones'], 2400, './img/morron.png');

const provolone = new Pizza (5, ' Provolone', ['Salsa de tómate', 'Mozarella', 'Provolone', 'Aceitunas negras'], 2500, './img/provolone.png');

const pepperoni = new Pizza (6, ' Pepperoni', ['Salsa de tómate', 'Mozarella', 'Pepperoni', 'Aceitunas verdes'], 2650, './img/pepperoni.png');

pizzas.push(mozzarella, napolitana, brocoli, jamon, provolone, pepperoni); 

pizzas.forEach((pizza) => {
    console.log(`Pizza: ${pizza.nombre} ID: ${pizza.id}`)
})

// Variables 
const input = document.getElementById('input-texto')
const elementList = document.querySelector('.ul')
const btnAgregar = document.getElementById('btn-agregar')

//Defino mis etiquetas


const crearPizza = pizza => 
`
<li class="li"> 
    <div id="div_titulo">
        <div>            
            <img src=${pizza[0].urlImg} alt="img_pizza" class="img">
        </div>
        
    </div>
    <div id="div_ingredientes">
    
        <div>
            <h2> Pizza: ${pizza[0].nombre} </h2>            
        </div>
        <h2> Ingredientes:</h2>
        <div> 
            <ul id="ul_ing">
                ${pizzaIngredientes(pizza[0])}
            </ul>
        </div>
        <h3> Precio: $ ${pizza[0].precio} </h3>
    </div>
</li>
`

const mensajeVacio = () => 
`
<li class="li"> 
    <h2> No existe un ID con ese número</h2>
</li>
`

const mensajeError = () => 
`
<li class="li"> 
    <h2> Por favor ingresar un valor</h2>
</li>
`
// Métodos

const pizzaIngredientes = (pizza) => {
    let ingredientes = pizza.ingredientes.reduce((acumulador, ingrediente) => { return acumulador+"<li class='li_ing'>"+ingrediente+"</li>"})
    return ingredientes
}


const renderPizza = (pizza) => {    
    if (pizza.length) {
        elementList.innerHTML = crearPizza(pizza)
        localStorage.setItem("pizzaSolicitadaId", pizza[0].id)
    }else {
        elementList.innerHTML = mensajeVacio()
    } 
    
} 

//Traer elementos del LS y guardar
const pizzaPreseleccionada = localStorage.getItem("pizzaSolicitadaId") 

if (pizzaPreseleccionada != null) {
    let pizzaElement = pizzas.filter( pizza => pizza.id == pizzaPreseleccionada)
    renderPizza(pizzaElement)
    input.value = pizzaPreseleccionada

}

let pizzaList = JSON.parse(localStorage.getItem('pizzaList')) || [];

const guardarLS = () => {
    localStorage.setItem('pizzaList', JSON.stringify(pizzaList))
} 


// Lógica detras




const agregarLi = e => {
    e.preventDefault();
    let liValue = input.value;
    if(liValue.length)  { //que no esté vacio 
        let pizzaElement = pizzas.filter( pizza => pizza.id == liValue)
        renderPizza(pizzaElement)
    } else {
        elementList.innerHTML = mensajeError()
    }
    
}

// Init con mis funciones

const init = () => {
    guardarLS(pizzas)
    btnAgregar.addEventListener('click', agregarLi)
    
}

init()