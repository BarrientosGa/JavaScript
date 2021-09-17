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
let filtroDestacado = $("#destacadoFiltro");
filtroDestacado.click(filtrarCamisetasDestacadas);
const camisetasDestacadas = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.esDestacada == true);
let idContenedorCamisetas = $("#contenedorDeCamisetas");

function filtrarCamisetasDestacadas() {
    vaciarContenedorDeCamisetas()
    agregarCamisetasDestacadas()

}

function vaciarContenedorDeCamisetas() {
    idContenedorCamisetas.html(" ");
}

function agregarCamisetasDestacadas() {
    camisetasDestacadas.forEach(
        camisetaDeFutbol => {
            idContenedorCamisetas.append(`<div class="camiseta">
            <img src=${camisetaDeFutbol.img}>
            <p>${camisetaDeFutbol.nombre}</p>
            <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
            <a href="#" class="comprarArticulos">Comprar articulo</a>
            </div>`);

        })
}

//Filtro por marca

//Nike
let filtroNike = document.getElementById("filtroNike");
filtroNike.addEventListener("click", () =>{
    filtrarCamisetasMarca("Nike")
});

//Adidas
let filtroAdidas = document.getElementById("filtroAdidas");
filtroAdidas.addEventListener("click", () =>{
    filtrarCamisetasMarca("Adidas")
});
//Puma
let filtroPuma = document.getElementById("filtroPuma");
filtroPuma.addEventListener("click", () =>{
    filtrarCamisetasMarca("Puma")
});
//Kappa
let filtroKappa = document.getElementById("filtroKappa");
filtroKappa.addEventListener("click", () =>{
    filtrarCamisetasMarca("Kappa")
});

function filtrarCamisetasMarca(marca){
    const filtroDeCamisetasMarca = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.marca == marca);
    vaciarContenedorDeCamisetas()
    filtroDeCamisetasMarca.forEach(camisetaDeFutbol => {
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

let filtroIgualA1000 = document.getElementById("filtro1000");
filtroIgualA1000.addEventListener("click", () =>{
    filtrarCamisetasQueSalen(1000)
});
// $2000
let filtroIgualA2000 = document.getElementById("filtro2000");
filtroIgualA2000.addEventListener("click", () =>{
    filtrarCamisetasQueSalen(2000)
});
//$3000
let filtroIgualA3000 = document.getElementById("filtro3000");
filtroIgualA3000.addEventListener("click", () =>{
    filtrarCamisetasQueSalen(3000)
});

function filtrarCamisetasQueSalen(precio){
    const filtroDeCamisetasQueSalen = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio == precio);
    vaciarContenedorDeCamisetas()
    filtroDeCamisetasQueSalen.forEach(camisetaDeFutbol => {
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


//Filtro de talles

//S
let filtroTalleS = document.getElementById("filtroTalleS");
filtroTalleS.addEventListener("click", () => {
    filtrarCamisetasQueSonTalle("S")
});
//M
let filtroTalleM = document.getElementById("filtroTalleM");
filtroTalleM.addEventListener("click", () => {
    filtrarCamisetasQueSonTalle("M")
});
//L
let filtroTalleL = document.getElementById("filtroTalleL");
filtroTalleL.addEventListener("click", () => {
    filtrarCamisetasQueSonTalle("L")
});

function filtrarCamisetasQueSonTalle(talle){
    const filtroDeCamisetasTalle = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.talle == talle);
        vaciarContenedorDeCamisetas()
        filtroDeCamisetasTalle.forEach(camisetaDeFutbol => {
            let div = document.createElement("div");
            div.innerHTML =
                `<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`
            //<button onclick=agregarCarrito(${camisetaDeFutbol.id}) class="comprarArticulos">Comprar articulo</button>
            idContenedorCamisetas.appendChild(div);
        })
}


// Barra de busqueda

    let buttonSearch = document.getElementById("button-search");
    buttonSearch.addEventListener("click", function filterArticleSearch(event) {
        event.preventDefault();
        let inputSearch = document.getElementById("input-search").value.toLowerCase();
        if (inputSearch.length >= 4) {
            console.log("tiene 4 caracteres");
            const filterArticle = camisetasDeFutbol.filter(nombreDeCamiseta => nombreDeCamiseta.nombre.toLowerCase().includes(inputSearch));
            console.log(filterArticle);
            vaciarContenedorDeCamisetas();
            if (filterArticle.length > 0) {
                filterArticle.forEach(camisetaDeFutbol => {
                    let div = document.createElement("div");
                    div.innerHTML =
                        `<div class="camiseta">
                            <img src=${camisetaDeFutbol.img}>
                            <p>${camisetaDeFutbol.nombre}</p>
                            <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                            <a href="#" class="comprarArticulos">Comprar articulo</a>
                            </div>`;

                    idContenedorCamisetas.appendChild(div);
                })
            } else {
                console.log("no encontre nada");
            }
        } else {
            console.log("debes escribir mas de 4 caracteres")
        }

    })


//Carrito

class Carrito {
    constructor(identificadorArg){
        this.iden = identificadorArg;
    }
    agregarACarrito(){
    }
    vaciarCarrito(){

    }
    procesarCompra(){

    }    
}




const idCamisetaPSG = new Carrito(1);
const idCamisetaBarcelona = new Carrito(2);
const idCamisetaLiverpool = new Carrito(3);
const idCamisetaMunich = new Carrito(4);
const idCamisetaBoca = new Carrito(5);
const idCamisetaArsenal = new Carrito(6);
const idCamisetaCity = new Carrito(7);
const idCamisetaMilan = new Carrito(8);
const idCamisetaDortmund = new Carrito(9);
const idCamisetaNapoli = new Carrito(10);
const idCamisetaRacing = new Carrito(11);
const idCamisetaGenoa = new Carrito(12);

const identificadoresDeCamisetas = [];
identificadoresDeCamisetas.push(idCamisetaPSG,idCamisetaBarcelona,idCamisetaLiverpool,idCamisetaMunich,
    idCamisetaBoca,idCamisetaArsenal,idCamisetaCity,idCamisetaMilan,idCamisetaDortmund,idCamisetaNapoli,
    idCamisetaRacing,idCamisetaGenoa);



