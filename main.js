// * objetos /*

const pizza = [ 
    {
    id: 1,
    nombre: 'Muzzarella',
    ingredientes: ['Queso', 'Oregano', 'Salsa'],
    precio: 500,
    
    },
    {
    id: 2,
    nombre: 'Fugazzeta',
    ingredientes: ['Queso', 'Cebolla'],
    precio: 600,
    },
    {
    id: 3,
    nombre: 'Jamon y Morron',
    ingredientes: ['Queso', 'Jamon', 'Morron',],
    precio: 950,
    },
    {
    id: 4,
    nombre: 'Napolitana',
    ingredientes: ['Queso', 'Tomate', 'Provenzal', 'Perejil'],
    precio: 1000,
    },
    {
    id: 5,
    nombre: 'Cancha',
    ingredientes: ['Salsa'],
    precio: 300,
    },
    {
    id: 6,
    nombre: 'Calabresa',
    ingredientes: ['Salsa', 'Calabresa', 'Queso'],
    precio: 1500,
    },
];

// a) Las pizzas que tengan un id impar. //


const pizzaImpar = pizza.map((pizzaIdent) => {
    if (pizzaIdent.id % 2) {
        return pizzaIdent;
    }
});

console.log(pizzaImpar);





// b) ¿Hay alguna pizza que valga menos de $600? //

const pizzaMenores = pizza.map((pizzaMenosSeiscientos) => {
    if (pizzaMenosSeiscientos.precio < 600) {
    return pizzaMenosSeiscientos;
}
});

console.log(pizzaMenores);


// c) Los nombres de todos las pizzas.

const nombrePizza = () =>
    pizza.forEach((nombrePizza) =>
    console.log(`Pedite: ${nombrePizza.nombre}`)
    
);

nombrePizza();


// d) Los precios de las pizzas - // 
// e) El nombre de cada pizza con su respectivo precio.

const nombreyPrecioPizza = () =>
pizza.forEach((detallePizza) =>
    console.log(`Tenemos ${detallePizza.nombre} y te sale son $${detallePizza.precio} `)
);

nombreyPrecioPizza();