const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// a) Pizzas que tenga un id impar

const idImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 === 1  ;
});

idImpares.forEach ( (pizza) => {
  console.log (` La ${pizza.nombre} tiene id impar `)
})

 //b) Pizza que valga menos de $600

 const hayPizzasConPrecioMenorA = (precio) => {
  return pizzas.some ((pizza) => {
    return pizza.precio < precio;
  }) ? console.log ( `Hay pizzas con precio menor a $${precio}`)
  : console.log (`No hay productos con precio menor a $${precio}`);
 };
  
 hayPizzasConPrecioMenorA (600);

 //c) El nombre de cada pizza con su respectivo precio 

 const pizzasConSuPrecio = pizzas.map((pizza) => {
  return {
    ...pizza,
    precio: pizza.precio
  };
 });

 pizzasConSuPrecio.forEach((pizza)=> {
  console.log(`El precio de ${pizza.nombre} es de $${pizza.precio}`);
 });
 
 //d) Todos los ingredientes de cada pizza

 const ingredientesPizzas = pizzas.map ((pizza) => {
  return {
    ...pizza,
    ingredientes: pizza.ingredientes
  };
 });
 ingredientesPizzas.forEach((pizza)=> {
  console.log(`La ${pizza.nombre} contiene ${pizza.ingredientes}`);
 });
