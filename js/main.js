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

const camisetaDelPSG = new CamisetaDeFutbol(1, "Camiseta titular del PSG", "Nike", 1000, true, "S", "img/camisetaDelPsg.jpg");
const camisetaDelBarcelona = new CamisetaDeFutbol(2, "Camiseta titular del Barcelona", "Nike", 1000, true, "M", "img/Camisetadelbarcelona.jpg");
const camisetaDelLiverpool = new CamisetaDeFutbol(3, "Camiseta suplente del Liverpool", "Nike", 1000, false, "L", "img/liverpool-2021-22-nike-away-kit-1.jpg");
const camisetaDelBayer = new CamisetaDeFutbol(4, "Camiseta suplente del B. Munich", "Adidas", 2000, false, "S", "img/bayern-munich-2021-22-adidas-away-kit-1.jpg");
const camisetaDeBoca = new CamisetaDeFutbol(5, "Camiseta titular de Boca", "Adidas", 2000, false, "M", "img/Tercera_Camiseta_Boca_Juniors_20-21_Azul_GK3096_01_laydown.jpg");
const camisetaDelArsenal = new CamisetaDeFutbol(6, "Camiseta titular del Arsenal", "Adidas", 2000, false, "L", "img/camiseta-adidas-arsenal-fc-authentic-primera-equipacion-2020-2021-active-maroon-white-0-500x500.jpg");
const camisetaDelManchesterCity = new CamisetaDeFutbol(7, "Camiseta titular del Man. City", "Puma", 3000, false, "S", "img/manchester-city-2021-22-puma-home-kit-1.jpg");
const camisetaDelMilan = new CamisetaDeFutbol(8, "Camiseta titular del Milan", "Puma", 3000, false, "M", "img/ac-milan-2021-22-puma-home-kit-10.jpg");
const camisetaDelBorussiaDortmund = new CamisetaDeFutbol(9, "Camiseta titular del B. Dortmund", "Puma", 3000, false, "L", "img/borussia-dortmund-2021-22-puma-home-kit-1-1.jpg");
const camisetaDelNapoli = new CamisetaDeFutbol(10, "Camiseta titular del Napoli", "Kappa", 1000, false, "S", "img/camiseta-napoli-maradona1-41c17425bde837116616246266614865-640-0.jpg");
const camisetaDelRacing = new CamisetaDeFutbol(11, "Camiseta titular de Racing", "Kappa", 1000, false, "M", "img/600_600-K236165LW-K902I_kombat_player_jersey_regular_2021_azure_blue_talle_S_1.jpg");
const camisetaDelGenoa = new CamisetaDeFutbol(12, "Camiseta titular del Genoa", "Kappa", 1000, false, "L", "img/D_NQ_NP_796356-MLA42265507308_062020-O.jpg");



const camisetasDeFutbol = [];
camisetasDeFutbol.push(camisetaDelPSG, camisetaDelBarcelona, camisetaDelLiverpool, camisetaDelBayer, camisetaDeBoca, camisetaDelArsenal, camisetaDelManchesterCity, camisetaDelMilan,
    camisetaDelBorussiaDortmund, camisetaDelNapoli, camisetaDelRacing, camisetaDelGenoa);

//Fin de objetos y array

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
let filtroDestacado = document.getElementById("destacadoFiltro");
filtroDestacado.addEventListener("click", filtrarCamisetasDestacadas);
const camisetasDestacadas = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.esDestacada == true);
let idContenedorCamisetas = document.getElementById("contenedorDeCamisetas");

function filtrarCamisetasDestacadas() {
    vaciarContenedorDeCamisetas()
    agregarCamisetasDestacadas()
    
}

function vaciarContenedorDeCamisetas() {
    idContenedorCamisetas.innerHTML = " ";
}
function agregarCamisetasDestacadas(){
    camisetasDestacadas.forEach(
        camisetaDeFutbol => {
            let div = document.createElement("div");
            div.innerHTML =
                `<div class="camiseta">
                                <img src=${camisetaDeFutbol.img}>
                                <p>${camisetaDeFutbol.nombre}</p>
                                <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                                <a href="#" class="comprarArticulos">Comprar articulo</a>
                                </div>`

            idContenedorCamisetas.appendChild(div);

        })
} 

//Filtro por marca

//Nike
const filtroDeCamisetasNike= camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.marca == "Nike");
let filtroNike = document.getElementById("filtroNike");
filtroNike.addEventListener("click",filtrarCamisetasNike);

