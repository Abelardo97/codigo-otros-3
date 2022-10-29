/**
 * El programa muestra un input en el cual se escribe el nombre de un producto
 * al presionar el boton se nops mostrará en una lista el producto y sus caracteristicas 
 * Paso 1: se arreglan las rutas en los links del html
 * Paso 2: Se arregla el diseño en el html
 *  Paso 3: las imagenes se colocan dentro de una carpeta
 * Paso 4: Se aplican las correspondientes modificaciones para que el código funcione
 * 
 */


// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/img/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/img/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/img/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/img/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/img/zapato-rojo.jpg"}
]

//Se renombran las variables
const lista = document.getElementsByName("lista-de-productos");
const input = document.querySelector('.input');

for (let i = 0; i < productos.length; i++) {
  //se cambia la variable por const, se agrega el ;
  const div = document.createElement("div");
  div.classList.add("producto");


  //se renombra la variable, se agrega ;
  const titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
  
  //se cambia la variable por const, se agrega el ;
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  //Se modifican nombres y se agrega ;
  div.appendChild(titulo);
  div.appendChild(imagen);

  lista.appendChild(div);
}

//Se corrige la funcion
function displayProductos(productos){
  const botonDeFiltro = document.querySelector("button");
 
  botonDeFiltro.onclick = function() {
    //se cambia le nombre de li
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }

    const texto = input.value;
    console.log(texto);
    const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    //Se corrige por const
    const div= document.createElement("div");
    div.classList.add("producto");
  
    //Se corrige por const
    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = productosFiltrados[i].nombre;
    
    //Se corrige por const
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    div.appendChild(titulo)
    div.appendChild(imagen)
  
    lista.appendChild(div)
  }
}

}


const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  