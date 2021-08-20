//con que vas a pagar puede ser debito, credito o efectivo
function medioDePago(){
    let tarjeta=prompt("¿Con que vas pagar?");
    switch(tarjeta){
        case "tarjeta de credito":
            alert("tenes un 10% de descuento");
            break;
        case "tarjeta de debito":
            alert("tenes un 20% de descuento");
            break;
        case "efectivo":
            alert("no tenemos por el momento ningún descuento");
            break;
    }
}
medioDePago();

