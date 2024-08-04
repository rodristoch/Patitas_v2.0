window.addEventListener("load", () => {

    /* ------- capturo los botones ------- */
    let botonOrdenar = document.querySelector("#btn-ordenarPor")
    let flechita = document.querySelector("#flechita-abajo")  /* la flechita de al lado */
    
    
    /* ------- capturo los divs -------- */
    let opciones = document.querySelector("#divOpciones")

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
    let contenedorCatit = document.querySelector(".lista_flexbox_desktop---checkboxCatitGato")
    let contenedorCancat = document.querySelector(".lista_flexbox_desktop---checkboxCancatGato")
    let contenedorPurina = document.querySelector(".lista_flexbox_desktop---checkboxPurinaGato")
    let contenedorProPlan = document.querySelector(".lista_flexbox_desktop---checkboxProPlanGato")
    let contenedorOtrasMarcas = document.querySelector(".lista_flexbox_desktop---checkboxOtrasMarcasGato")
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


    /* ------- capturo los filtros -------- */
    let opcionCategoria = document.querySelector("#btn-filtroCategoria")
    let opcionMenorPrecio = document.querySelector("#btn-filtroMenorPrecio")
    let opcionMayorPrecio = document.querySelector("#btn-filtroMayorPrecio")
    let opcionMascota = document.querySelector("#btn-filtroMascota")
    


    botonOrdenar.addEventListener("click", () => {

        /* opciones.style.display = "flex" */
        opciones.classList.toggle("contendor_opciones-Desktop2")  /* con el toggle si el al apretar el boton de ordenar ese div no tiene la clase pasada por parametro la agrega, y si la tiene la quita */

        flechita.classList.toggle("fa-chevron-down2")
    })


    opcionMenorPrecio.addEventListener("click", () => {

        if(contenedorVisible.style.display = "flex"){

            contenedorMenorPrecio.style.display = "flex"
            botonOrdenar.innerHTML = "Menor Precio"

            contenedorMayorPrecio.style.display = "none"

            contenedorVisible.style.display = "none"

            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"

            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorCatit.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorPurina.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES -------- */
            /* de categorias */
            contenedorAccesoriosOff.style.display = "none"
            contenedorComidaOff.style.display = "none"
            contenedorHigieneOff.style.display = "none"
            contenedorJuguetesOff.style.display = "none"
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES DOBLES -------- */
            /* accesorios */
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            /* comida */
            contenedorComida0a10.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida30aX.style.display = "none"
            /* higiene */
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            /* juguetes */
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete30aX.style.display = "none"

            opciones.classList.toggle("contendor_opciones-Desktop2")

            flechita.classList.toggle("fa-chevron-down2")
        } else {

            contenedorVisible.style.display = "flex"


        }
    })

    opcionMayorPrecio.addEventListener("click", () => {

        if(contenedorVisible.style.display = "flex"){

            contenedorMayorPrecio.style.display = "flex"
            botonOrdenar.innerHTML = "Mayor Precio"

            contenedorMenorPrecio.style.display = "none"

            contenedorVisible.style.display = "none"

            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"

            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorCatit.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorPurina.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES -------- */
            /* de categorias */
            contenedorAccesoriosOff.style.display = "none"
            contenedorComidaOff.style.display = "none"
            contenedorHigieneOff.style.display = "none"
            contenedorJuguetesOff.style.display = "none"
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES DOBLES -------- */
            /* accesorios */
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            /* comida */
            contenedorComida0a10.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida30aX.style.display = "none"
            /* higiene */
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            /* juguetes */
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete30aX.style.display = "none"

            opciones.classList.toggle("contendor_opciones-Desktop2")

            flechita.classList.toggle("fa-chevron-down2")
        } else {

            contenedorVisible.style.display = "flex"


        }
    })

    opcionCategoria.addEventListener("click", () => {

        if(contenedorVisible.style.display = "flex"){

            contenedorMayorPrecio.style.display = "none"

            contenedorMenorPrecio.style.display = "none"

            contenedorVisible.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"

            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"

            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorCatit.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorPurina.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES -------- */
            /* de categorias */
            contenedorAccesoriosOff.style.display = "none"
            contenedorComidaOff.style.display = "none"
            contenedorHigieneOff.style.display = "none"
            contenedorJuguetesOff.style.display = "none"
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES DOBLES -------- */
            /* accesorios */
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            /* comida */
            contenedorComida0a10.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida30aX.style.display = "none"
            /* higiene */
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            /* juguetes */
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete30aX.style.display = "none"

            opciones.classList.toggle("contendor_opciones-Desktop2")

            flechita.classList.toggle("fa-chevron-down2")
        } else {

            contenedorVisible.style.display = "flex"


        }
    })

    opcionMascota.addEventListener("click", () => {

        if(contenedorVisible.style.display = "flex"){

            contenedorMayorPrecio.style.display = "none"

            contenedorMenorPrecio.style.display = "none"

            contenedorVisible.style.display = "flex"
            botonOrdenar.innerHTML = "Mascota"

            contenedorComida.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorJuguete.style.display = "none"

            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorCatit.style.display = "none"
            contenedorCancat.style.display = "none"
            contenedorPurina.style.display = "none"
            contenedorProPlan.style.display = "none"
            contenedorOtrasMarcas.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES -------- */
            /* de categorias */
            contenedorAccesoriosOff.style.display = "none"
            contenedorComidaOff.style.display = "none"
            contenedorHigieneOff.style.display = "none"
            contenedorJuguetesOff.style.display = "none"
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"
            /* ------- capturo los divs para COMBINACIONES DOBLES -------- */
            /* accesorios */
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            /* comida */
            contenedorComida0a10.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida30aX.style.display = "none"
            /* higiene */
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            /* juguetes */
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete30aX.style.display = "none"

            opciones.classList.toggle("contendor_opciones-Desktop2")

            flechita.classList.toggle("fa-chevron-down2")
        } else {

            contenedorVisible.style.display = "flex"


        }
    })


            
  
})