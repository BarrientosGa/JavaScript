$(document).ready(function () {
    const urlJson = "js/archivo.json";
    let carrito = [] ;
    let idTBody = $("#idTBody");
    let span = $("#cantidadDeCosasEnCarrito");
    let carritoVacio = parseInt(localStorage.getItem("CantidadDeArticulos"));
    let idContenedorCamisetas = $("#contenedorDeCamisetas");
    if(!localStorage.getItem("CantidadDeArticulos")){
        carritoVacio = 0
        span.html(carritoVacio);
    }
    else{
        span.html(carritoVacio);
    }


    //--------------- AGREGAR PRODUCTOS DINAMICOS AL HTML --------------//

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


                //------------- AGREGAR PRODUCTOS A CARRITO PAGINA PRINCIPAL -------------//

                $(`#btn${producto.id}`).on('click', function () {
                    if (!existe(producto.id)) {
                        if (!localStorage.getItem("CantidadDeArticulos")) {
                            carritoVacio = 1
                            localStorage.setItem("CantidadDeArticulos", carritoVacio)
                            span.html(`${carritoVacio}`);
                        } else {
                            carritoVacio = localStorage.getItem("CantidadDeArticulos");
                            let number_String = parseInt(carritoVacio);
                            number_String += 1;
                            localStorage.setItem("CantidadDeArticulos", number_String);
                            span.html(`${number_String}`);
                        }
                        carrito.push(misDatos[producto.id]);
                        idTBody.empty();	
                        carrito.forEach(producto=>{
                            idTBody.append(`
                                        <tr>
                                            <th><img src=${producto.img} class="imagenEnCarrito"></th>
                                            <th><p class="precio-camiseta">$ ${producto.precio}</p></th>
                                            <th>
                                                <form>
                                                    <input type="number" value= 0  id="input-number${producto.id}">
                                                </form>
                                            </th>
                                            <th id="precioTotalTable${producto.id}"></th>
                                        </tr>
                                    `)
                        })
                        // muestra en el carrito los productos
                        

                    } else {
                        carritoVacio = localStorage.getItem("CantidadDeArticulos");
                        let number_String = parseInt(carritoVacio);
                        number_String += 1;
                        localStorage.setItem("CantidadDeArticulos", number_String);
                        span.html(`${number_String}`);
                        //le sumo 1 al value del input
                        let valueDefault = $(`#input-number${producto.id}`).val();
                        $(`#input-number${producto.id}`).val(parseInt(valueDefault) + 1);
                    }

                    function existe(id) {
                        return (carrito.find(producto => producto.id === id));
                    }
                    //metodo change() para input type "number"
                    let input = $(`#input-number${producto.id}`);
                    input.change(() => {
                        let valueInput = input.val();
                        let cantidad = parseInt(valueInput);
                        if (cantidad <= producto.stock) {
                            let precioTotal = cantidad * producto.precio;
                            let tagId = $(`#precioTotalTable${producto.id}`);
                            tagId.html(precioTotal);

                        } else {
                            Swal.fire(
                                '¡Lo siento!',
                                `Solo contamos con un stock de ${producto.stock}`,
                                'info'
                            )
                        }
                    }) // cierre de input-change()

                    //Boton vaciar el carrito
                    let idEmptyCarrito = $("#idEmptyCarrito");
                    idEmptyCarrito.on("click", vaciarCarrito);

                    function vaciarCarrito() {
                        carrito = [];
                        idTBody.html("");
                        localStorage.clear();
                        span.html("0");
                    }
                    //Boton procesar compra
                    let idProcessBuy = $("#idProcessBuy");
                    let inputNumber = $(`#input-number${producto.id}`);
                    inputNumber.change(() => {
                        if (parseInt(inputNumber.val()) > 0) {
                            idProcessBuy.on("click", () => {
                                Swal.fire(
                                    '¡Gracias por tu compra!',
                                    '¡Te esperamos nuevamente!',
                                    'success'
                                )
                                localStorage.clear();
                                window.setTimeout(reloadPage, 2000);
                            });
                        }

                    })
                    //Recargar la pagina 
                    function reloadPage() {
                        location.reload(true);
                    }
                }) // cierre de evento click
            }) //cierre de foreach mis datos



            //----------- FILTRO DESTACADOS ------------//
            let filtroDestacado = $("#destacadoFiltro");
            const camisetasDestacadas = misDatos.filter(camisetaDeFutbol => camisetaDeFutbol.esDestacada == true);

            filtroDestacado.on("click", function filtrarCamisetasDestacadas() {
                idContenedorCamisetas.html(" ");

                camisetasDestacadas.forEach(producto => {
                    // modifique el tamaño del contenedor porque quedaba mucho espacio
                    $("#contenedorMainTienda,#contenedorDeCamisetas").css("height", "70vh");
                    $("#contenedorMainTienda").css("height", "100vh")
                    idContenedorCamisetas.append(`<div class="camiseta">
                                    <img src=${producto.img}>
                                    <p>${producto.nombre}</p>
                                    <p class="precio-camiseta">$ ${producto.precio}</p>
                                    <a href="#" id="btn${producto.id}" class="comprarArticulos">Comprar articulo</a>
                                    </div>`);

                    //--------------- AGREGAR PRODUCTOS A CARRITO DESDE FILTRO DESTACADOS -----------//

                    $(`#btn${producto.id}`).on('click', function () {
                        if (!existe(producto.id)) {
                            if (!localStorage.getItem("CantidadDeArticulos")) {
                                carritoVacio = 1
                                localStorage.setItem("CantidadDeArticulos", carritoVacio)
                                span.html(`${carritoVacio}`);
                            } else {
                                carritoVacio = localStorage.getItem("CantidadDeArticulos");
                                let number_String = parseInt(carritoVacio);
                                number_String += 1;
                                localStorage.setItem("CantidadDeArticulos", number_String);
                                span.html(`${number_String}`);
                            }
                            carrito.push(misDatos[producto.id]);
                            idTBody.empty();	
                            carrito.forEach(producto=>{
                                idTBody.append(`
                                            <tr>
                                                <th><img src=${producto.img} class="imagenEnCarrito"></th>
                                                <th><p class="precio-camiseta">$ ${producto.precio}</p></th>
                                                <th>
                                                    <form>
                                                        <input type="number" value= 0  id="input-number${producto.id}">
                                                    </form>
                                                </th>
                                                <th id="precioTotalTable${producto.id}"></th>
                                            </tr>
                                        `)
                            })
                            // muestra en el carrito los productos
                            
    
                        } else {
                            carritoVacio = localStorage.getItem("CantidadDeArticulos");
                            let number_String = parseInt(carritoVacio);
                            number_String += 1;
                            localStorage.setItem("CantidadDeArticulos", number_String);
                            span.html(`${number_String}`);
                            //le sumo 1 al value del input
                            let valueDefault = $(`#input-number${producto.id}`).val();
                            $(`#input-number${producto.id}`).val(parseInt(valueDefault) + 1);
                        }

                        function existe(id) {
                            return (carrito.find(producto => producto.id === id));
                        }
                        //metodo change() para input type "number"
                        let input = $(`#input-number${producto.id}`);
                        input.change(() => {
                            let valueInput = input.val();
                            let cantidad = parseInt(valueInput);
                            if (cantidad <= producto.stock) {
                                let precioTotal = cantidad * producto.precio;
                                let tagId = $(`#precioTotalTable${producto.id}`);
                                tagId.html(precioTotal);

                            } else {
                                Swal.fire(
                                    '¡Lo siento!',
                                    `Solo contamos con un stock de ${producto.stock}`,
                                    'info'
                                )
                            }
                        }) // cierre de input-change()

                        //Boton vaciar el carrito
                        let idEmptyCarrito = $("#idEmptyCarrito");
                        idEmptyCarrito.on("click", vaciarCarrito);

                        function vaciarCarrito() {
                            carrito = [];
                            idTBody.html("");
                            localStorage.clear();
                            span.html("0");
                        }
                        //Boton procesar compra
                        let idProcessBuy = $("#idProcessBuy");
                        let inputNumber = $(`#input-number${producto.id}`);
                        inputNumber.change(() => {
                            if (parseInt(inputNumber.val()) > 0) {
                                idProcessBuy.on("click", () => {
                                    Swal.fire(
                                        '¡Gracias por tu compra!',
                                        '¡Te esperamos nuevamente!',
                                        'success'
                                    )
                                    localStorage.clear()
                                    window.setTimeout(reloadPage, 2000);
                                });
                            }

                        })
                        //Recargar la pagina 
                        function reloadPage() {
                            location.reload(true);
                        }
                    })
                })
            })



            //-------------- FILTRO MARCA --------------------//
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
                const filtroDeCamisetasMarca = misDatos.filter(camisetaDeFutbol => camisetaDeFutbol.marca == marca);
                idContenedorCamisetas.html(" ");
                filtroDeCamisetasMarca.forEach(producto => {
                    idContenedorCamisetas.append(`<div class="camiseta">
                        <img src=${producto.img}>
                        <p>${producto.nombre}</p>
                        <p class="precio-camiseta">$ ${producto.precio}</p>
                        <a href="#" id="btn${producto.id}" class="comprarArticulos">Comprar articulo</a>
                        </div>`);


                    //--------------- AGREGAR PRODUCTOS A CARRITO DESDE FILTRO MARCA -----------//

                    $(`#btn${producto.id}`).on('click', function () {
                        if (!existe(producto.id)) {
                            if (!localStorage.getItem("CantidadDeArticulos")) {
                                carritoVacio = 1
                                localStorage.setItem("CantidadDeArticulos", carritoVacio)
                                span.html(`${carritoVacio}`);
                            } else {
                                carritoVacio = localStorage.getItem("CantidadDeArticulos");
                                let number_String = parseInt(carritoVacio);
                                number_String += 1;
                                localStorage.setItem("CantidadDeArticulos", number_String);
                                span.html(`${number_String}`);
                            }
                            carrito.push(misDatos[producto.id]);
                            idTBody.empty();	
                            carrito.forEach(producto=>{
                                idTBody.append(`
                                            <tr>
                                                <th><img src=${producto.img} class="imagenEnCarrito"></th>
                                                <th><p class="precio-camiseta">$ ${producto.precio}</p></th>
                                                <th>
                                                    <form>
                                                        <input type="number" value= 0  id="input-number${producto.id}">
                                                    </form>
                                                </th>
                                                <th id="precioTotalTable${producto.id}"></th>
                                            </tr>
                                        `)
                            })
                            // muestra en el carrito los productos
                            
    
                        } else {
                            carritoVacio = localStorage.getItem("CantidadDeArticulos");
                            let number_String = parseInt(carritoVacio);
                            number_String += 1;
                            localStorage.setItem("CantidadDeArticulos", number_String);
                            span.html(`${number_String}`);
                            //le sumo 1 al value del input
                            let valueDefault = $(`#input-number${producto.id}`).val();
                            $(`#input-number${producto.id}`).val(parseInt(valueDefault) + 1);
                        }

                        function existe(id) {
                            return (carrito.find(producto => producto.id === id));
                        }
                        //metodo change() para input type "number"
                        let input = $(`#input-number${producto.id}`);
                        input.change(() => {
                            let valueInput = input.val();
                            let cantidad = parseInt(valueInput);
                            if (cantidad <= producto.stock) {
                                let precioTotal = cantidad * producto.precio;
                                let tagId = $(`#precioTotalTable${producto.id}`);
                                tagId.html(precioTotal);

                            } else {
                                Swal.fire(
                                    '¡Lo siento!',
                                    `Solo contamos con un stock de ${producto.stock}`,
                                    'info'
                                )
                            }
                        }) // cierre de input-change()

                        //Boton vaciar el carrito
                        let idEmptyCarrito = $("#idEmptyCarrito");
                        idEmptyCarrito.on("click", vaciarCarrito);

                        function vaciarCarrito() {
                            carrito = [];
                            idTBody.html("");
                            localStorage.clear();
                            span.html("0");
                        }
                        //Boton procesar compra
                        let idProcessBuy = $("#idProcessBuy");
                        let inputNumber = $(`#input-number${producto.id}`);
                        inputNumber.change(() => {
                            if (parseInt(inputNumber.val()) > 0) {
                                idProcessBuy.on("click", () => {
                                    Swal.fire(
                                        '¡Gracias por tu compra!',
                                        '¡Te esperamos nuevamente!',
                                        'success'
                                    )
                                    localStorage.clear()
                                    window.setTimeout(reloadPage, 2000);
                                });
                            }

                        })
                        //Recargar la pagina 
                        function reloadPage() {
                            location.reload(true);
                        }
                    })
                })
            }




            //-------------- FILTRO PRECIOS ---------------//
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
                const filtroDeCamisetasQueSalen = misDatos.filter(camisetaDeFutbol => camisetaDeFutbol.precio == precio);
                idContenedorCamisetas.html(" ");
                filtroDeCamisetasQueSalen.forEach(producto => {
                    // modifique el tamaño del contenedor porque quedaba mucho espacio
                    $("#contenedorMainTienda,#contenedorDeCamisetas").css("height", "110vh");
                    $("#contenedorMainTienda").css("height", "130vh")
                    idContenedorCamisetas.append(`<div class="camiseta">
                <img src=${producto.img}>
                <p>${producto.nombre}</p>
                <p class="precio-camiseta">$ ${producto.precio}</p>
                <a href="#" id="btn${producto.id}" class="comprarArticulos">Comprar articulo</a>
                </div>`);


                    //--------------- AGREGAR PRODUCTOS A CARRITO DESDE FILTRO PRECIOS -----------//


                    $(`#btn${producto.id}`).on('click', function () {
                        if (!existe(producto.id)) {
                            if (!localStorage.getItem("CantidadDeArticulos")) {
                                carritoVacio = 1
                                localStorage.setItem("CantidadDeArticulos", carritoVacio)
                                span.html(`${carritoVacio}`);
                            } else {
                                carritoVacio = localStorage.getItem("CantidadDeArticulos");
                                let number_String = parseInt(carritoVacio);
                                number_String += 1;
                                localStorage.setItem("CantidadDeArticulos", number_String);
                                span.html(`${number_String}`);
                            }
                            carrito.push(misDatos[producto.id]);
                            idTBody.empty();	
                            carrito.forEach(producto=>{
                                idTBody.append(`
                                            <tr>
                                                <th><img src=${producto.img} class="imagenEnCarrito"></th>
                                                <th><p class="precio-camiseta">$ ${producto.precio}</p></th>
                                                <th>
                                                    <form>
                                                        <input type="number" value= 0  id="input-number${producto.id}">
                                                    </form>
                                                </th>
                                                <th id="precioTotalTable${producto.id}"></th>
                                            </tr>
                                        `)
                            })
                            // muestra en el carrito los productos
                            
    
                        } else {
                            carritoVacio = localStorage.getItem("CantidadDeArticulos");
                            let number_String = parseInt(carritoVacio);
                            number_String += 1;
                            localStorage.setItem("CantidadDeArticulos", number_String);
                            span.html(`${number_String}`);
                            //le sumo 1 al value del input
                            let valueDefault = $(`#input-number${producto.id}`).val();
                            $(`#input-number${producto.id}`).val(parseInt(valueDefault) + 1);
                        }

                        function existe(id) {
                            return (carrito.find(producto => producto.id === id));
                        }
                        //metodo change() para input type "number"
                        let input = $(`#input-number${producto.id}`);
                        input.change(() => {
                            let valueInput = input.val();
                            let cantidad = parseInt(valueInput);
                            if (cantidad <= producto.stock) {
                                let precioTotal = cantidad * producto.precio;
                                let tagId = $(`#precioTotalTable${producto.id}`);
                                tagId.html(precioTotal);

                            } else {
                                Swal.fire(
                                    '¡Lo siento!',
                                    `Solo contamos con un stock de ${producto.stock}`,
                                    'info'
                                )
                            }
                        }) // cierre de input-change()

                        //Boton vaciar el carrito
                        let idEmptyCarrito = $("#idEmptyCarrito");
                        idEmptyCarrito.on("click", vaciarCarrito);

                        function vaciarCarrito() {
                            carrito = [];
                            idTBody.html("");
                            localStorage.clear();
                            span.html("0");
                        }
                        //Boton procesar compra
                        let idProcessBuy = $("#idProcessBuy");
                        let inputNumber = $(`#input-number${producto.id}`);
                        inputNumber.change(() => {
                            if (parseInt(inputNumber.val()) > 0) {
                                idProcessBuy.on("click", () => {
                                    Swal.fire(
                                        '¡Gracias por tu compra!',
                                        '¡Te esperamos nuevamente!',
                                        'success'
                                    )
                                    localStorage.clear()
                                    window.setTimeout(reloadPage, 2000);
                                });
                            }

                        })
                        //Recargar la pagina 
                        function reloadPage() {
                            location.reload(true);
                        }
                    })
                })
            }




            //----------------- FILTRO DE TALLES -------------------//
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
                const filtroDeCamisetasTalle = misDatos.filter(camisetaDeFutbol => camisetaDeFutbol.talle == talle);
                idContenedorCamisetas.html(" ");
                filtroDeCamisetasTalle.forEach(producto => {
                    idContenedorCamisetas.append(`<div class="camiseta">
                <img src=${producto.img}>
                <p>${producto.nombre}</p>
                <p class="precio-camiseta">$ ${producto.precio}</p>
                <a href="#" id="btn${producto.id}" class="comprarArticulos">Comprar articulo</a>
                </div>`);

                    //--------------- AGREGAR PRODUCTOS A CARRITO DESDE FILTRO TALLES -----------//

                    $(`#btn${producto.id}`).on('click', function () {
                        if (!existe(producto.id)) {
                            if (!localStorage.getItem("CantidadDeArticulos")) {
                                carritoVacio = 1
                                localStorage.setItem("CantidadDeArticulos", carritoVacio)
                                span.html(`${carritoVacio}`);
                            } else {
                                carritoVacio = localStorage.getItem("CantidadDeArticulos");
                                let number_String = parseInt(carritoVacio);
                                number_String += 1;
                                localStorage.setItem("CantidadDeArticulos", number_String);
                                span.html(`${number_String}`);
                            }
                            carrito.push(misDatos[producto.id]);
                            idTBody.empty();	
                            carrito.forEach(producto=>{
                                idTBody.append(`
                                            <tr>
                                                <th><img src=${producto.img} class="imagenEnCarrito"></th>
                                                <th><p class="precio-camiseta">$ ${producto.precio}</p></th>
                                                <th>
                                                    <form>
                                                        <input type="number" value= 0  id="input-number${producto.id}">
                                                    </form>
                                                </th>
                                                <th id="precioTotalTable${producto.id}"></th>
                                            </tr>
                                        `)
                            })
                            // muestra en el carrito los productos
                            
    
                        } else {
                            carritoVacio = localStorage.getItem("CantidadDeArticulos");
                            let number_String = parseInt(carritoVacio);
                            number_String += 1;
                            localStorage.setItem("CantidadDeArticulos", number_String);
                            span.html(`${number_String}`);
                            //le sumo 1 al value del input
                            let valueDefault = $(`#input-number${producto.id}`).val();
                            $(`#input-number${producto.id}`).val(parseInt(valueDefault) + 1);
                        }

                        function existe(id) {
                            return (carrito.find(producto => producto.id === id));
                        }
                        //metodo change() para input type "number"
                        let input = $(`#input-number${producto.id}`);
                        input.change(() => {
                            let valueInput = input.val();
                            let cantidad = parseInt(valueInput);
                            if (cantidad <= producto.stock) {
                                let precioTotal = cantidad * producto.precio;
                                let tagId = $(`#precioTotalTable${producto.id}`);
                                tagId.html(precioTotal);

                            } else {
                                Swal.fire(
                                    '¡Lo siento!',
                                    `Solo contamos con un stock de ${producto.stock}`,
                                    'info'
                                )
                            }
                        }) // cierre de input-change()

                        //Boton vaciar el carrito
                        let idEmptyCarrito = $("#idEmptyCarrito");
                        idEmptyCarrito.on("click", vaciarCarrito);

                        function vaciarCarrito() {
                            carrito = [];
                            idTBody.html("");
                            localStorage.clear();
                            span.html("0");
                        }
                        //Boton procesar compra
                        let idProcessBuy = $("#idProcessBuy");
                        let inputNumber = $(`#input-number${producto.id}`);
                        inputNumber.change(() => {
                            if (parseInt(inputNumber.val()) > 0) {
                                idProcessBuy.on("click", () => {
                                    Swal.fire(
                                        '¡Gracias por tu compra!',
                                        '¡Te esperamos nuevamente!',
                                        'success'
                                    )
                                    localStorage.clear();
                                    window.setTimeout(reloadPage, 2000);
                                });
                            }

                        })
                        //Recargar la pagina 
                        function reloadPage() {
                            location.reload(true);
                        }
                    })
                })
            }




            //------------------- BARRA DE BUSQUEDA -----------------//
            let buttonSearch = $("#button-search");
            buttonSearch.on("click", function filterArticleSearch(event) {
                event.preventDefault();
                let inputSearch = $("#input-search").val().toLowerCase();
                if (inputSearch.length >= 4) {
                    const filterArticle = misDatos.filter(nombreDeCamiseta => nombreDeCamiseta.nombre.toLowerCase().includes(inputSearch));
                    if (filterArticle.length > 0) {
                        idContenedorCamisetas.html(" ");
                        filterArticle.forEach(producto => {
                            // modifique el tamaño del contenedor porque quedaba mucho espacio
                            $("#contenedorMainTienda,#contenedorDeCamisetas").css("height", "70vh");
                            $("#contenedorMainTienda").css("height", "100vh")
                            idContenedorCamisetas.append(`<div class="camiseta">
                        <img src=${producto.img}>
                        <p>${producto.nombre}</p>
                        <p class="precio-camiseta">$ ${producto.precio}</p>
                        <a href="#" id="btn${producto.id}" class="comprarArticulos">Comprar articulo</a>
                        </div>`);

                            //--------------- AGREGAR PRODUCTOS A CARRITO DESDE BARRA DE BUSQUEDA -----------//

                            $(`#btn${producto.id}`).on('click', function () {
                                if (!existe(producto.id)) {
                                    if (!localStorage.getItem("CantidadDeArticulos")) {
                                        carritoVacio = 1
                                        localStorage.setItem("CantidadDeArticulos", carritoVacio)
                                        span.html(`${carritoVacio}`);
                                    } else {
                                        carritoVacio = localStorage.getItem("CantidadDeArticulos");
                                        let number_String = parseInt(carritoVacio);
                                        number_String += 1;
                                        localStorage.setItem("CantidadDeArticulos", number_String);
                                        span.html(`${number_String}`);
                                    }
                                    carrito.push(misDatos[producto.id]);
                                    idTBody.empty();	
                                    carrito.forEach(producto=>{
                                        idTBody.append(`
                                                    <tr>
                                                        <th><img src=${producto.img} class="imagenEnCarrito"></th>
                                                        <th><p class="precio-camiseta">$ ${producto.precio}</p></th>
                                                        <th>
                                                            <form>
                                                                <input type="number" value= 0  id="input-number${producto.id}">
                                                            </form>
                                                        </th>
                                                        <th id="precioTotalTable${producto.id}"></th>
                                                    </tr>
                                                `)
                                    })
                                    // muestra en el carrito los productos
                                    
            
                                } else {
                                    carritoVacio = localStorage.getItem("CantidadDeArticulos");
                                    let number_String = parseInt(carritoVacio);
                                    number_String += 1;
                                    localStorage.setItem("CantidadDeArticulos", number_String);
                                    span.html(`${number_String}`);
                                    //le sumo 1 al value del input
                                    let valueDefault = $(`#input-number${producto.id}`).val();
                                    $(`#input-number${producto.id}`).val(parseInt(valueDefault) + 1);
                                }

                                function existe(id) {
                                    return (carrito.find(producto => producto.id === id));
                                }
                                //metodo change() para input type "number"
                                let input = $(`#input-number${producto.id}`);
                                input.change(() => {
                                    let valueInput = input.val();
                                    let cantidad = parseInt(valueInput);
                                    if (cantidad <= producto.stock) {
                                        let precioTotal = cantidad * producto.precio;
                                        let tagId = $(`#precioTotalTable${producto.id}`);
                                        tagId.html(precioTotal);

                                    } else {
                                        Swal.fire(
                                            '¡Lo siento!',
                                            `Solo contamos con un stock de ${producto.stock}`,
                                            'info'
                                        )
                                    }
                                }) // cierre de input-change()

                                //Boton vaciar el carrito
                                let idEmptyCarrito = $("#idEmptyCarrito");
                                idEmptyCarrito.on("click", vaciarCarrito);

                                function vaciarCarrito() {
                                    carrito = [];
                                    idTBody.html("");
                                    localStorage.clear();
                                    span.html("0");
                                }
                                //Boton procesar compra
                                let idProcessBuy = $("#idProcessBuy");
                                let inputNumber = $(`#input-number${producto.id}`);
                                inputNumber.change(() => {
                                    if (parseInt(inputNumber.val()) > 0) {
                                        idProcessBuy.on("click", () => {
                                            Swal.fire(
                                                '¡Gracias por tu compra!',
                                                '¡Te esperamos nuevamente!',
                                                'success'
                                            )
                                            localStorage.clear();
                                            window.setTimeout(reloadPage, 2000);
                                        });
                                    }

                                })
                                //Recargar la pagina 
                                function reloadPage() {
                                    location.reload(true);
                                }
                            })
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No encontre nada'
                        })
                    }
                }
            })
        } //cierre de if del success 
    }) //cierre de getJSON
}) //cierre de ready