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

const camisetasQueValenMil= camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio===1000);
console.log(camisetasQueValenMil);

const aumentoDePrecio= camisetasDeFutbol.map(camisetaDeFutbol => camisetaDeFutbol.precio + 500);
console.log(aumentoDePrecio);

const camisetasDestacadas= camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.esDestacada == true);
console.log(camisetasDestacadas);

const barraDeBusqueda= camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.nombre.includes("P"));
console.log(barraDeBusqueda);

//
