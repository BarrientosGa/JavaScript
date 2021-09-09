
let iniciarSesion= document.getElementById("botonDeIniciarSesion");
iniciarSesion.addEventListener("click" , ventanaEmergente)

function ventanaEmergente(){
    Swal.fire({
        title: `Bienvenido!`,
        html: ` <h1 class="tituloDe_popup"> Ingresa tu usuario y contraseña </h1>
                <div class="login_popUp">
                <input type=text placeholder="Ingresa tu usuario">
                <input type=password placeholder="Ingresa tu contraseña">
                </div>
                <button id="botonDeLogueo_popup">Iniciar sesion</button>`,
                
        width: `50%`,
        padding: `3rem`,
        confirmButtonText:`Iniciar sesion`,
        customClass: {
            container: `contenedorDePopup`,
            popup: `popUpIniciarSesion`,
        },
        showConfirmButton: false,
        showCloseButton: true
    });
}