function filtrarCamisetasNike(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasNike()
}
function agregarCamisetasNike(){
    filtroDeCamisetasNike.forEach(camisetaDeFutbol => {
        let div = document.createElement("div");
        div.innerHTML = 
        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

//Adidas
const filtroDeCamisetasAdidas = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.marca == "Adidas");
let filtroAdidas = document.getElementById("filtroAdidas");
filtroAdidas.addEventListener("click",filtrarCamisetasAdidas);

function filtrarCamisetasAdidas(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasAdidas()
}
function agregarCamisetasAdidas(){
    filtroDeCamisetasAdidas.forEach(camisetaDeFutbol => {
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

//Puma
const filtroDeCamisetasPuma = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.marca == "Puma");
let filtroPuma = document.getElementById("filtroPuma");
filtroPuma.addEventListener("click",filtrarCamisetasPumas);

function filtrarCamisetasPumas(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasPumas()
}
function agregarCamisetasPumas(){
    filtroDeCamisetasPuma.forEach(camisetaDeFutbol => {
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

//Kappa
const filtroDeCamisetasKappa = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.marca == "Kappa");
let filtroKappa = document.getElementById("filtroKappa");
filtroKappa.addEventListener("click",filtrarCamisetasKappa);

function filtrarCamisetasKappa(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasKappa()
}
function agregarCamisetasKappa(){
    filtroDeCamisetasKappa.forEach(camisetaDeFutbol => {
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

// Filtro por precio

// $1000
const filtroDeCamisetasQueSalenMil = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio == 1000);
let filtroIgualA1000 = document.getElementById("filtro1000");
filtroIgualA1000.addEventListener("click",filtrarCamisetasQueSalen1000)


function filtrarCamisetasQueSalen1000(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasQueValen1000()
}
function agregarCamisetasQueValen1000(){
    filtroDeCamisetasQueSalenMil.forEach(camisetaDeFutbol =>{
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

// $2000
const filtroDeCamisetasQueSalenDosMil = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio == 2000);
let filtroIgualA2000 = document.getElementById("filtro2000");
filtroIgualA2000.addEventListener("click",filtrarCamisetasQueSalen2000);

function filtrarCamisetasQueSalen2000(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasQueValen2000()
} 
function agregarCamisetasQueValen2000(){
    filtroDeCamisetasQueSalenDosMil.forEach(camisetaDeFutbol =>{
        let div = document.createElement("div");
        div.innerHTML =
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

// $3000
const filtroDeCamisetasQueSalenTresMil = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio == 3000);
let filtroIgualA3000 = document.getElementById("filtro3000");
filtroIgualA3000.addEventListener("click",filtrarCamisetasQueSalen3000);

function filtrarCamisetasQueSalen3000(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasQueValen3000()
}
function agregarCamisetasQueValen3000(){
    filtroDeCamisetasQueSalenTresMil.forEach(camisetaDeFutbol =>{
        let div = document.createElement("div");
        div.innerHTML =
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

// Filtro de talles

// S
const filtroDeCamisetasTalleS = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.talle == "S");
let filtroTalleS = document.getElementById("filtroTalleS");
filtroTalleS.addEventListener("click",filtrarCamisetasQueSonTalleS);

function filtrarCamisetasQueSonTalleS(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasQueSonTalleS()
}
function agregarCamisetasQueSonTalleS(){
    filtroDeCamisetasTalleS.forEach(camisetaDeFutbol =>{
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

//M
const filtroDeCamisetasTalleM = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.talle == "M");
let filtroTalleM = document.getElementById("filtroTalleM");
filtroTalleM.addEventListener("click",filtrarCamisetasQueSonTalleM);

function filtrarCamisetasQueSonTalleM(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasQueSonTalleM()
}
function agregarCamisetasQueSonTalleM(){
    filtroDeCamisetasTalleM.forEach(camisetaDeFutbol =>{
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}


//L
const filtroDeCamisetasTalleL = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.talle == "L");
let filtroTalleL = document.getElementById("filtroTalleL");
filtroTalleL.addEventListener("click",filtrarCamisetasQueSonTalleL);

function filtrarCamisetasQueSonTalleL(){
    vaciarContenedorDeCamisetas()
    agregarCamisetasQueSonTalleL()
}
function agregarCamisetasQueSonTalleL(){
    filtroDeCamisetasTalleL.forEach(camisetaDeFutbol =>{
        let div = document.createElement("div");
        div.innerHTML = 
                        `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`

    idContenedorCamisetas.appendChild(div);
    })
}

// Barra de busqueda

let inputSearch = document.getElementById("input-search").value.toLowerCase();
let buttonSearch = document.getElementById("button-search");




buttonSearch.addEventListener("click",filterArticleSearch);
function filterArticleSearch(){
    const filterArticle = camisetasDeFutbol.filter(nombreDeCamiseta => nombreDeCamiseta.nombre.toLowerCase() === inputSearch);
    vaciarContenedorDeCamisetas()
    filterArticle.forEach(camisetaDeFutbol => {
        let div = document.createElement("div");
            div.innerHTML = 
                            `<div class="camiseta">
                            <img src=${camisetaDeFutbol.img}>
                            <p>${camisetaDeFutbol.nombre}</p>
                            <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                            <a href="#" class="comprarArticulos">Comprar articulo</a>
                            </div>`
    
        idContenedorCamisetas.appendChild(div);
    })
} 


