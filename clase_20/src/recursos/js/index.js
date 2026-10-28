//Siempre los import van arriba de todo
// import productos from "./productos.js"

import {productosMascotas, categorias} from "./productos.js" //nombrada
import { renderizarProductos, filtrarPorTalle } from "./funciones.js"

// Referenciamos un elemento del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")
const EventoBoton = document.getElementById("EventoBoton")
const dialogo = document.getElementById("dialogo")
// Arreglos

const productosCarrito = [] // push -->




//escuchador
EventoBoton.addEventListener('click', (evento)=> {
    //   console.log(evento)
        //  dialogo.show()
        dialogo.showModal()
})


//Prueba de filtrado, con productos talla M
const productoFiltrado = filtrarPorTalle (productosMascotas, "M")
console.log (productoFiltrado)

// 1)Renderizamos
renderizarProductos(contenedorProductos, productoFiltrado)
// 2) Aplicamos los escuchadores
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carrito')
botonesCarro.forEach((boton) => {
     //cuerpo forEach
    boton.addEventListener('click', (evento)=> {
        // cuerpo del callback listener
        const idProducto = boton.dataset.id
        console.log(idProducto)
    })
})