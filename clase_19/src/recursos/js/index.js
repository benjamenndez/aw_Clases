//Siempre los import van arriba de todo
// import productos from "./productos.js"

import {productosMascotas, categorias} from "./productos.js" //nombrada
import { renderizarProductos, filtrarPorTalle } from "./funciones.js"

// Referenciamos un elemento del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")



//Prueba de filtrado, con productos talla M
const productoFiltrado = filtrarPorTalle (productosMascotas, "M")
console.log (productoFiltrado)

//Renderizamos
renderizarProductos(contenedorProductos, productoFiltrado)
