window.addEventListener("load", () => {

    let tituloGato = document.querySelector("#h2tituloGato")
    let cantidadProductos = document.querySelector("#cantidad-prod")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")

    /* ------- capturo los checkbox ------- */
    /* de precios */
    let primerrango = document.querySelector("#pato")
    let segundorango = document.querySelector("#mono")
    let tercerrango = document.querySelector("#perro")
    let cuartorango = document.querySelector("#gato")
    

    /* ------- capturo los divs -------- */
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")
    
    /* de mayor precio */
    let contenedorMayorPrecio = document.querySelector(".lista_flexbox_desktop---mayorPrecio")
    /* de menor precio */
    let contenedorMenorPrecio = document.querySelector(".lista_flexbox_desktop---menorPrecio")

    /* otros */
    let botonOrdenar = document.querySelector("#juan")
    let ordenar = document.querySelector("#ezeq")
    let flechitaAbajo = document.querySelector("#flechita-abajo")
    let divOpciones = document.querySelector(".contendor_opciones-Desktop")

    /* let contenedorInvisible = document.querySelector(".lista_flexbox_desktop---invisible") */
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")


    /* PRECIOS */
    primerrango.addEventListener("click", () => {

        if(primerrango.checked){

            contenedorprimero.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
        }
    })

    segundorango.addEventListener("click", () => {

        if(segundorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
        }
    })

    tercerrango.addEventListener("click", () => {

        if(tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"  /* son 8 resultados */
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
        }
    })

    cuartorango.addEventListener("click", () => {

        if(cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
        }
    })
})