// Forma 1: async / await
// Obtener los datos de los productos almacenados en JSON
async function obtenerDatos(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    return datos
}
const productosMascotas = await obtenerDatos()

// Forma 2: 
obtenerDatos().then ((datos) =>{
    console.log(datos)
  /*


  */
})
console.log(productosMascotas)

// const respuesta = await fetch('./recursos/datos/productos.json')
// const datos = await respuesta.json() // <-- 1) obtiene los datos del cuerpo - 
//                                     // 2) transforma un objeto JSON (bien formado) a un objeto js
// console.log(datos)

//Dos maneras de exportar
// 1: Exportación no nombrada -> solo puede haber una sola
export default productosMascotas

// 2: Exportación nombrada -> las que sean necesarias
export { productosMascotas, categorias }