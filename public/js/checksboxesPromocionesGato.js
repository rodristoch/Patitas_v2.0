window.addEventListener("load", () => {

    let tituloGato = document.querySelector("#h2tituloGato")
    let cantidadProductos = document.querySelector("#cantidad-prod")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")

    /* ------- capturo los checkbox ------- */
    /* de CATEGORIAS */
    /* para gato */
    let accesoriosGato = document.querySelector("#accesoriosGato")
    let comidaGato = document.querySelector("#comidaGato")
    let higieneGato = document.querySelector("#higieneGato")
    let juguetesGato = document.querySelector("#juguetesGato")

    /* de PRECIOS */
    /* para gato */
    let primerrangoGato = document.querySelector("#patoGato")
    let segundorangoGato = document.querySelector("#monoGato")
    let tercerrangoGato = document.querySelector("#perroGato")
    let cuartorangoGato = document.querySelector("#gatoGato")
    
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


    /* ---------------------------- GATO --------------------------------- */
    /* CATEGORIAS */
    accesoriosGato.addEventListener("click", () => {

        if(accesoriosGato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = true
            accesoriosGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            tituloGato.innerText = "Promociones Gato"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
        
    })

    comidaGato.addEventListener("click", () => {

        if(comidaGato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida.style.display = "flex"
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorComida.style.display = "none"
            tituloGato.innerText = "Promociones Gato"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })

    higieneGato.addEventListener("click", () => {

        if(higieneGato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene.style.display = "flex"
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = true
            accesoriosGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorHigiene.style.display = "none"
            tituloGato.innerText = "Promociones Gato"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })

    juguetesGato.addEventListener("click", () => {

        if(juguetesGato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "flex"
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = true
            accesoriosGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorJuguete.style.display = "none"
            tituloGato.innerText = "Promociones Gato"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })


    /* PRECIOS */
    primerrangoGato.addEventListener("click", () => {

        if(primerrangoGato.checked){

            contenedorprimero.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })

    segundorangoGato.addEventListener("click", () => {

        if(segundorangoGato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })

    tercerrangoGato.addEventListener("click", () => {

        if(tercerrangoGato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })

    cuartorangoGato.addEventListener("click", () => {

        if(cuartorangoGato.checked){

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
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })


    /* COMBINACIONES */
    /* PRECIOS + CATEGORIAS */
    /* primer rango */
    primerrangoGato.addEventListener && accesoriosGato.addEventListener("click", () => {

        if(primerrangoGato.checked && accesoriosGato.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked && accesoriosGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked == false && accesoriosGato.checked){ /* SOLO ACCESORIO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Accesorios Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else if(primerrangoGato.checked == false && accesoriosGato.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        }
    })

    primerrangoGato.addEventListener && comidaGato.addEventListener("click", () => {

        if(primerrangoGato.checked && comidaGato.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked && comidaGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked == false && comidaGato.checked){ /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Comida Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else if(primerrangoGato.checked == false && comidaGato.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        }
    })

    primerrangoGato.addEventListener && higieneGato.addEventListener("click", () => {

        if(primerrangoGato.checked && higieneGato.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked && higieneGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Higiene Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGatochecked == false && higieneGato.checked){ /* SOLO higiene */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Higiene Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else if(primerrangoGato.checked == false && higieneGato.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        }
    })

    primerrangoGato.addEventListener && juguetesGato.addEventListener("click", () => {

        if(primerrangoGato.checked && juguetesGato.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked && juguetesGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(primerrangoGato.checked == false && juguetesGato.checked){ /* SOLO Juguetes */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Juguetes Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        } else if(primerrangoGato.checked == false && juguetesGato.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        }
    })

    /* segundo rango */
    segundorangoGato.addEventListener && accesoriosGato.addEventListener("click", () => {

        if(segundorangoGato.checked && accesoriosGato.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(segundorangoGato.checked && accesoriosGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        }
    })

    segundorangoGato.addEventListener && comidaGato.addEventListener("click", () => {

        if(segundorangoGato.checked && comidaGato.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(segundorangoGato.checked && comidaGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        }
    })

    segundorangoGato.addEventListener && higieneGato.addEventListener("click", () => {

        if(segundorangoGato.checked && higieneGato.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(segundorangoGato.checked && higieneGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } 
    })

    segundorangoGato.addEventListener && juguetesGato.addEventListener("click", () => {

        if(segundorangoGato.checked && juguetesGato.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(segundorangoGato.checked && juguetesGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Juguetes Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        }
    })

    /* tercer rango */
    tercerrangoGato.addEventListener && accesoriosGato.addEventListener("click", () => {

        if(tercerrangoGato.checked && accesoriosGato.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } else if(tercerrangoGato.checked && accesoriosGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Accesorios Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        }
    })

    tercerrangoGato.addEventListener && comidaGato.addEventListener("click", () => {

        if(tercerrangoGato.checked && comidaGato.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } else if(tercerrangoGato.checked && comidaGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Comida Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        }
    })

    tercerrangoGato.addEventListener && higieneGato.addEventListener("click", () => {

        if(tercerrangoGato.checked && higieneGato.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } else if(tercerrangoGato.checked && higieneGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Higiene Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } 
    })

    tercerrangoGato.addEventListener && juguetesGato.addEventListener("click", () => {

        if(tercerrangoGato.checked && juguetesGato.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } else if(tercerrangoGato.checked && juguetesGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Juguetes Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        }
    })

    /* cuarto rango */
    cuartorangoGato.addEventListener && accesoriosGato.addEventListener("click", () => {

        if(cuartorangoGato.checked && accesoriosGato.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } else if(cuartorangoGato.checked && accesoriosGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        }
    })

    cuartorangoGato.addEventListener && comidaGato.addEventListener("click", () => {

        if(cuartorangoGato.checked && comidaGato.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } else if(cuartorangoGato.checked && comidaGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Comida Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        }
    })

    cuartorangoGato.addEventListener && higieneGato.addEventListener("click", () => {

        if(cuartorangoGato.checked && higieneGato.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } else if(cuartorangoGato.checked && higieneGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Higiene Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } 
    })

    cuartorangoGato.addEventListener && juguetesGato.addEventListener("click", () => {

        if(cuartorangoGato.checked && juguetesGato.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comidaGato.disabled = false
            accesoriosGato.disabled = false
            higieneGato.disabled = false
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } else if(cuartorangoGato.checked && juguetesGato.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes Gato"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        }
    })


    /* CATEGORIAS + PRECIOS */
    /* accesorios */
    accesoriosGato.addEventListener && primerrangoGato.addEventListener("click", () => {

        if(accesoriosGato.checked && primerrangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(accesoriosGato.checked && primerrangoGato.checked == false){  /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false

        }

    })

    accesoriosGato.addEventListener && segundorangoGato.addEventListener("click", () => {

        if(accesoriosGato.checked && segundorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(accesoriosGato.checked && segundorangoGato.checked == false){   /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
        }

    })

    accesoriosGato.addEventListener && tercerrangoGato.addEventListener("click", () => {

        if(accesoriosGato.checked && tercerrangoGato.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true

        } else if(accesoriosGato.checked && tercerrangoGato.checked == false){  /* SOLO ACC */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }

    })

    accesoriosGato.addEventListener && cuartorangoGato.addEventListener("click", () => {

        if(accesoriosGato.checked && cuartorangoGato.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false

        } else if(accesoriosGato.checked && cuartorangoGato.checked == false){   /* SOLO ACC */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Accesorios Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = false
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
        }
    })

    /* comida */
    comidaGato.addEventListener && primerrangoGato.addEventListener("click", () => {

        if(comidaGato.checked && primerrangoGato.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(comidaGato.checked && primerrangoGato.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
        }
    })

    comidaGato.addEventListener && segundorangoGato.addEventListener("click", () => {

        if(comidaGato.checked && segundorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true

        } else if(comidaGato.checked && segundorangoGato.checked == false){  /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
        }
    })

    comidaGato.addEventListener && tercerrangoGato.addEventListener("click", () => {

        if(comidaGato.checked && tercerrangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true
            
            

        } else if(comidaGato.checked && tercerrangoGato.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }

    })

    comidaGato.addEventListener && cuartorangoGato.addEventListener("click", () => {

        if(comidaGato.checked && cuartorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false
            
            

        } else if(comidaGato.checked && cuartorangoGato.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Comida Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = false
            higieneGato.disabled = true
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
        }
    })

    /* higiene */
    higieneGato.addEventListener && primerrangoGato.addEventListener("click", () => {

        if(higieneGato.checked && primerrangoGato.checked){  /* AMBOS */
 
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true
            
            

        } else if(higieneGato.checked && primerrangoGato.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }
    })

    higieneGato.addEventListener && segundorangoGato.addEventListener("click", () => {

        if(higieneGato.checked && segundorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true
            
            

        } else if(higieneGato.checked && segundorangoGato.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }

    })

    higieneGato.addEventListener && tercerrangoGato.addEventListener("click", () => {

        if(higieneGato.checked && tercerrangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true
            
            

        } else if(higieneGato.checked && tercerrangoGato.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
        }
    })

    higieneGato.addEventListener && cuartorangoGato.addEventListener("click", () => {

        if(higieneGato.checked && cuartorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false
            
            

        } else if(higieneGato.checked && cuartorangoGato.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Higiene Gato"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = false
            juguetesGato.disabled = true
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }

    })

    /* juguetes */
    juguetesGato.addEventListener && primerrangoGato.addEventListener("click", () => {

        if(juguetesGato.checked && primerrangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true
            
            

        } else if(juguetesGato.checked && primerrangoGato.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
        }

    })

    juguetesGato.addEventListener && segundorangoGato.addEventListener("click", () => {

        if(juguetesGato.checked && segundorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = true
            
            

        } else if(juguetesGato.checked && segundorangoGato.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }

    })

    juguetesGato.addEventListener && tercerrangoGato.addEventListener("click", () => {

        if(juguetesGato.checked && tercerrangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = true
            
            

        } else if(juguetesGato.checked && tercerrangoGato.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }

    })

    juguetesGato.addEventListener && cuartorangoGato.addEventListener("click", () => {

        if(juguetesGato.checked && cuartorangoGato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = true
            segundorangoGato.disabled = true
            tercerrangoGato.disabled = true
            cuartorangoGato.disabled = false
            
            

        } else if(juguetesGato.checked && cuartorangoGato.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Juguetes Gato"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesoriosGato.disabled = true
            comidaGato.disabled = true
            higieneGato.disabled = true
            juguetesGato.disabled = false
            /* precios */
            primerrangoGato.disabled = false
            segundorangoGato.disabled = false
            tercerrangoGato.disabled = false
            cuartorangoGato.disabled = false
            
            
            
        }

    })

})

