window.addEventListener("load", () => {

    /* ------- capturo el boton con el filtro elegido ------- */
    let botonOrdenar = document.querySelector("#juan")
    let flechita = document.querySelector("#flechita-abajo")  /* la flechita de al lado */
    
    /* ------- capturo el div contenedor de las opciones -------- */
    let opciones = document.querySelector("#pepe")

    /* ------- capturo los filtros a elegir -------- */
    let opcionMenorPrecio = document.querySelector("#rodri")
    let opcionMayorPrecio = document.querySelector("#pedri")
    let opcionRelevancia = document.querySelector("#rele")

    /* el div que se ve de entrada (seria categorias/relevancia) */
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")

    /* de mayor precio */
    let contenedorMayorPrecio = document.querySelector(".lista_flexbox_desktop---mayorPrecio")
    /* de menor precio */
    let contenedorMenorPrecio = document.querySelector(".lista_flexbox_desktop---menorPrecio")

    /* ------- capturo los divs -------- */
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")

    /* de OFF */
    let contenedorProdDescuentos = document.querySelector(".lista_flexbox_desktop---off")

    /* de mascotas */
    let contenedorProdGato = document.querySelector(".lista_flexbox_desktop---gato")
    let contenedorProdPerro = document.querySelector(".lista_flexbox_desktop---perro")

    /* ------- capturo los divs de COMBINACIONES -------- */
    /* de precios */
    let contenedorPrimeroOff = document.querySelector(".lista_flexbox_desktop---de0a10ConOff")
    let contenedorSegundoOff = document.querySelector(".lista_flexbox_desktop---de10a20ConOff")
    let contenedorTerceroOff = document.querySelector(".lista_flexbox_desktop---de20a30ConOff")
    let contenedorCuartoOff = document.querySelector(".lista_flexbox_desktop---de30aXConOff")
    

    botonOrdenar.addEventListener("click", () => {

        /* alert("hola") */
        /* opciones.style.display = "flex" */
        opciones.classList.toggle("contendor_opciones-Desktop2")  /* con el toggle si el al apretar el boton de ordenar ese div no tiene la clase pasada por parametro la agrega, y si la tiene la quita */

        flechita.classList.toggle("fa-chevron-down2")
    })


    /* AL APRETAR EN CADA FILTRO */
    opcionMenorPrecio.addEventListener("click", () => {

        opciones.classList.toggle("contendor_opciones-Desktop2")

        flechita.classList.toggle("fa-chevron-down2")

        if(contenedorVisible.style.display = "flex"){

            contenedorMenorPrecio.style.display = "flex"
            botonOrdenar.innerHTML = "Menor Precio"

            contenedorMayorPrecio.style.display = "none"

            contenedorVisible.style.display = "none"

            /* los divs comunes bye */
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorProdGato.style.display = "none"
            contenedorProdPerro.style.display = "none"

            /* ------- los divs para COMBINACIONES bye -------- */
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"
            
        } else {

            contenedorVisible.style.display = "flex"


        }
    })

    opcionMayorPrecio.addEventListener("click", () => {

        opciones.classList.toggle("contendor_opciones-Desktop2")

        flechita.classList.toggle("fa-chevron-down2")

        if(contenedorVisible.style.display = "flex"){

            contenedorMayorPrecio.style.display = "flex"
            botonOrdenar.innerHTML = "Mayor Precio"

            contenedorMenorPrecio.style.display = "none"

            contenedorVisible.style.display = "none"

            /* los divs comunes bye */
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorProdGato.style.display = "none"
            contenedorProdPerro.style.display = "none"

            /* ------- los divs para COMBINACIONES bye -------- */
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"

        } else {

            contenedorVisible.style.display = "flex"


        }
    })

    opcionRelevancia.addEventListener("click", () => {

        opciones.classList.toggle("contendor_opciones-Desktop2")

        flechita.classList.toggle("fa-chevron-down2")

        if(contenedorVisible.style.display = "flex"){

            contenedorVisible.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"

            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"

            /* los divs comunes bye */
            contenedorprimero.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedortercero.style.display = "none"
            contenedorcuarto.style.display = "none"

            contenedorProdDescuentos.style.display = "none"

            contenedorProdGato.style.display = "none"
            contenedorProdPerro.style.display = "none"

            /* ------- los divs para COMBINACIONES bye -------- */
            /* de precios */
            contenedorPrimeroOff.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            contenedorTerceroOff.style.display = "none"
            contenedorCuartoOff.style.display = "none"

        } else {

            contenedorVisible.style.display = "flex"


        }
    })

})