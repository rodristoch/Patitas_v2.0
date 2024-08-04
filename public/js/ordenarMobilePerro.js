window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    /* el Filtrar en MOBILE */
    let filtrarMobile = document.querySelector(".btn-icon")
    
    /* ------- capturo los divs -------- */
    /* el contenedor en MOBILE */
    /* los ppales */
    let opcionesMobile = document.querySelector(".contendor_opciones") /* el azul */
    let opcionesMobileInterior = document.querySelector(".contendor_opciones-interior") /* el rojo */

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


    /* CONTENEDORES CON LOS PRODUCTOS */
    /* total */
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")
    /* de mayor precio */
    let contenedorMayorPrecio = document.querySelector(".lista_flexbox_desktop---mayorPrecio")
    /* de menor precio */
    let contenedorMenorPrecio = document.querySelector(".lista_flexbox_desktop---menorPrecio")
    /* de categorias */
    let contenedorComida = document.querySelector(".lista_flexbox_desktop---comida")
    let contenedorAccesorio = document.querySelector(".lista_flexbox_desktop---accesorio")
    let contenedorHigiene = document.querySelector(".lista_flexbox_desktop---higiene")
    let contenedorJuguete = document.querySelector(".lista_flexbox_desktop---juguete")
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")
    /* de OFF */
    let contenedorProdDescuentos = document.querySelector(".lista_flexbox_desktop---off")
    /* de marcas */
    let contenedorEukanuba = document.querySelector(".lista_flexbox_desktop---checkboxEukanuba")
    let contenedorRoyal = document.querySelector(".lista_flexbox_desktop---checkboxRoyal")
    let contenedorProPlan = document.querySelector(".lista_flexbox_desktop---checkboxProPlanPerro")
    let contenedorOtrasMarcas = document.querySelector(".lista_flexbox_desktop---checkboxOtrasMarcasPerro")
    /* ------- capturo los divs para COMBINACIONES -------- */
    /* de categorias */
    let contenedorAccesoriosOff = document.querySelector(".lista_flexbox_desktop---accesorioConOff")
    let contenedorComidaOff = document.querySelector(".lista_flexbox_desktop---comidaConOff")
    let contenedorHigieneOff = document.querySelector(".lista_flexbox_desktop---higieneConOff")
    let contenedorJuguetesOff = document.querySelector(".lista_flexbox_desktop---jugueteConOff")
    /* de precios */
    let contenedorPrimeroOff = document.querySelector(".lista_flexbox_desktop---de0a10ConOff")
    let contenedorSegundoOff = document.querySelector(".lista_flexbox_desktop---de10a20ConOff")
    let contenedorTerceroOff = document.querySelector(".lista_flexbox_desktop---de20a30ConOff")
    let contenedorCuartoOff = document.querySelector(".lista_flexbox_desktop---de30aXConOff")
    /* ------- capturo los divs para COMBINACIONES DOBLES -------- */
    /* accesorios */
    let contenedorAccesorio0a10 = document.querySelector(".lista_flexbox_desktop---accesorio0a10")
    let contenedorAccesorio10a20 = document.querySelector(".lista_flexbox_desktop---accesorio10a20")
    let contenedorAccesorio20a30 = document.querySelector(".lista_flexbox_desktop---accesorio20a30")
    let contenedorAccesorio30aX = document.querySelector(".lista_flexbox_desktop---accesorio30aX")
    /* comida */
    let contenedorComida0a10 = document.querySelector(".lista_flexbox_desktop---comida0a10")
    let contenedorComida10a20 = document.querySelector(".lista_flexbox_desktop---comida10a20")
    let contenedorComida20a30 = document.querySelector(".lista_flexbox_desktop---comida20a30")
    let contenedorComida30aX = document.querySelector(".lista_flexbox_desktop---comida30aX")
    /* higiene */
    let contenedorHigiene0a10 = document.querySelector(".lista_flexbox_desktop---higiene0a10")
    let contenedorHigiene10a20 = document.querySelector(".lista_flexbox_desktop---higiene10a20")
    let contenedorHigiene20a30 = document.querySelector(".lista_flexbox_desktop---higiene20a30")
    let contenedorHigiene30aX = document.querySelector(".lista_flexbox_desktop---higiene30aX")
    /* juguetes */
    let contenedorJuguete0a10 = document.querySelector(".lista_flexbox_desktop---juguete0a10")
    let contenedorJuguete10a20 = document.querySelector(".lista_flexbox_desktop---juguete10a20")
    let contenedorJuguete20a30 = document.querySelector(".lista_flexbox_desktop---juguete20a30")
    let contenedorJuguete30aX = document.querySelector(".lista_flexbox_desktop---juguete30aX")

    let tituloPerro = document.querySelector("#h2tituloPerro")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")
    let main = document.querySelector("main")

    /* los .opcion-filtro-elegido */
    let tituloSeleccionOrdenar = document.querySelector(".opcion-filtro-elegido1")
    let tituloSeleccionCategorias = document.querySelector(".opcion-filtro-elegido2")
    let tituloSeleccionPrecios = document.querySelector(".opcion-filtro-elegido3")
    let tituloSeleccionDescuentos = document.querySelector(".opcion-filtro-elegido4")
    let tituloSeleccionMarcas = document.querySelector(".opcion-filtro-elegido5")


    /* MOBILE para que aparezca el contenedor azul ppal oculto, al apretar Filtrar */
    filtrarMobile.addEventListener("click", () => {

        /* alert("hola") */

        opcionesMobile.classList.toggle("contendor_opciones2")
 

    })

    /* MOBILE para que aparezca el div violeta con las opciones a checkear (segundo div oculto con los checkbox de los filtros) al apretar en cada contenedor verde */
    contenedorFiltro1.addEventListener("click", () => { /* al hacer click en el div verde de Ordenar por */

        /* para q se vea el div oculto violeta dentro de Ordenar por */
        opcionesMobileDentroDelOtro1.classList.toggle("contendor_opciones-dentrodelotro1a")

        /* contenedorFiltro2.style.pointerEvents = "none"
        contenedorFiltro3.style.pointerEvents = "none"
        contenedorFiltro4.style.pointerEvents = "none"
        contenedorFiltroUltimo.style.pointerEvents = "none" */

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltro2.classList.toggle("contenedor-flechita-externo2a") /* el div verde de Categorias */
        contenedorFiltro3.classList.toggle("contenedor-flechita-externo3a") /* el div verde de Precios */
        contenedorFiltro4.classList.toggle("contenedor-flechita-externo4a") /* el div verde de Descuentos */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajoa") /* el div verde de Marcas */

        /* para la altura del div ppal azul */
        opcionesMobile.classList.toggle("contendor_opciones2a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior2a") */
        
        /* opcionesMobile.style.height = "495px" */

        
    })

    contenedorFiltro2.addEventListener("click", () => { /* al hacer click en el div verde de Categoria */

        /* para q se vea el div oculto violeta dentro de Categorias */
        opcionesMobileDentroDelOtro2.classList.toggle("contendor_opciones-dentrodelotro2a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltro3.classList.toggle("contenedor-flechita-externo3b") /* el div verde de Precios */
        contenedorFiltro4.classList.toggle("contenedor-flechita-externo4b") /* el div verde de Descuentos */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajob") /* el div verde de Marcas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones3a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior3a") */
        
    })

    contenedorFiltro3.addEventListener("click", () => { /* al hacer click en el div verde de Precio */

        /* para q se vea el div oculto violeta dentro de Precios */
        opcionesMobileDentroDelOtro3.classList.toggle("contendor_opciones-dentrodelotro3a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltro4.classList.toggle("contenedor-flechita-externo4c") /* el div verde de Descuentos */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajoc") /* el div verde de Marcas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones4a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior4a") */
        
    })

    contenedorFiltro4.addEventListener("click", () => { /* al hacer click en el div verde de Descuentos */

        /* para q se vea el div oculto violeta dentro de Descuentos */
        opcionesMobileDentroDelOtro4.classList.toggle("contendor_opciones-dentrodelotro4a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajod") /* el div verde de Marcas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones5a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior5a") */
        
    })

    contenedorFiltroUltimo.addEventListener("click", () => { /* al hacer click en el div verde de Marcas */

        /* para q se vea el div oculto violeta dentro de Marcas */
        opcionesMobileDentroDelOtro5.classList.toggle("contendor_opciones-dentrodelotro5a")

        /* aca no hay traslacion porq el ultimo div verde (el de marcas) se queda donde está */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones6a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior6a") */
        
    })


    /* MOBILE para que al apretar en un filtro en cualquier parte del boton (div azul), se checkee su correspondiente checkbox */
    /* -------------------- dentro de Ordenar por -------------------- */
    /* --------------------------------------------------------------- */
    opcionOrdenarPorCategoria.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxOrdenarPorCategoria.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorCategoria.checked = true /* lo checkea */
            contenedorVisible.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            tituloSeleccionOrdenar.innerHTML = "Categoría"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxOrdenarPorCategoria.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorCategoria.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
        }
        
    })
    checkboxOrdenarPorCategoria.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxOrdenarPorCategoria.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorCategoria.checked = true /* lo checkea */
            contenedorVisible.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            tituloSeleccionOrdenar.innerHTML = "Categoría"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxOrdenarPorCategoria.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorCategoria.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionOrdenarPorMenorPrecio.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxOrdenarPorMenorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = true /* lo checkea */
            contenedorMenorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxOrdenarPorMenorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = false /* lo descheckea */
            contenedorMenorPrecio.style.display = "none"
            contenedorVisible.style.display = "flex"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Categoría"
        }
        
    })
    checkboxOrdenarPorMenorPrecio.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxOrdenarPorMenorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = true /* lo checkea */
            contenedorMenorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxOrdenarPorMenorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = false /* lo descheckea */
            contenedorMenorPrecio.style.display = "none"
            contenedorVisible.style.display = "flex"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Categoría"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionOrdenarPorMayorPrecio.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxOrdenarPorMayorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = true /* lo checkea */
            contenedorMayorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Mayor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxOrdenarPorMayorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = false /* lo descheckea */
            contenedorVisible.style.display = "flex"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Categoría"
        }
        
    })
    checkboxOrdenarPorMayorPrecio.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxOrdenarPorMayorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = true /* lo checkea */
            contenedorMayorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Mayor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxOrdenarPorMayorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = false /* lo descheckea */
            contenedorVisible.style.display = "flex"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionOrdenar.innerHTML = "Categoría"
        }
        
    })


    /* -------------------- dentro de Categorias -------------------- */
    /* -------------------------------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    opcionCategoriaAccesorios.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxCategoriaAccesorios.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaAccesorios.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "11 resultados"
            tituloSeleccionCategorias.innerHTML = "Accesorios"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaAccesorios.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaAccesorios.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaAccesorios.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaAccesorios.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaAccesorios.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "11 resultados"
            tituloSeleccionCategorias.innerHTML = "Accesorios"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaAccesorios.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaAccesorios.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionCategoriaComida.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxCategoriaComida.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaComida.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionCategorias.innerHTML = "Comida"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaComida.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaComida.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorComida.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaComida.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaComida.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaComida.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionCategorias.innerHTML = "Comida"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaComida.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaComida.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorComida.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionCategoriaHigiene.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxCategoriaHigiene.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaHigiene.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "9 resultados"
            tituloSeleccionCategorias.innerHTML = "Higiene"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaHigiene.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaHigiene.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaHigiene.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaHigiene.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaHigiene.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "9 resultados"
            tituloSeleccionCategorias.innerHTML = "Higiene"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaHigiene.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaHigiene.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionCategoriaJuguetes.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxCategoriaJuguetes.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaJuguetes.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionCategorias.innerHTML = "Juguetes"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaJuguetes.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaJuguetes.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaJuguetes.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaJuguetes.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaJuguetes.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionCategorias.innerHTML = "Juguetes"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxCategoriaJuguetes.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaJuguetes.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })


    /* -------------------- dentro de Precios -------------------- */
    /* ----------------------------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    opcionPrecioPrimerRango.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxPrecioPrimerRango.checked == false){  /* si el check NO esta checkeado */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            checkboxPrecioPrimerRango.checked = true /* lo checkea */
            contenedorprimero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "15 resultados"
            tituloSeleccionPrecios.innerHTML = "0 a $10"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false
            
        } else if(checkboxPrecioPrimerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioPrimerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorprimero.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioPrimerRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioPrimerRango.checked == false){  /* si el check NO esta checkeado */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            checkboxPrecioPrimerRango.checked = true /* lo checkea */
            contenedorprimero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "15 resultados"
            tituloSeleccionPrecios.innerHTML = "0 a $10"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxPrecioPrimerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioPrimerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorprimero.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionPrecioSegundoRango.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxPrecioSegundoRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioSegundoRango.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionPrecios.innerHTML = "$11 a $20"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxPrecioSegundoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioSegundoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorsegundo.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioSegundoRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioSegundoRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioSegundoRango.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionPrecios.innerHTML = "$11 a $20"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false


        } else if(checkboxPrecioSegundoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioSegundoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorsegundo.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionPrecioTercerRango.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxPrecioTercerRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioTercerRango.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "8 resultados"
            tituloSeleccionPrecios.innerHTML = "$21 a $30"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxPrecioTercerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioTercerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedortercero.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioTercerRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioTercerRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioTercerRango.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "8 resultados"
            tituloSeleccionPrecios.innerHTML = "$21 a $30"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxPrecioTercerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioTercerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedortercero.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionPrecioCuartoRango.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxPrecioCuartoRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioCuartoRango.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloSeleccionPrecios.innerHTML = "Más de $30"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxPrecioCuartoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioCuartoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorcuarto.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioCuartoRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioCuartoRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioCuartoRango.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloSeleccionPrecios.innerHTML = "Más de $30"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxPrecioCuartoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioCuartoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorcuarto.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })


    /* -------------------- dentro de Descuentos -------------------- */
    /* -------------------------------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    opcionConDescuento.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxConDescuento.checked == false){  /* si el check NO esta checkeado */

            checkboxConDescuento.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionDescuentos.innerHTML = "Con 20% OFF"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxConDescuento.checked == true){  /* si el check esta checkeado */

            checkboxConDescuento.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            contenedorProdDescuentos.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxConDescuento.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxConDescuento.checked == false){  /* si el check NO esta checkeado */

            checkboxConDescuento.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionDescuentos.innerHTML = "Con 20% OFF"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxConDescuento.checked == true){  /* si el check esta checkeado */

            checkboxConDescuento.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            contenedorProdDescuentos.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })


    /* -------------------- dentro de Marcas -------------------- */
    /* ---------------------------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    opcionMarcaEukanuba.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxMarcaEukanuba.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaEukanuba.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorEukanuba.style.display = "flex"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloSeleccionMarcas.innerHTML = "Eukanuba"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxMarcaEukanuba.checked == true){  /* si el check esta checkeado */

            checkboxMarcaEukanuba.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorEukanuba.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxMarcaEukanuba.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxMarcaEukanuba.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaEukanuba.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorEukanuba.style.display = "flex"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloSeleccionMarcas.innerHTML = "Eukanuba"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxMarcaEukanuba.checked == true){  /* si el check esta checkeado */

            checkboxMarcaEukanuba.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorEukanuba.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionMarcaRoyal.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxMarcaRoyal.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaRoyal.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorRoyal.style.display = "flex"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloSeleccionMarcas.innerHTML = "Royal Canin"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxMarcaRoyal.checked == true){  /* si el check esta checkeado */

            checkboxMarcaRoyal.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorRoyal.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxMarcaRoyal.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxMarcaRoyal.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaRoyal.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorRoyal.style.display = "flex"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloSeleccionMarcas.innerHTML = "Royal Canin"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaProPlan.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxMarcaRoyal.checked == true){  /* si el check esta checkeado */

            checkboxMarcaRoyal.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorRoyal.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionMarcaProPlan.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxMarcaProPlan.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaProPlan.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorProPlan.style.display = "flex"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloSeleccionMarcas.innerHTML = "Pro Plan"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxMarcaProPlan.checked == true){  /* si el check esta checkeado */

            checkboxMarcaProPlan.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorProPlan.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxMarcaProPlan.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxMarcaProPlan.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaProPlan.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            contenedorProPlan.style.display = "flex"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloSeleccionMarcas.innerHTML = "Pro Plan"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaOtras.checked = false

        } else if(checkboxMarcaProPlan.checked == true){  /* si el check esta checkeado */

            checkboxMarcaProPlan.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorProPlan.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionMarcaOtras.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxMarcaOtras.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaOtras.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "flex"
            cantidadProductosMobile.innerHTML = "30 resultados"
            tituloSeleccionMarcas.innerHTML = "Otras marcas"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false

        } else if(checkboxMarcaOtras.checked == true){  /* si el check esta checkeado */

            checkboxMarcaOtras.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorOtrasMarcas.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxMarcaOtras.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxMarcaOtras.checked == false){  /* si el check NO esta checkeado */

            checkboxMarcaOtras.checked = true /* lo checkea */
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorEukanuba.style.display = "none"
            contenedorRoyal.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "flex"
            cantidadProductosMobile.innerHTML = "30 resultados"
            tituloSeleccionMarcas.innerHTML = "Otras marcas"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMarcaEukanuba.checked = false
            checkboxMarcaRoyal.checked = false
            checkboxMarcaProPlan.checked = false

        } else if(checkboxMarcaOtras.checked == true){  /* si el check esta checkeado */

            checkboxMarcaOtras.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloSeleccionMarcas.innerHTML = "Sin selección"
            contenedorOtrasMarcas.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })


})