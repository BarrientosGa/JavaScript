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
$(document).ready(function () {
    /*
    let articulos = $(".comprarArticulos");
    let span = $("#cantidadDeCosasEnCarrito");
    let carrito = span.html();
    let carritoVacio = 0;

    for (let i = 0; i < articulos.length; i++) {
        articulos[i].on("click", sumarUnoAlCarrito);
    }
    
    function sumarUnoAlCarrito() {
        console.log("clickeaste el boton");
        carritoVacio += 1;
        carrito = `${carritoVacio}`;
        span.html(carrito);
        localStorage.setItem("CantidadDeArticulos", carritoVacio);
        localStorage.getItem("CantidadDeArticulos");
        */

    // Filtro destacado
    let filtroDestacado = $("#destacadoFiltro");
    filtroDestacado.on("click", filtrarCamisetasDestacadas);
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
    let filtroNike = $("#filtroNike");
    filtroNike.on("click", () => {
        filtrarCamisetasMarca("Nike")
    });

    //Adidas
    let filtroAdidas = $("#filtroAdidas");
    filtroAdidas.on("click", () => {
        filtrarCamisetasMarca("Adidas")
    });
    //Puma
    let filtroPuma = $("#filtroPuma");
    filtroPuma.on("click", () => {
        filtrarCamisetasMarca("Puma")
    });
    //Kappa
    let filtroKappa = $("#filtroKappa");
    filtroKappa.on("click", () => {
        filtrarCamisetasMarca("Kappa")
    });

    function filtrarCamisetasMarca(marca) {
        const filtroDeCamisetasMarca = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.marca == marca);
        vaciarContenedorDeCamisetas()
        filtroDeCamisetasMarca.forEach(camisetaDeFutbol => {
            idContenedorCamisetas.append(`<div class="camiseta">
                <img src=${camisetaDeFutbol.img}>
                <p>${camisetaDeFutbol.nombre}</p>
                <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                <a href="#" class="comprarArticulos">Comprar articulo</a>
                </div>`);
        })
    }
    // Filtro por precio

    // $1000

    let filtroIgualA1000 = $("#filtro1000");
    filtroIgualA1000.on("click", () => {
        filtrarCamisetasQueSalen(1000)
    });
    // $2000
    let filtroIgualA2000 = $("#filtro2000");
    filtroIgualA2000.on("click", () => {
        filtrarCamisetasQueSalen(2000)
    });
    //$3000
    let filtroIgualA3000 = $("#filtro3000");
    filtroIgualA3000.on("click", () => {
        filtrarCamisetasQueSalen(3000)
    });

    function filtrarCamisetasQueSalen(precio) {
        const filtroDeCamisetasQueSalen = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.precio == precio);
        vaciarContenedorDeCamisetas()
        filtroDeCamisetasQueSalen.forEach(camisetaDeFutbol => {
            idContenedorCamisetas.append(`<div class="camiseta">
                <img src=${camisetaDeFutbol.img}>
                <p>${camisetaDeFutbol.nombre}</p>
                <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                <a href="#" class="comprarArticulos">Comprar articulo</a>
                </div>`);
        })
    }
    //Filtro de talles

    //S
    let filtroTalleS = $("#filtroTalleS");
    filtroTalleS.on("click", () => {
        filtrarCamisetasQueSonTalle("S")
    });
    //M
    let filtroTalleM = $("#filtroTalleM");
    filtroTalleM.on("click", () => {
        filtrarCamisetasQueSonTalle("M")
    });
    //L
    let filtroTalleL = $("#filtroTalleL");
    filtroTalleL.on("click", () => {
        filtrarCamisetasQueSonTalle("L")
    });

    function filtrarCamisetasQueSonTalle(talle) {
        const filtroDeCamisetasTalle = camisetasDeFutbol.filter(camisetaDeFutbol => camisetaDeFutbol.talle == talle);
        vaciarContenedorDeCamisetas()
        filtroDeCamisetasTalle.forEach(camisetaDeFutbol => {
            idContenedorCamisetas.append(`<div class="camiseta">
                <img src=${camisetaDeFutbol.img}>
                <p>${camisetaDeFutbol.nombre}</p>
                <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                <a href="#" class="comprarArticulos">Comprar articulo</a>
                </div>`);
        })
    }
    // Barra de busqueda

    let buttonSearch = $("#button-search");
    buttonSearch.on("click", function filterArticleSearch(event) {
        event.preventDefault();
        let inputSearch = $("#input-search").val().toLowerCase();
        if (inputSearch.length >= 4) {
            console.log("tiene 4 caracteres");
            const filterArticle = camisetasDeFutbol.filter(nombreDeCamiseta => nombreDeCamiseta.nombre.toLowerCase().includes(inputSearch));
            console.log(filterArticle);
            vaciarContenedorDeCamisetas();
            if (filterArticle.length > 0) {
                filterArticle.forEach(camisetaDeFutbol => {
                    idContenedorCamisetas.append(`<div class="camiseta">
                        <img src=${camisetaDeFutbol.img}>
                        <p>${camisetaDeFutbol.nombre}</p>
                        <p class="precio-camiseta">$ ${camisetaDeFutbol.precio}</p>
                        <a href="#" class="comprarArticulos">Comprar articulo</a>
                        </div>`);
                })
            } else {
                console.log("no encontre nada");
            }
        } else {
            console.log("debes escribir mas de 4 caracteres")
        }

    })
    //Agregar articulos dinamicos al html
    const urlJson = "js/archivo.json";
    let carrito = [];
    let idTBody = $("#idTBody");
    $.getJSON(urlJson, function (respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            misDatos.forEach(producto => {
                idContenedorCamisetas.append(`<div class="camiseta">
                        <img src=${producto.img}>
                        <p>${producto.nombre}</p>
                        <p class="precio-camiseta">$ ${producto.precio}</p>
                        <a href="#" id="btn${producto.id}" class="comprarArticulos">Comprar articulo</a>
                        </div>`);
                //Agregar productos al carrito
                $(`#btn${producto.id}`).on('click', function () {
                    if (!existe(producto.id)) {
                        carrito.push(misDatos[producto.id]);

                    } else {
                        console.log("ya existe el producto");
                    }

                    function existe(id) {
                        return (carrito.find(producto => producto.id === id));
                    }

                    console.log(carrito);
                    carrito.forEach(articulo => {
                        idTBody.append(`
                                <tr>
                                    <th><img src=${articulo.img} class="imagenEnCarrito"></th>
                                    <th><p class="precio-camiseta">$ ${articulo.precio}</p></th>
                                    <th>
                                        <form>
                                            <input type="number" value= 0  id="input-number${articulo.id}">
                                        </form>
                                    </th>
                                    <th id="precioTotalTable${articulo.id}"></th>
                                </tr>
                            `)
                        $(".imagenEnCarrito").css({
                            "widht": "3%",
                            "height": "7vh"
                        })
                        //metodo change() para input type "number"
                        let input = $(`#input-number${articulo.id}`);
                        input.change(() => {
                            let valueInput = input.val();
                            let cantidad = parseInt(valueInput);
                            if (cantidad <= articulo.stock) {
                                let precioTotal = cantidad * articulo.precio;
                                console.log(precioTotal);
                                let tagId = $(`#precioTotalTable${articulo.id}`);
                                console.log(tagId.html(precioTotal));
                                tagId.html(precioTotal);

                            } else {
                                console.log(`Solo contamos con stock de ${articulo.stock}`);
                            }
                        }) // input-change()
                        //Boton vaciar el carrito
                        let idEmptyCarrito = $("#idEmptyCarrito");
                        idEmptyCarrito.on("click", vaciarCarrito);

                        function vaciarCarrito() {
                            carrito = [] ;
                            console.log(carrito)
                            idTBody.html("");
                        }
                        //Boton procesar compra
                        let idProcessBuy = $("#idProcessBuy");
                        idProcessBuy.on("click", procesarCompra);

                        function procesarCompra() {
                            Swal.fire(
                                'Gracias por tu compra!',
                                'Te esperamos nuevamente!',
                                `success`
                            )
                            window.setTimeout(reloadPage, 2000);
                        }
                        //Recargar la pagina 
                        function reloadPage() {
                            location.reload(true);
                        }

                }) //carrito foreach
            }) // evento click
            }) //foreach mis datos
        
        } // if del success 


    })// getJSON
})//ready