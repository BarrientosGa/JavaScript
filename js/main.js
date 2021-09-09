// Objetos y array
class CamisetaDeFutbol {
    constructor(idArg, nombreArg, marcaArg, precioArg, esDestacadaArg, talleArg, imgArg) {
        this.id = idArg;
        this.nombre = nombreArg;
        this.marca = marcaArg;
        this.precio = precioArg;
        this.esDestacada = esDestacadaArg;
        this.talle = talleArg;
        this.img = imgArg;
    }
}

const camisetaDelPSG = new CamisetaDeFutbol(1, "Camiseta titular del PSG", "nike", 1000, true, "S", "img/camisetaDelPsg.jpg");
const camisetaDelBarcelona = new CamisetaDeFutbol(2, "Camiseta titular del Barcelona", "Nike", 1000, true, "M", "img/Camisetadelbarcelona.jpg");
const camisetaDelLiverpool = new CamisetaDeFutbol(3, "Camiseta suplente del Liverpool", "Nike", 2000, false, "L", "img/liverpool-2021-22-nike-away-kit-1.jpg");
const camisetaDelBayer = new CamisetaDeFutbol(4, "Camiseta suplente del B. Munich", "Adidas", 2000, false, "S", "img/bayern-munich-2021-22-adidas-away-kit-1.jpg");
const camisetaDeBoca = new CamisetaDeFutbol(5, "Camiseta titular de Boca", "Adidas", 2000, false, "M", "img/Tercera_Camiseta_Boca_Juniors_20-21_Azul_GK3096_01_laydown.jpg");
const camisetaDelArsenal = new CamisetaDeFutbol(6, "Camiseta titular del Arsenal", "Adidas", 2000, false, "L", "img/camiseta-adidas-arsenal-fc-authentic-primera-equipacion-2020-2021-active-maroon-white-0-500x500.jpg");
const camisetaDelManchesterCity = new CamisetaDeFutbol(7, "Camiseta titular del Man. City 2021/2022", "Puma", 3000, false, "S", "img/manchester-city-2021-22-puma-home-kit-1.jpg");
const camisetaDelMilan = new CamisetaDeFutbol(8, "Camiseta titular del Milan", "Puma", 3000, false, "M", "img/ac-milan-2021-22-puma-home-kit-10.jpg");
const camisetaDelBorussiaDortmund = new CamisetaDeFutbol(9, "Camiseta titular del B. Dortmund", "Puma", 3000, false, "L", "img/borussia-dortmund-2021-22-puma-home-kit-1-1.jpg");
const camisetaDelNapoli = new CamisetaDeFutbol(10, "Camiseta titular del Napoli", "Kappa", 1000, false, "S", "img/camiseta-napoli-maradona1-41c17425bde837116616246266614865-640-0.jpg");
const camisetaDelRacing = new CamisetaDeFutbol(11, "Camiseta titular de Racing", "Kappa", 1000, false, "M", "img/600_600-K236165LW-K902I_kombat_player_jersey_regular_2021_azure_blue_talle_S_1.jpg");
const camisetaDelGenoa = new CamisetaDeFutbol(12, "Camiseta titular del Genoa", "Kappa", 1000, false, "L", "img/D_NQ_NP_796356-MLA42265507308_062020-O.jpg");

//console.log(camisetaDelPSG);

const camisetasDeFutbol = [];
camisetasDeFutbol.push(camisetaDelPSG, camisetaDelBarcelona, camisetaDelLiverpool, camisetaDelBayer, camisetaDeBoca, camisetaDelArsenal, camisetaDelManchesterCity, camisetaDelMilan,
    camisetaDelBorussiaDortmund, camisetaDelNapoli, camisetaDelRacing, camisetaDelGenoa);
//console.log(camisetasDeFutbol);
//Fin de objetos y array




//Primera entrega del proyecto final

const camisetasQueValenMil = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio === 1000);
//console.log(camisetasQueValenMil);

const aumentoDePrecio = camisetasDeFutbol.map(camisetaDeFutbol => camisetaDeFutbol.precio + 500);
//console.log(aumentoDePrecio);

const barraDeBusqueda = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.nombre.includes("P"));
//console.log(barraDeBusqueda);


// Numero del carrito
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
    localStorage.getItem("CantidadDeArticulos");
}


// Filtro destacado
let idDestacado = document.getElementById("destacadoFiltro");
idDestacado.addEventListener("click", filtrarCamisetasDestacadas);
const camisetasDestacadas = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.esDestacada == true);
let idContenedorCamisetas = document.getElementById("contenedorDeCamisetas");
//let idPSG = document.getElementById("camisetaDelPSG");


function filtrarCamisetasDestacadas() {
    eliminarCamisetas()
    camisetasDestacadas.forEach(
        camisetaDeFutbol => {
            let div = document.createElement("div");
            div.classList.add = "camiseta";
            div.innerHTML = 
                                `<div class="camiseta">
                                <img src=${camisetaDeFutbol.img}>
                                <p>${camisetaDeFutbol.nombre}</p>
                                <p class="precio-camiseta">${camisetaDeFutbol.precio}</p>
                                <a href="#" class="comprarArticulos">Comprar articulo</a>
                                </div>`
                                
            idContenedorCamisetas.appendChild(div);
            
        })
}

function eliminarCamisetas(){
    idContenedorCamisetas.innerHTML= " ";
    //idPSG.parentNode.removeChild(idPSG)
}





/*
respuesta = producto.filter(el => el.nombre.toLowerCase() == busqueda.toLowerCase())
acumulador = ""
*/

/* 
acumulador = ""
respuesta.forEach(el => {
    acumulador += `<h1>${el.nombre}</h1>
    <p>${el.descripcion}</p>`})
document.getElementById("contenedor").innerHTML = acumulador
*/