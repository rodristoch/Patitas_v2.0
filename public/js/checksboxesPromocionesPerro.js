window.addEventListener("load", () => {

    let tituloGato = document.querySelector("#h2tituloGato")
    let cantidadProductos = document.querySelector("#cantidad-prod")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")

    /* ------- capturo los checkbox ------- */
    /* de CATEGORIAS */
    /* para perro */
    let accesoriosPerro = document.querySelector("#accesoriosPerro")
    let comidaPerro = document.querySelector("#comidaPerro")
    let higienePerro = document.querySelector("#higienePerro")
    let juguetesPerro = document.querySelector("#juguetesPerro")

    /* de PRECIOS */
    /* para perro */
    let primerrangoPerro = document.querySelector("#patoPerro")
    let segundorangoPerro = document.querySelector("#monoPerro")
    let tercerrangoPerro = document.querySelector("#perroPerro")
    let cuartorangoPerro = document.querySelector("#gatoPerro")

    
    /* ------- capturo los divs -------- */
    /* de categorias */
    let contenedorAccesorio = document.querySelector(".lista_flexbox_desktop---accesorio")
    let contenedorComida = document.querySelector(".lista_flexbox_desktop---comida")
    let contenedorHigiene = document.querySelector(".lista_flexbox_desktop---higiene")
    let contenedorJuguete = document.querySelector(".lista_flexbox_desktop---juguete")
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")
    
    
    /* ------- capturo los divs para COMBINACIONES -------- */
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

    /* SIMPLES:
    CATEGORIAS...LISTO
    PRECIOS...LISTO
    
    DOBLES:
    CATEGORIAS + PRECIOS...LISTO
    PRECIOS + CATEGORIAS...FALTA


    /* ---------------------------- PERRO --------------------------------- */
    /* CATEGORIAS */
    accesoriosPerro.addEventListener("click", () => {

        if(accesoriosPerro.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = true
            accesoriosPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            tituloGato.innerText = "Promociones Perro"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
        
    })

    comidaPerro.addEventListener("click", () => {

        if(comidaPerro.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida.style.display = "flex"
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorComida.style.display = "none"
            tituloGato.innerText = "Promociones Perro"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })

    higienePerro.addEventListener("click", () => {

        if(higienePerro.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene.style.display = "flex"
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = true
            accesoriosPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorHigiene.style.display = "none"
            tituloGato.innerText = "Promociones Perro"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })

    juguetesPerro.addEventListener("click", () => {

        if(juguetesPerro.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "flex"
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = true
            accesoriosPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorJuguete.style.display = "none"
            tituloGato.innerText = "Promociones Perro"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })


    /* PRECIOS */
    primerrangoPerro.addEventListener("click", () => {

        if(primerrangoPerro.checked){

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
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })

    segundorangoPerro.addEventListener("click", () => {

        if(segundorangoPerro.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })

    tercerrangoPerro.addEventListener("click", () => {

        if(tercerrangoPerro.checked){

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
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })

    cuartorangoPerro.addEventListener("click", () => {

        if(cuartorangoPerro.checked){

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
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })


    /* COMBINACIONES */
    /* PRECIOS + CATEGORIAS */
    /* primer rango */
    primerrangoPerro.addEventListener && accesoriosPerro.addEventListener("click", () => {

        if(primerrangoPerro.checked && accesoriosPerro.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked && accesoriosPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked == false && accesoriosPerro.checked){ /* SOLO ACCESORIO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Accesorios Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else if(primerrangoPerro.checked == false && accesoriosPerro.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        }
    })

    primerrangoPerro.addEventListener && comidaPerro.addEventListener("click", () => {

        if(primerrangoPerro.checked && comidaPerro.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked && comidaPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked == false && comidaPerro.checked){ /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Comida Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else if(primerrangoPerro.checked == false && comidaPerro.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        }
    })

    primerrangoPerro.addEventListener && higienePerro.addEventListener("click", () => {

        if(primerrangoPerro.checked && higienePerro.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked && higienePerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerrochecked == false && higienePerro.checked){ /* SOLO higiene */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else if(primerrangoPerro.checked == false && higienePerro.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        }
    })

    primerrangoPerro.addEventListener && juguetesPerro.addEventListener("click", () => {

        if(primerrangoPerro.checked && juguetesPerro.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked && juguetesPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(primerrangoPerro.checked == false && juguetesPerro.checked){ /* SOLO Juguetes */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        } else if(primerrangoPerro.checked == false && juguetesPerro.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        }
    })

    /* segundo rango */
    segundorangoPerro.addEventListener && accesoriosPerro.addEventListener("click", () => {

        if(segundorangoPerro.checked && accesoriosPerro.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(segundorangoPerro.checked && accesoriosPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Accesorios Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        }
    })

    segundorangoPerro.addEventListener && comidaPerro.addEventListener("click", () => {

        if(segundorangoPerro.checked && comidaPerro.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(segundorangoPerro.checked && comidaPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        }
    })

    segundorangoPerro.addEventListener && higienePerro.addEventListener("click", () => {

        if(segundorangoPerro.checked && higienePerro.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(segundorangoPerro.checked && higienePerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } 
    })

    segundorangoPerro.addEventListener && juguetesPerro.addEventListener("click", () => {

        if(segundorangoPerro.checked && juguetesPerro.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(segundorangoPerro.checked && juguetesPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        }
    })

    /* tercer rango */
    tercerrangoPerro.addEventListener && accesoriosPerro.addEventListener("click", () => {

        if(tercerrangoPerro.checked && accesoriosPerro.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else if(tercerrangoPerro.checked && accesoriosPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Accesorios Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        }
    })

    tercerrangoPerro.addEventListener && comidaPerro.addEventListener("click", () => {

        if(tercerrangoPerro.checked && comidaPerro.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else if(tercerrangoPerro.checked && comidaPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        }
    })

    tercerrangoPerro.addEventListener && higienePerro.addEventListener("click", () => {

        if(tercerrangoPerro.checked && higienePerro.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else if(tercerrangoPerro.checked && higienePerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } 
    })

    tercerrangoPerro.addEventListener && juguetesPerro.addEventListener("click", () => {

        if(tercerrangoPerro.checked && juguetesPerro.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else if(tercerrangoPerro.checked && juguetesPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        }
    })

    /* cuarto rango */
    cuartorangoPerro.addEventListener && accesoriosPerro.addEventListener("click", () => {

        if(cuartorangoPerro.checked && accesoriosPerro.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } else if(cuartorangoPerro.checked && accesoriosPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        }
    })

    cuartorangoPerro.addEventListener && comidaPerro.addEventListener("click", () => {

        if(cuartorangoPerro.checked && comidaPerro.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } else if(cuartorangoPerro.checked && comidaPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Comida Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        }
    })

    cuartorangoPerro.addEventListener && higienePerro.addEventListener("click", () => {

        if(cuartorangoPerro.checked && higienePerro.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } else if(cuartorangoPerro.checked && higienePerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } 
    })

    cuartorangoPerro.addEventListener && juguetesPerro.addEventListener("click", () => {

        if(cuartorangoPerro.checked && juguetesPerro.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaPerro.disabled = false
            accesoriosPerro.disabled = false
            higienePerro.disabled = false
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } else if(cuartorangoPerro.checked && juguetesPerro.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Perro"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        }
    })


    /* CATEGORIAS + PRECIOS */
    /* accesorios */
    accesoriosPerro.addEventListener && primerrangoPerro.addEventListener("click", () => {

        if(accesoriosPerro.checked && primerrangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(accesoriosPerro.checked && primerrangoPerro.checked == false){  /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false

        }

    })

    accesoriosPerro.addEventListener && segundorangoPerro.addEventListener("click", () => {

        if(accesoriosPerro.checked && segundorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(accesoriosPerro.checked && segundorangoPerro.checked == false){   /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }

    })

    accesoriosPerro.addEventListener && tercerrangoPerro.addEventListener("click", () => {

        if(accesoriosPerro.checked && tercerrangoPerro.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else if(accesoriosPerro.checked && tercerrangoPerro.checked == false){  /* SOLO ACC */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }

    })

    accesoriosPerro.addEventListener && cuartorangoPerro.addEventListener("click", () => {

        if(accesoriosPerro.checked && cuartorangoPerro.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false

        } else if(accesoriosPerro.checked && cuartorangoPerro.checked == false){   /* SOLO ACC */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = false
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }
    })

    /* comida */
    comidaPerro.addEventListener && primerrangoPerro.addEventListener("click", () => {

        if(comidaPerro.checked && primerrangoPerro.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(comidaPerro.checked && primerrangoPerro.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }
    })

    comidaPerro.addEventListener && segundorangoPerro.addEventListener("click", () => {

        if(comidaPerro.checked && segundorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true

        } else if(comidaPerro.checked && segundorangoPerro.checked == false){  /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }
    })

    comidaPerro.addEventListener && tercerrangoPerro.addEventListener("click", () => {

        if(comidaPerro.checked && tercerrangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true

        } else if(comidaPerro.checked && tercerrangoPerro.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }
    })

    comidaPerro.addEventListener && cuartorangoPerro.addEventListener("click", () => {

        if(comidaPerro.checked && cuartorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false
            
        } else if(comidaPerro.checked && cuartorangoPerro.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = false
            higienePerro.disabled = true
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }
    })

    /* higiene */
    higienePerro.addEventListener && primerrangoPerro.addEventListener("click", () => {

        if(higienePerro.checked && primerrangoPerro.checked){  /* AMBOS */
 
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true
            
        } else if(higienePerro.checked && primerrangoPerro.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }
    })

    higienePerro.addEventListener && segundorangoPerro.addEventListener("click", () => {

        if(higienePerro.checked && segundorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true
            
        } else if(higienePerro.checked && segundorangoPerro.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }

    })

    higienePerro.addEventListener && tercerrangoPerro.addEventListener("click", () => {

        if(higienePerro.checked && tercerrangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true
            
        } else if(higienePerro.checked && tercerrangoPerro.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }
    })

    higienePerro.addEventListener && cuartorangoPerro.addEventListener("click", () => {

        if(higienePerro.checked && cuartorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false
            
        } else if(higienePerro.checked && cuartorangoPerro.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = false
            juguetesPerro.disabled = true
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }

    })

    /* juguetes */
    juguetesPerro.addEventListener && primerrangoPerro.addEventListener("click", () => {

        if(juguetesPerro.checked && primerrangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true
            
        } else if(juguetesPerro.checked && primerrangoPerro.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
        }

    })

    juguetesPerro.addEventListener && segundorangoPerro.addEventListener("click", () => {

        if(juguetesPerro.checked && segundorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = true
            
        } else if(juguetesPerro.checked && segundorangoPerro.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }

    })

    juguetesPerro.addEventListener && tercerrangoPerro.addEventListener("click", () => {

        if(juguetesPerro.checked && tercerrangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = true
            
        } else if(juguetesPerro.checked && tercerrangoPerro.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
        }

    })

    juguetesPerro.addEventListener && cuartorangoPerro.addEventListener("click", () => {

        if(juguetesPerro.checked && cuartorangoPerro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = true
            segundorangoPerro.disabled = true
            tercerrangoPerro.disabled = true
            cuartorangoPerro.disabled = false
            
        } else if(juguetesPerro.checked && cuartorangoPerro.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Juguetes Perro"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosPerro.disabled = true
            comidaPerro.disabled = true
            higienePerro.disabled = true
            juguetesPerro.disabled = false
            /* precios */
            primerrangoPerro.disabled = false
            segundorangoPerro.disabled = false
            tercerrangoPerro.disabled = false
            cuartorangoPerro.disabled = false
            
            
            
        }

    })

})