class Pizza {
    constructor (id, nombre, ingredientes, precio) {
        this.id = id;
        this.nombre= nombre;
        this.ingredientes= ingredientes;
        this.precio = precio; 
    }
     
}; 

const pizzas = [];

const mozzarella = new Pizza (1, ' Mozarella', ['Salsa de tómate', 'Mozarella', 'Aceitunas verdes'], 1800);

const napolitana = new Pizza (2, ' Napolitana', ['Salsa de tómate', 'Mozarella', 'Tomate fresco', 'Ajo'], 1980);

const brocoli = new Pizza (3, ' Brócoli y Gruyere', ['Salsa blanca', 'Gruyere', 'Aceitunas negras', 'Brocoli'], 2650);

const jamon = new Pizza (4, ' Jamón y Morrones', ['Salsa de tómate', 'Mozarella', 'Jámon', 'Morrones'], 2400);

const provolone = new Pizza (5, ' Provolone', ['Salsa de tómate', 'Mozarella', 'Provolone', 'Aceitunas negras'], 2500);

const pepperoni = new Pizza (6, ' Pepperoni', ['Salsa de tómate', 'Mozarella', 'Pepperoni', 'Aceitunas verdes'], 2650);

pizzas.push(mozzarella, napolitana, brocoli, jamon, provolone, pepperoni); 

pizzas.forEach((pizza) => {
    console.log(`Pizza: ${pizza.nombre} ID: ${pizza.id}`)
})

// Variables 
const input = document.getElementById('input-texto')
const elementList = document.querySelector('.ul')
const btnAgregar = document.getElementById('btn-agregar')

// Métodos

//Trea elementos del LS y guardar 

let pizzaList = JSON.parse(localStorage.getItem('pizzaList')) || [];

const guardarLS = () => {
    localStorage.setItem('pizzaList', JSON.stringify(pizzaList))
}




// Creo mi elemento 

const crearPizza = pizza => 
`
<li class="li"> 
    <h2> Pizza: ${pizza[0].nombre} </h2>
    <h3> Precio: $ ${pizza[0].precio} </h3>
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

//renderizo 

const renderPizza = (pizza) => {    
    if (pizza.length) {
        elementList.innerHTML += crearPizza(pizza)
    }else {
        elementList.innerHTML += mensajeVacio()
    } 
    
} 

// Lógica detras




const agregarLi = e => {
    e.preventDefault();
    let liValue = input.value;
    if(liValue.length)  { //que no esté vacio 
        let pizzaElement = pizzas.filter( pizza => pizza.id == liValue)
        renderPizza(pizzaElement)
    } else {
        elementList.innerHTML += mensajeError()
    }
    
}


// Init con mis funciones

const init = () => {
    guardarLS(pizzas)
    btnAgregar.addEventListener('click', agregarLi)
    
}

init()