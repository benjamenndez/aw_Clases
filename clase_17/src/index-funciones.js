// funciones 
// declaracion 
// function suma(a, b) { 
// //    console.log(a + b) 
//       return a + b
// }

// // invocar, ejecutar o llamar
// const resultado = suma(10 + 2)

// console.log(resultado)

//Funcion flecha -> anonima (sin identificador)
//fatarrow
// const resta = (a, b)=>{
//   return a - b
// }

// const resta = (a, b)=> a + b

//callback funcion que pasa como argumento de otra funcion
const a = (cb)=> {
    console.log('se ejecuto a')
    cb()
}
//nuestro callback
const b = ()=> {
   console.log('se ejecuto el callback b')
}
// console.log(b())
//a(b)
