window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    /* el Filtrar en MOBILE */
    let filtrarMobile = document.querySelector(".btn-icon")
    
    /* ------- capturo los divs -------- */
    /* el contenedor en MOBILE */
    /* los ppales */
    let opcionesMobile = document.querySelector(".contendor_opciones-categoria") /* el azul */
    let opcionesMobileInterior = document.querySelector(".contendor_opciones-interior") /* el rojo */

    /* los divs verdes */
    let contenedorFiltro1 = document.querySelector(".contenedor-flechita-externo1") /* el div verde de Ordenar por */
    let contenedorFiltro3 = document.querySelector(".contenedor-flechita-externo3") /* el div verde de Precio */
    let contenedorFiltro4 = document.querySelector(".contenedor-flechita-externo4") /* el div verde de Descuentos */
    let contenedorFiltroUltimo = document.querySelector(".contenedor-flechita-externo-ultimodeabajo") /* el div verde de Mascotas */

    /* los violetas dentro de los verdes */
    let opcionesMobileDentroDelOtro1 = document.querySelector(".contendor_opciones-dentrodelotro1") /* el div oculto de Ordenar por */
    let opcionesMobileDentroDelOtro3 = document.querySelector(".contendor_opciones-dentrodelotro3") /* el div oculto de Precio */
    let opcionesMobileDentroDelOtro4 = document.querySelector(".contendor_opciones-dentrodelotro4") /* el div oculto de Descuentos */
    let opcionesMobileDentroDelOtro5 = document.querySelector(".contendor_opciones-dentrodelotro5") /* el div oculto de Mascotas */

    /* los azules dentro de los violetas */
    /* dentro de Ordenar por */
    let opcionOrdenarPorCategoria = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorCategoria")  /* aca es Relevancia en realidad */
    let opcionOrdenarPorMenorPrecio = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorMenorPrecio")
    let opcionOrdenarPorMayorPrecio = document.querySelector(".contenedor-opcion-con-checkbox-OrdenarPorMayorPrecio")
    /* dentro de Precios */
    let opcionPrecioPrimerRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioPrimerRango")
    let opcionPrecioSegundoRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioSegundoRango")
    let opcionPrecioTercerRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioTercerRango")
    let opcionPrecioCuartoRango = document.querySelector(".contenedor-opcion-con-checkbox-PrecioCuartoRango")
    /* dentro de Descuentos */
    let opcionConDescuento = document.querySelector(".contenedor-opcion-con-checkbox-ConDescuento")
    /* dentro de Mascotas */
    let opcionMascotaPerro = document.querySelector(".contenedor-opcion-con-checkbox-perro")
    let opcionMascotaGato = document.querySelector(".contenedor-opcion-con-checkbox-gato")

    /* ------- los checkbox ------- */
    /* dentro de Ordenar por */
    let checkboxOrdenarPorCategoria = document.querySelector("#categoriaMobile")
    let checkboxOrdenarPorMenorPrecio = document.querySelector("#menorPrecioMobile")
    let checkboxOrdenarPorMayorPrecio = document.querySelector("#mayorPrecioMobile")
    /* dentro de Precios */
    let checkboxPrecioPrimerRango = document.querySelector("#primerrangoMobile")
    let checkboxPrecioSegundoRango = document.querySelector("#segundorangoMobile")
    let checkboxPrecioTercerRango = document.querySelector("#tercerrangoMobile")
    let checkboxPrecioCuartoRango = document.querySelector("#cuartorangoMobile")
    /* dentro de Descuentos */
    let checkboxConDescuento = document.querySelector("#conOffMobile")
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
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")
    /* de OFF */
    let contenedorProdDescuentos = document.querySelector(".lista_flexbox_desktop---off")
    /* de mascotas */
    let contenedorPerro = document.querySelector(".lista_flexbox_desktop---perro")
    let contenedorGato = document.querySelector(".lista_flexbox_desktop---gato")
    

    let tituloPerro = document.querySelector("#h2tituloPerro")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")

    /* los .opcion-filtro-elegido */
    let tituloSeleccionOrdenar = document.querySelector(".opcion-filtro-elegido1")
    let tituloSeleccionPrecios = document.querySelector(".opcion-filtro-elegido3")
    let tituloSeleccionDescuentos = document.querySelector(".opcion-filtro-elegido4")
    let tituloSeleccionMascota = document.querySelector(".opcion-filtro-elegido5")


    /* MOBILE para que aparezca el contenedor azul ppal oculto, al apretar Filtrar */
    filtrarMobile.addEventListener("click", () => {

        /* alert("hola") */

        opcionesMobile.classList.toggle("contendor_opciones-categoria2")
        

    })

    /* MOBILE para que aparezca el div violeta con las opciones a checkear (segundo div oculto con los checkbox de los filtros) al apretar en cada contenedor verde */
    contenedorFiltro1.addEventListener("click", () => { /* al hacer click en el div de Ordenar por */

        /* para q se vea el div oculto violeta dentro de Ordenar por */
        opcionesMobileDentroDelOtro1.classList.toggle("contendor_opciones-dentrodelotro1a")

        /* contenedorFiltro2.style.pointerEvents = "none"
        contenedorFiltro3.style.pointerEvents = "none"
        contenedorFiltro4.style.pointerEvents = "none"
        contenedorFiltroUltimo.style.pointerEvents = "none" */

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltro3.classList.toggle("contenedor-flechita-externo3a") /* el div verde de Precios */
        contenedorFiltro4.classList.toggle("contenedor-flechita-externo4a") /* el div verde de Descuentos */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajoa") /* el div verde de Marcas */

        /* para la altura del div ppal azul */
        opcionesMobile.classList.toggle("contendor_opciones-categoria2a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior2a") */
        
        /* opcionesMobile.style.height = "495px" */
    })

    contenedorFiltro3.addEventListener("click", () => { /* al hacer click en el div verde de Precio */

        /* para q se vea el div oculto violeta dentro de Precios */
        opcionesMobileDentroDelOtro3.classList.toggle("contendor_opciones-dentrodelotro2a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltro4.classList.toggle("contenedor-flechita-externo4c") /* el div verde de Descuentos */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajoc") /* el div verde de Marcas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones-categoria3a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior4a") */
        
    })

    contenedorFiltro4.addEventListener("click", () => { /* al hacer click en el div verde de Descuentos */

        /* para q se vea el div oculto violeta dentro de Descuentos */
        opcionesMobileDentroDelOtro4.classList.toggle("contendor_opciones-dentrodelotro3a")

        /* para hacer la traslacion de los divs verdes siguientes */
        contenedorFiltroUltimo.classList.toggle("contenedor-flechita-externo-ultimodeabajod") /* el div verde de Marcas */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones-categoria4a")
        /* para la altura del div intero rojo */
        /* opcionesMobileInterior.classList.toggle("contendor_opciones-interior5a") */
        
    })

    contenedorFiltroUltimo.addEventListener("click", () => { /* al hacer click en el div verde de Marcas */

        /* para q se vea el div oculto violeta dentro de Marcas */
        opcionesMobileDentroDelOtro5.classList.toggle("contendor_opciones-dentrodelotro4a")

        /* aca no hay traslacion porq el ultimo div verde (el de marcas) se queda donde está */

        /* para la altura del div ppal */
        opcionesMobile.classList.toggle("contendor_opciones-categoria5a")
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
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            contenedorVisible.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxOrdenarPorCategoria.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorCategoria.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
        }
        
    })
    checkboxOrdenarPorCategoria.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxOrdenarPorCategoria.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorCategoria.checked = true /* lo checkea */
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            contenedorVisible.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxOrdenarPorCategoria.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorCategoria.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionOrdenarPorMenorPrecio.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxOrdenarPorMenorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = true /* lo checkea */
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorMenorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxOrdenarPorMenorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = false /* lo descheckea */
            contenedorMenorPrecio.style.display = "none"
            contenedorVisible.style.display = "flex"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
        }
        
    })
    checkboxOrdenarPorMenorPrecio.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxOrdenarPorMenorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = true /* lo checkea */
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorMenorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxOrdenarPorMenorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMenorPrecio.checked = false /* lo descheckea */
            contenedorMenorPrecio.style.display = "none"
            contenedorVisible.style.display = "flex"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
        }
        
    })
    /* --------------------------------------------------------------------------------------------------------- */
    opcionOrdenarPorMayorPrecio.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxOrdenarPorMayorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = true /* lo checkea */
            tituloSeleccionOrdenar.innerHTML = "Mayor Precio"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorMayorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            
        } else if(checkboxOrdenarPorMayorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = false /* lo descheckea */
            contenedorVisible.style.display = "flex"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
        }
        
    })
    checkboxOrdenarPorMayorPrecio.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxOrdenarPorMayorPrecio.checked == false){  /* si el check NO esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = true /* lo checkea */
            tituloSeleccionOrdenar.innerHTML = "Mayor Precio"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorMayorPrecio.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxOrdenarPorMayorPrecio.checked == true){  /* si el check esta checkeado */

            checkboxOrdenarPorMayorPrecio.checked = false /* lo descheckea */
            contenedorVisible.style.display = "flex"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionOrdenar.innerHTML = "Relevancia"
        }
        
    })


    /* -------------------- dentro de Precios -------------------- */
    /* ----------------------------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    opcionPrecioPrimerRango.addEventListener("click", () => { /* al apretar en el contenedor azul */

        /* alert("hola") */
        if(checkboxPrecioPrimerRango.checked == false){  /* si el check NO esta checkeado */

            contenedorVisible.style.display = "none"
            checkboxPrecioPrimerRango.checked = true /* lo checkea */
            contenedorprimero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionPrecios.innerHTML = "0 a $10"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"
            
        } else if(checkboxPrecioPrimerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioPrimerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorprimero.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioPrimerRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioPrimerRango.checked == false){  /* si el check NO esta checkeado */

            contenedorVisible.style.display = "none"
            checkboxPrecioPrimerRango.checked = true /* lo checkea */
            contenedorprimero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloSeleccionPrecios.innerHTML = "0 a $10"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxPrecioPrimerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioPrimerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
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
            cantidadProductosMobile.innerHTML = "9 resultados"
            contenedorsegundo.style.display = "flex"
            tituloSeleccionPrecios.innerHTML = "$11 a $20"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxPrecioSegundoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioSegundoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorsegundo.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioSegundoRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioSegundoRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioSegundoRango.checked = true /* lo checkea */
            cantidadProductosMobile.innerHTML = "9 resultados"
            contenedorsegundo.style.display = "flex"
            tituloSeleccionPrecios.innerHTML = "$11 a $20"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"


        } else if(checkboxPrecioSegundoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioSegundoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
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
            contenedortercero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloSeleccionPrecios.innerHTML = "$21 a $30"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxPrecioTercerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioTercerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedortercero.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioTercerRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioTercerRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioTercerRango.checked = true /* lo checkea */
            contenedortercero.style.display = "flex"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloSeleccionPrecios.innerHTML = "$21 a $30"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxPrecioTercerRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioTercerRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
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
            contenedorcuarto.style.display = "flex"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionPrecios.innerHTML = "Más de $30"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxPrecioCuartoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioCuartoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            contenedorcuarto.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxPrecioCuartoRango.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxPrecioCuartoRango.checked == false){  /* si el check NO esta checkeado */

            checkboxPrecioCuartoRango.checked = true /* lo checkea */
            contenedorcuarto.style.display = "flex"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionPrecios.innerHTML = "Más de $30"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxConDescuento.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxPrecioCuartoRango.checked == true){  /* si el check esta checkeado */

            checkboxPrecioCuartoRango.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
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
            contenedorProdDescuentos.style.display = "flex"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionDescuentos.innerHTML = "Con 20% OFF"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxConDescuento.checked == true){  /* si el check esta checkeado */

            checkboxConDescuento.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            contenedorProdDescuentos.style.display = "none"
            contenedorVisible.style.display = "flex"
        }
        
    })
    checkboxConDescuento.addEventListener("click", () => { /* o al apretar en el checkbox directamente */

        /* alert("hola") */
        if(checkboxConDescuento.checked == false){  /* si el check NO esta checkeado */

            checkboxConDescuento.checked = true /* lo checkea */
            contenedorProdDescuentos.style.display = "flex"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloSeleccionDescuentos.innerHTML = "Con 20% OFF"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaPerro.checked = false
            checkboxMascotaGato.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorGato.style.display = "none"

        } else if(checkboxConDescuento.checked == true){  /* si el check esta checkeado */

            checkboxConDescuento.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "20 resultados"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            contenedorProdDescuentos.style.display = "none"
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
            contenedorPerro.style.display = "flex"
            cantidadProductosMobile.innerHTML = "9 resultados"
            tituloSeleccionMascota.innerHTML = "Perro"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaGato.checked = false
            checkboxConDescuento.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorGato.style.display = "none"
            contenedorProdDescuentos.style.display = "none"

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
            contenedorPerro.style.display = "flex"
            cantidadProductosMobile.innerHTML = "9 resultados"
            tituloSeleccionMascota.innerHTML = "Perro"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaGato.checked = false
            checkboxConDescuento.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorGato.style.display = "none"
            contenedorProdDescuentos.style.display = "none"

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
            contenedorGato.style.display = "flex"
            cantidadProductosMobile.innerHTML = "11 resultados"
            tituloSeleccionMascota.innerHTML = "Gato"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaPerro.checked = false
            checkboxConDescuento.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorProdDescuentos.style.display = "none"

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
            contenedorGato.style.display = "flex"
            cantidadProductosMobile.innerHTML = "11 resultados"
            tituloSeleccionMascota.innerHTML = "Gato"
            tituloSeleccionPrecios.innerHTML = "Sin selección"
            tituloSeleccionOrdenar.innerHTML = "Menor Precio"
            tituloSeleccionDescuentos.innerHTML = "No mostrar"
            checkboxOrdenarPorCategoria.checked = false
            checkboxOrdenarPorMenorPrecio.checked = false
            checkboxOrdenarPorMayorPrecio.checked = false
            checkboxPrecioPrimerRango.checked = false
            checkboxPrecioSegundoRango.checked = false
            checkboxPrecioTercerRango.checked = false
            checkboxPrecioCuartoRango.checked = false
            checkboxMascotaPerro.checked = false
            checkboxConDescuento.checked = false
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"
            contenedorPerro.style.display = "none"
            contenedorProdDescuentos.style.display = "none"

        } else if(checkboxMarcaRoyal.checked == true){  /* si el check esta checkeado */

            checkboxMascotaGato.checked = false /* lo descheckea */
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloSeleccionMascota.innerHTML = "Sin selección"
            contenedorVisible.style.display = "flex"
        }
        
    })


})