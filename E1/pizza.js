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

console.log("Las pizzas con ID impar son: ")
const pizzaImp = pizzas.filter( (pizza) => pizza.id%2 != 0);
  pizzaImp.forEach((pizza) =>
  console.log(`La ${pizza.nombre} tiene un id impar`)
);

console.log("                                        ")

//Problema B- Hay alguna pizza con precio menor a $600//

console.log("Hay alguna pizza menor a $600? ")
const pizzaBarata = (pizza) => pizza.precio < 600;

if (pizzas.some(pizzaBarata)) {
    console.log("Si, hay pizzas con precio menor a $600");
  } else {
    console.log("No, no hay pizzas con precio menor a $600");
}

console.log("                                        ")

//Problema C - El nombre de cada pizza y su precio y //Problema D -  Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual)////
console.log("-----------------------Menú------------------------------")


pizzas.forEach((pizza) => {
  console.log(`Pizza: ${pizza.nombre} Precio: $ ${pizza.precio}`);
  console.log("                                                          ")
  console.log("Ingredientes: ")
  pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
  console.log("                                                          ")
});





