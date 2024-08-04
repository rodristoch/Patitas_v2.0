window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    /* el Menu hamburguesa en MOBILE */
    let botonMenuHamb = document.querySelector("#menuH")
    let botonMenuHamb2 = document.querySelector(".fa-bars")
    let botonCruz = document.querySelector(".fa-xmark")
    let mainDeAtras = document.querySelector("main")
    let body = document.querySelector("body")
    let header = document.querySelector(".top")
    let footer = document.querySelector("footer")
    
    /* ------- capturo los divs -------- */
    /* el contenedor en MOBILE */
    /* los ppales */
    let opcionesMobile = document.querySelector(".contendor_ppal-azul") /* el ppal azul de arriba con Mi cuenta/datos del user */
    let opcionesMobile2 = document.querySelector(".contendor_ppal-azulabajo") /* el ppal azul de abajo si NO estas logueado */
    let opcionesMobile2b = document.querySelector(".contendor_ppal-azulabajo-logueado") /* el ppal azul de abajo si SI estas logueado  */
    let opcionesMobileInterior = document.querySelector(".contendor_interior-rojo") /* el rojo */
    /* let main = document.querySelector("main") */

    /* los divs verdes */
    let contenedorFiltro1 = document.querySelector(".contenedor-flechita-externo1") /* el div verde de Ordenar por */
    let contenedorFiltro2 = document.querySelector(".contenedor-flechita-externo2") /* el div verde de Categoria */
    let contenedorFiltro3 = document.querySelector(".contenedor-flechita-externo3") /* el div verde de Precio */
    let contenedorFiltro4 = document.querySelector(".contenedor-flechita-externo4") /* el div verde de Descuentos */
    let contenedorFiltroUltimo = document.querySelector(".contenedor-flechita-externo-ultimodeabajo") /* el div verde de Marcas */

    /* los violetas dentro de los verdes */
    let opcionesMobileDentroDelOtro1 = document.querySelector(".contendor_opciones-dentrodelotro1") /* el div oculto de Ordenar por */
    let opcionesMobileDentroDelOtro2 = document.querySelector(".contendor_opciones-dentrodelotro2") /* el div oculto de Categoria */
    let opcionesMobileDentroDelOtro3 = document.querySelector(".contendor_opciones-dentrodelotro3") /* el div oculto de Precio */
    let opcionesMobileDentroDelOtro4 = document.querySelector(".contendor_opciones-dentrodelotro4") /* el div oculto de Descuentos */
    let opcionesMobileDentroDelOtro5 = document.querySelector(".contendor_opciones-dentrodelotro5") /* el div oculto de Marcas */

    /* los azules dentro de los violetas */
    /* dentro de Ordenar por */
    let opcionOrdenarPorCategoria = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorCategoria")
    let opcionOrdenarPorMenorPrecio = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorMenorPrecio")
    let opcionOrdenarPorMayorPrecio = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorMayorPrecio")
    /* dentro de Categorias */
    let opcionCategoriaAccesorios = document.querySelector(".contenedor-opcion-con-checkbox-CategoriaAccesorios")
    let opcionCategoriaComida = document.querySelector(".contenedor-opcion-con-checkbox-CategoriaComida")
    let opcionCategoriaHigiene = document.querySelector(".contenedor-opcion-con-checkbox-CategoriaHigiene")
    let opcionCategoriaJuguetes = document.querySelector(".contenedor-opcion-con-checkbox-CategoriaJuguetes")
    /* dentro de Precios */
    let opcionPrecioPrimerRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioPrimerRango")
    let opcionPrecioSegundoRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioSegundoRango")
    let opcionPrecioTercerRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioTercerRango")
    let opcionPrecioCuartoRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioCuartoRango")
    /* dentro de Descuentos */
    let opcionConDescuento = document.querySelector(".contenedor-opcion-con-checkbox-ConDescuento")
    /* dentro de Marcas */
    let opcionMarcaEukanuba = document.querySelector(".contenedor-opcion-con-checkbox-MarcaEukanuba")
    let opcionMarcaRoyal = document.querySelector(".contenedor-opcion-con-checkbox-MarcaRoyal")
    let opcionMarcaProPlan = document.querySelector(".contenedor-opcion-con-checkbox-MarcaProPlan")
    let opcionMarcaOtras = document.querySelector(".contenedor-opcion-con-checkbox-MarcaOtras")

    /* ------- los checkbox ------- */
    /* dentro de Ordenar por */
    let checkboxOrdenarPorCategoria = document.querySelector("#categoriaMobile")
    let checkboxOrdenarPorMenorPrecio = document.querySelector("#menorPrecioMobile")
    let checkboxOrdenarPorMayorPrecio = document.querySelector("#mayorPrecioMobile")
    /* dentro de Categorias */
    let checkboxCategoriaAccesorios = document.querySelector("#accesoriosMobile")
    let checkboxCategoriaComida = document.querySelector("#comidaMobile")
    let checkboxCategoriaHigiene = document.querySelector("#higieneMobile")
    let checkboxCategoriaJuguetes = document.querySelector("#juguetesMobile")
    /* dentro de Precios */
    let checkboxPrecioPrimerRango = document.querySelector("#primerrangoMobile")
    let checkboxPrecioSegundoRango = document.querySelector("#segundorangoMobile")
    let checkboxPrecioTercerRango = document.querySelector("#tercerrangoMobile")
    let checkboxPrecioCuartoRango = document.querySelector("#cuartorangoMobile")
    /* dentro de Descuentos */
    let checkboxConDescuento = document.querySelector("#conOffMobile")
    /* dentro de Marcas */
    let checkboxMarcaEukanuba = document.querySelector("#eukanubaMobile")
    let checkboxMarcaRoyal = document.querySelector("#royalMobile")
    let checkboxMarcaProPlan = document.querySelector("#proplanMobile")
    let checkboxMarcaOtras = document.querySelector("#otrasMobile")

    /* los .opcion-filtro-elegido */
    let tituloSeleccionOrdenar = document.querySelector(".opcion-filtro-elegido1")
    let tituloSeleccionCategorias = document.querySelector(".opcion-filtro-elegido2")
    let tituloSeleccionPrecios = document.querySelector(".opcion-filtro-elegido3")
    let tituloSeleccionDescuentos = document.querySelector(".opcion-filtro-elegido4")
    let tituloSeleccionMarcas = document.querySelector(".opcion-filtro-elegido5")


    /* MOBILE para que aparezca el contenedor azul ppal oculto, al apretar en el Menu Hamb */
    botonMenuHamb.addEventListener("click", () => {

        /* alert("hola") */

        if(opcionesMobile2){ /* el contenedor ppal azul de abajo si NO estas logueado */
            opcionesMobile.classList.toggle("contendor_ppal-azul2")
            opcionesMobile2.classList.toggle("contendor_ppal-azulabajo2") 
            /* footer.classList.toggle("footer-panel1")  */
        } else {
            opcionesMobile.classList.toggle("contendor_ppal-azul2")
            opcionesMobile2b.classList.toggle("contendor_ppal-azulabajo-logueado2") 
        }
        mainDeAtras.classList.toggle("main2")
        body.classList.toggle("body2")
        footer.classList.toggle("footer-chau")


    })

    
})