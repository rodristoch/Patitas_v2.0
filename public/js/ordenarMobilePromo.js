window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    /* el Filtrar en MOBILE */
    let filtrarMobile = document.querySelector(".btn-icon")
    
    /* ------- capturo los divs -------- */
    /* el contenedor en MOBILE */
    /* los ppales */
    let opcionesMobile = document.querySelector(".contendor_opciones-promo") /* el azul */
    let opcionesMobileInterior = document.querySelector(".contendor_opciones-interior") /* el rojo */

    /* los divs verdes */
    let contenedorFiltro1 = document.querySelector(".contenedor-flechita-externo1") /* el div verde de Ordenar por */
    let contenedorFiltro2 = document.querySelector(".contenedor-flechita-externo2") /* el div verde de Categoria */
    let contenedorFiltro3 = document.querySelector(".contenedor-flechita-externo3") /* el div verde de Precio */
    let contenedorFiltroUltimo = document.querySelector(".contenedor-flechita-externo-ultimodeabajo-promo") /* el div verde de Mascotas */

    /* los violetas dentro de los verdes */
    let opcionesMobileDentroDelOtro1 = document.querySelector(".contendor_opciones-dentrodelotro1") /* el div oculto de Ordenar por */
    let opcionesMobileDentroDelOtro2 = document.querySelector(".contendor_opciones-dentrodelotro2") /* el div oculto de Categoria */
    let opcionesMobileDentroDelOtro3 = document.querySelector(".contendor_opciones-dentrodelotro3") /* el div oculto de Precio */
    let opcionesMobileDentroDelOtro4 = document.querySelector(".contendor_opciones-dentrodelotro4") /* el div oculto de Mascotas */

    /* los azules dentro de los violetas */
    /* dentro de Ordenar por */
    let opcionOrdenarPorCategoria = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorCategoria")  /* aca es Relevancia en realidad */
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
    /* dentro de Mascotas */
    let opcionMascotaPerro = document.querySelector(".contenedor-opcion-con-checkbox-perro")
    let opcionMascotaGato = document.querySelector(".contenedor-opcion-con-checkbox-gato")

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
    /* dentro de Mascotas */
    let checkboxMascotaPerro = document.querySelector("#perroMobile")
    let checkboxMascotaGato = document.querySelector("#gatoMobile")


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
    /* de mascotas */
    let contenedorPerro = document.querySelector(".lista_flexbox_desktop---offPerro")
    let contenedorGato = document.querySelector(".lista_flexbox_desktop---offGato")

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

    /* los .opcion-filtro-elegido */
    let tituloSeleccionOrdenar = document.querySelector(".opcion-filtro-elegido1")
    let tituloSeleccionCategorias = document.querySelector(".opcion-filtro-elegido2")
    let tituloSeleccionPrecios = document.querySelector(".opcion-filtro-elegido3")
    let tituloSeleccionMascota = document.querySelector(".opcion-filtro-elegido4")


    /* MOBILE para que aparezca el contenedor azul ppal oculto, al apretar Filtrar */
    filtrarMobile.addEventListener("click", () => {

        /* alert("hola") */

        opcionesMobile.classList.toggle("contendor_opciones-promo2")
        

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
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajoa-promo") /* el div verde de Mascotas */

        /* para la altura del div ppal azul */
        opcionesMobile.classList.toggle("contendor_opciones-promo2a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior2a") */
        
        /* opcionesMobile.style.height = "495px" */
    })

    contenedorFiltro2.addEventListener("click", () => { /* al hacer click en el div verde de Categoria */

        /* para q se vea el div oculto violeta dentro de Categorias */
        opcionesMobileDentroDelOtro2.classList.toggle("contendor_opciones-dentrodelotro2a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltro3.classList.toggle("contenedor-flechita-externo3b") /* el div verde de Precios */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajob-promo") /* el div verde de Mascotas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones-promo3a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior3a") */
        
    })

    contenedorFiltro3.addEventListener("click", () => { /* al hacer click en el div verde de Precio */

        /* para q se vea el div oculto violeta dentro de Precios */
        opcionesMobileDentroDelOtro3.classList.toggle("contendor_opciones-dentrodelotro3a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajoc-promo") /* el div verde de Mascotas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones-promo4a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior4a") */
        
    })

    contenedorFiltroUltimo.addEventListener("click", () => { /* al hacer click en el div verde de Mascotas */

        /* para q se vea el div oculto violeta dentro de Mascotas */
        opcionesMobileDentroDelOtro4.classList.toggle("contendor_opciones-dentrodelotro4a")

        /* aca no hay traslacion porq el ultimo div verde (el de Mascotas) se queda donde está */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones-promo5a")
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxOrdenarPorCategoria.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorCategoria.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxCategoriaAccesorios.checked = false
            checkboxCategoriaComida.checked = false
            checkboxCategoriaHigiene.checked = false
            checkboxCategoriaJuguetes.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxOrdenarPorCategoria.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorCategoria.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxOrdenarPorMenorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = false /* lo descheckea */
            contenedorMenorPrecio.style.display = "none"
            contenedorVisible.style.display = "flex"
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxOrdenarPorMenorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = false /* lo descheckea */
            contenedorMenorPrecio.style.display = "none"
            contenedorVisible.style.display = "flex"
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionOrdenar.innerHTML = "Mayor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxOrdenarPorMayorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = false /* lo descheckea */
            contenedorVisible.style.display = "flex"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionOrdenar.innerHTML = "Mayor Precio"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxOrdenarPorMayorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = false /* lo descheckea */
            contenedorVisible.style.display = "flex"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloSeleccionCategorias.innerHTML = "Accesorios"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaAccesorios.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaAccesorios.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaAccesorios.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaAccesorios.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaAccesorios.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloSeleccionCategorias.innerHTML = "Accesorios"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaAccesorios.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaAccesorios.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionCategorias.innerHTML = "Comida"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaComida.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaComida.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorComida.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaComida.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaComida.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaComida.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionCategorias.innerHTML = "Comida"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaComida.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaComida.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionCategorias.innerHTML = "Higiene"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaHigiene.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaHigiene.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaHigiene.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaHigiene.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaHigiene.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionCategorias.innerHTML = "Higiene"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaHigiene.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaHigiene.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloSeleccionCategorias.innerHTML = "Juguetes"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaJuguetes.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaJuguetes.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionCategorias.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxCategoriaJuguetes.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxCategoriaJuguetes.checked == false){  /* si el check NO esta checkeado */

            checkboxCategoriaJuguetes.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloSeleccionCategorias.innerHTML = "Juguetes"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxCategoriaJuguetes.checked == true){  /* si el check esta checkeado */

            checkboxCategoriaJuguetes.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            checkboxPrecioPrimerRango.checked = true /* lo checkea */
            contenedorprimero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloSeleccionPrecios.innerHTML = "0 a $10"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            
        } else if(checkboxPrecioPrimerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioPrimerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            checkboxPrecioPrimerRango.checked = true /* lo checkea */
            contenedorprimero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloSeleccionPrecios.innerHTML = "0 a $10"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxPrecioPrimerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioPrimerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionPrecios.innerHTML = "$11 a $20"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxPrecioSegundoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioSegundoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionPrecios.innerHTML = "$11 a $20"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false


        } else if(checkboxPrecioSegundoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioSegundoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionPrecios.innerHTML = "$21 a $30"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxPrecioTercerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioTercerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionPrecios.innerHTML = "$21 a $30"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxPrecioTercerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioTercerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionPrecios.innerHTML = "Más de $30"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxPrecioCuartoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioCuartoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionPrecios.innerHTML = "Más de $30"
            tituloSeleccionMascota.innerHTML = "Sin selección"
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
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false

        } else if(checkboxPrecioCuartoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioCuartoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorcuarto.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })


    /* -------------------- dentro de Mascotas -------------------- */
    /* ---------------------------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    opcionMascotaPerro.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxMascotaPerro.checked == false){  /* si el check NO esta checkeado */

            checkboxMascotaPerro.checked = true /* lo checkea */
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
            contenedorGato.style.display = "none"
            contenedorPerro.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionMascota.innerHTML = "Perro"
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
            checkboxMascotaGato.checked = false

        } else if(checkboxMascotaPerro.checked == true){  /* si el check esta checkeado */

            checkboxMascotaPerro.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxMascotaPerro.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxMascotaPerro.checked == false){  /* si el check NO esta checkeado */

            checkboxMascotaPerro.checked = true /* lo checkea */
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
            contenedorGato.style.display = "none"
            contenedorPerro.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionMascota.innerHTML = "Perro"
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
            checkboxMascotaGato.checked = false

        } else if(checkboxMarcaEukanuba.checked == true){  /* si el check esta checkeado */

            checkboxMascotaPerro.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorVisible.style.display = "flex"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionMascotaGato.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxMascotaGato.checked == false){  /* si el check NO esta checkeado */

            checkboxMascotaGato.checked = true /* lo checkea */
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "flex"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionMascota.innerHTML = "Gato"
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
            checkboxMascotaPerro.checked = false

        } else if(checkboxMascotaGato.checked == true){  /* si el check esta checkeado */

            checkboxMascotaGato.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxMascotaGato.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxMascotaGato.checked == false){  /* si el check NO esta checkeado */

            checkboxMascotaGato.checked = true /* lo checkea */
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
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "flex"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloSeleccionMascota.innerHTML = "Gato"
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
            checkboxMascotaPerro.checked = false

        } else if(checkboxMarcaRoyal.checked == true){  /* si el check esta checkeado */

            checkboxMascotaGato.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorVisible.style.display = "flex"
        }
        
    })


})