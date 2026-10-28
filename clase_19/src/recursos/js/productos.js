const productosMascotas = [
  {
    nombre: "Collar ajustable para perros",
    imagen: "./recursos/imagenes/productos/collar.jpg",
    descripcion: "Cómodo collar ajustable de nailon resistente para paseos seguros diarios.",
    talles: ["S", "L"],
    precio: 15.99
  },
  {
    nombre: "Correa extensible automática",
    imagen: "./recursos/imagenes/productos/correa.jpg",
    descripcion: "Correa retráctil resistente con freno seguro y diseño ergonómico moderno.",
    talles: ["M", "L"],
    precio: 24.50
  },
  {
    nombre: "Cama acolchada para mascotas",
    imagen: "./recursos/imagenes/productos/cama.jpg",
    descripcion: "Suave cama redonda y cálida ideal para descanso de perros.",
    talles: ["L"],
    precio: 35.00
  },
  {
    nombre: "Arnés antitirones acolchado",
    imagen: "./recursos/imagenes/productos/arnes.jpg",
    descripcion: "Arnés cómodo que evita tirones durante los paseos con mascotas.",
    talles: ["S", "M", "L"],
    precio: 22.99
  },
  {
    nombre: "Abrigo impermeable para lluvia",
    imagen: "./recursos/imagenes/productos/abrigo-lluvia.jpg",
    descripcion: "Chaqueta impermeable con capucha para proteger perros en días lluviosos.",
    talles: ["S", "M"],
    precio: 18.75
  },
  {
    nombre: "Suéter tejido de lana",
    imagen: "./recursos/imagenes/productos/sweater.jpg",
    descripcion: "Cálido suéter tejido a mano perfecto para días de invierno.",
    talles: ["S", "L"],
    precio: 16.50
  },
  {
    nombre: "Pañuelo bandana estilizado",
    imagen: "./recursos/imagenes/productos/bandana.jpg",
    descripcion: "Bandana de algodón suave con estampados divertidos para mascotas felices.",
    talles: ["M", "L"],
    precio: 8.99
  },
  {
    nombre: "Chaleco salvavidas canino",
    imagen: "./recursos/imagenes/productos/salvavidas.jpg",
    descripcion: "Chaleco flotador ajustable con asa resistente para seguridad en piscina.",
    talles: ["M", "L"],
    precio: 29.99
  },
  {
    nombre: "Disfraz melena de león",
    imagen: "./recursos/imagenes/productos/disfraz.jpg",
    descripcion: "Divertida peluca con orejas para transformar a tu perro fácilmente.",
    talles: ["M"],
    precio: 14.25
  },
  {
    nombre: "Botitas protectoras antideslizantes",
    imagen: "./recursos/imagenes/productos/botitas.jpg",
    descripcion: "Zapatos protectores de goma antideslizante para cuidar las patas caninas.",
    talles: ["M"],
    precio: 19.99
  }
];

const categorias = [
  'Ropa'
]

//Dos maneras de exportar
// 1: Exportación no nombrada -> solo puede haber una sola
export default productosMascotas

// 2: Exportación nombrada -> las que sean necesarias
export {productosMascotas, categorias}