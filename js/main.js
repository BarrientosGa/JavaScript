// Objetos y array
class CamisetaDeFutbol {
    constructor(nombreArg, marcaArg, stockArg, precioArg, esDestacadaArg, talleArg) {
        this.nombre = nombreArg;
        this.marca = marcaArg;
        this.stock = stockArg;
        this.precio = precioArg;
        this.esDestacada = esDestacadaArg;
        this.talle = talleArg;
    }
    ventaDeCamiseta(cantidad) {
        if (cantidad > this.stock) {
            alert("solo contamos con esta cantidad: " + this.stock);
        } else {
            this.stock = this.stock - cantidad;
        }
    }

}

const camisetaDelPSG = new CamisetaDeFutbol("PSG", "nike", 2, 1000, true, "S");
const camisetaDelBarcelona = new CamisetaDeFutbol("Barcelona", "Nike", 5, 1000, true, "M");
const camisetaDelLiverpool = new CamisetaDeFutbol("Liverpool", "Nike", 10, 2000, false, "L")


const camisetasDeFutbol = [];
camisetasDeFutbol.push(camisetaDelPSG, camisetaDelBarcelona, camisetaDelLiverpool)
console.log(camisetasDeFutbol);
//Fin de objetos y array




//Primera entrega del proyecto final

const camisetasQueValenMil = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio === 1000);
console.log(camisetasQueValenMil);

const aumentoDePrecio = camisetasDeFutbol.map(camisetaDeFutbol => camisetaDeFutbol.precio + 500);
console.log(aumentoDePrecio);

const camisetasDestacadas = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.esDestacada == true);
console.log(camisetasDestacadas);

const barraDeBusqueda = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.nombre.includes("P"));
console.log(barraDeBusqueda);

//

/*
let edadDeUsuario=parseInt(prompt("Ingresa tu edad"));
let guardandoDato= localStorage.setItem("edad",edadDeUsuario);
let obtenerDato=localStorage.getItem("edad");
console.log(typeof obtenerDato);
*/

// Local storage y JSON
let objeto1 = {
    id: 1,
    producto: "Pan"
};
let guardarElDato = localStorage.setItem("objeto", objeto1);
let pasandoObjetoAString = JSON.stringify(objeto1);
console.log(pasandoObjetoAString);
let pasandoStringAObjeto = JSON.parse(pasandoObjetoAString);
console.log(pasandoStringAObjeto);


// Tarea de DOM
let articulos = document.getElementsByClassName("comprarArticulos");
let span = document.getElementById("cantidadDeCosasEnCarrito");
let carrito = span.innerHTML;
let carritoVacio = 0;

for (let i = 0; i < articulos.length; i++) {
    articulos[i].addEventListener("click", sumarUnoAlCarrito)
}

function sumarUnoAlCarrito() {
    carritoVacio += 1;
    carrito = `${carritoVacio}`;
    span.innerHTML = carrito;
    localStorage.setItem("CantidadDeArticulos", carritoVacio);
}