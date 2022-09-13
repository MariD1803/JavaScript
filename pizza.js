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

//Problema A- Las pizza con id impar//

const pizzaImp = pizzas.filter( (e) => e.id%2 != 0)

console.log(`A) Las pizza que tienen un ID impar son: ${pizzaImp.map( e => e.nombre )}`)

//Problema B- Hay alguna pizza con precio menor a $600//

const pizzaBarata = pizzas.some ( e => e.precio <= 600)

var pizzaCon = 'Si'

if (pizzaBarata == false) {
    pizzaCon = 'No'
}

console.log(`B) Hay alguna pizza menor a $600: ${pizzaCon}`)

//Problema C - El nombre de cada pizza y su precio y //Problema D -  Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual)////
console.log("C y D) -----------------------Menú------------------------------")


for (i=0; i< pizzas.length; i++) {
    console.log("Pizza: " + pizzas[i].nombre )
    console.log("Precio: $" + pizzas[i].precio)
    console.log("Ingredientes: ")
    for (j=0; j< pizzas[i].ingredientes.length; j++){
        console.log("-"+pizzas[i].ingredientes[j])
    }
    console.log("----------------------------------------------------------")
}






