//Siempre los import van arriba de todo
// import productos from "./productos.js"

// import { productosMascotas, categorias } from "./productos.js" //nombrada
import { URL_PRODUCTOS } from "./config.js"
import { obtenerDatos } from "./productos.js"
import { renderizarProductos, filtrarPorTalle } from "./funciones.js"

// Referenciamos un elemento del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById("boton-evento")
const dialogo = document.getElementById("dialogo")
const carrito = document.getElementById("carrito")

// Arreglo de productos
const productosMascotas = await obtenerDatos(URL_PRODUCTOS)
const productoCarrito = []

//Escuchador
botonEvento.addEventListener('click', (evento) => {
    // console.log(evento)
    dialogo.showModal()
})

//Prueba de filtrado, con productos talla M
const productoFiltrado = filtrarPorTalle(productosMascotas, "M")
console.log(productoFiltrado)

// 1) Renderizamos
renderizarProductos(contenedorProductos, productoFiltrado)

// 2) Asignar eventos a boton del carrito (se aplcian los listeners)
const botonesCarrito = contenedorProductos.querySelectorAll('.boton-carrito')
console.log(botonesCarrito)

botonesCarrito.forEach((boton) => {
    // Cuerpo forEach
    boton.addEventListener('click', (evento) => {
        // Cuerpo del callback listener
        const idProducto = parseInt(boton.dataset.id)
        console.log(idProducto)
        productoCarrito.push(idProducto)
        console.log(productoCarrito)
        carrito.textContent = productoCarrito.length
    })
})