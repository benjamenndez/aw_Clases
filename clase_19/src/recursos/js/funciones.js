function renderizarProductos(contenedor, /*es la referencia del DOM*/ productos /*es el arreglo*/) {

    let productosHTML = ''
    productos.forEach((producto) => {
        productosHTML += `
        <article>
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>
                    Talles: ${producto.talles.join(",")}
                </li>
                <li>
                    Precio $ ${producto.precio}
                </li>
            </ul>
            <button>Agregar al carrito</button>
        </article>
        `
    })
    contenedor.innerHTML = productosHTML
    return productosHTML
}

//Funcion de filtrado por talles
function filtrarPorTalle(arreglo, talle) {
    //filter -> solo deja pasar al nuevo arreglo, busca con bool si en el arreglo coincide con el talle que se busca
    const arregloFiltrado = arreglo.filter((producto) => {
        return producto.talles.includes(talle.toUpperCase()) //devuelve true o false
    })
    // retornar un arreglo filtrado
    return arregloFiltrado
}

// 2: Exportación nombrada -> las que sean necesarias
export { renderizarProductos, filtrarPorTalle }

