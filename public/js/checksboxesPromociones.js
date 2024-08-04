window.addEventListener("load", () => {

    let tituloGato = document.querySelector("#h2tituloGato")
    let cantidadProductos = document.querySelector("#cantidad-prod")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")

    /* ------- capturo los checkbox ------- */
    /* de CATEGORIAS */
    /* para todos */
    let accesorios = document.querySelector("#accesorios")
    let comida = document.querySelector("#comida")
    let higiene = document.querySelector("#higiene")
    let juguetes = document.querySelector("#juguetes")

    /* de PRECIOS */
    /* para todos */
    let primerrango = document.querySelector("#pato")
    let segundorango = document.querySelector("#mono")
    let tercerrango = document.querySelector("#perro")
    let cuartorango = document.querySelector("#gato")

    /* de ANIMALES */
    let gato = document.querySelector("#gatito")
    let perro = document.querySelector("#perrito")
    
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
    /* de mascotas */
    let contenedorProdDescuentosGato = document.querySelector(".lista_flexbox_desktop---offGato")
    let contenedorProdDescuentosPerro = document.querySelector(".lista_flexbox_desktop---offPerro")
    
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

    /* divs para filtros de categorias por mascota */
    /* accesorios */
    let contenedorAccesoriosOffGato = document.querySelector(".lista_flexbox_desktop---accesoriosOffGato")
    let contenedorAccesoriosOffPerro = document.querySelector(".lista_flexbox_desktop---accesoriosOffPerro")
    /* comida */
    let contenedorComidaOffGato = document.querySelector(".lista_flexbox_desktop---comidaOffGato")
    let contenedorComidaOffPerro = document.querySelector(".lista_flexbox_desktop---comidaOffPerro")
    /* higiene */
    let contenedorHigieneOffGato = document.querySelector(".lista_flexbox_desktop---higieneOffGato")
    let contenedorHigieneOffPerro = document.querySelector(".lista_flexbox_desktop---higieneOffPerro")
    /* juguetes */
    let contenedorJuguetesOffGato = document.querySelector(".lista_flexbox_desktop---juguetesOffGato")
    let contenedorJuguetesOffPerro = document.querySelector(".lista_flexbox_desktop---juguetesOffPerro")

    /* divs para filtros de precios por mascota */
    /* 1ER */
    let contenedorde0a10OffGato = document.querySelector(".lista_flexbox_desktop---de0a10OffGato")
    let contenedorde0a10OffPerro = document.querySelector(".lista_flexbox_desktop---de0a10OffPerro")
    /* 2DO */
    let contenedorde10a20OffGato = document.querySelector(".lista_flexbox_desktop---de10a20OffGato")
    let contenedorde10a20OffPerro = document.querySelector(".lista_flexbox_desktop---de10a20OffPerro")
    /* 3RO */
    let contenedorde20a30OffGato = document.querySelector(".lista_flexbox_desktop---de20a30OffGato")
    let contenedorde20a30OffPerro = document.querySelector(".lista_flexbox_desktop---de20a30OffPerro")
    /* 4TO */
    let contenedorde30aXOffGato = document.querySelector(".lista_flexbox_desktop---de30aXOffGato")
    let contenedorde30aXOffPerro = document.querySelector(".lista_flexbox_desktop---de30aXOffPerro")

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
    MASCOTAS...LISTO
    
    DOBLES:
    CATEGORIAS + PRECIOS...LISTO
    PRECIOS + CATEGORIAS...LISTO

    CATEGORIAS + MASCOTAS...LISTO

    PRECIOS + MASCOTAS...FALTA
    


    /* CATEGORIAS */
    accesorios.addEventListener("click", () => {

        if(accesorios.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = true
            accesorios.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
        
    })

    comida.addEventListener("click", () => {

        if(comida.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida.style.display = "flex"
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorComida.style.display = "none"
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    higiene.addEventListener("click", () => {

        if(higiene.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene.style.display = "flex"
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = true
            accesorios.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorHigiene.style.display = "none"
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    juguetes.addEventListener("click", () => {

        if(juguetes.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "flex"
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = true
            accesorios.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorJuguete.style.display = "none"
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })


    /* PRECIOS */
    primerrango.addEventListener("click", () => {

        if(primerrango.checked){

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
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
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
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    tercerrango.addEventListener("click", () => {

        if(tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    cuartorango.addEventListener("click", () => {

        if(cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    /* MASCOTAS */
    gato.addEventListener("click", () => {

        if(gato.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentosGato.style.display = "flex"
            tituloGato.innerText = "Promociones Gato"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = true
            accesorios.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
        
    })

    perro.addEventListener("click", () => {

        if(perro.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "flex"
            tituloGato.innerText = "Promociones Perro"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = true
            accesorios.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
        
    })


    /* COMBINACIONES */
    /* PRECIOS + CATEGORIAS */
    /* primer rango */
    primerrango.addEventListener && accesorios.addEventListener("click", () => {

        if(primerrango.checked && accesorios.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(primerrango.checked == false && accesorios.checked){ /* SOLO ACCESORIO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloGato.innerText = "Accesorios"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked == false && accesorios.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    primerrango.addEventListener && comida.addEventListener("click", () => {

        if(primerrango.checked && comida.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(primerrango.checked == false && comida.checked){ /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Comida"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked == false && comida.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    primerrango.addEventListener && higiene.addEventListener("click", () => {

        if(primerrango.checked && higiene.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Higiene"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(primerrangochecked == false && higiene.checked){ /* SOLO higiene */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Higiene"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked == false && higiene.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    primerrango.addEventListener && juguetes.addEventListener("click", () => {

        if(primerrango.checked && juguetes.checked == false){ /* SOLO 1er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(primerrango.checked == false && juguetes.checked){ /* SOLO Juguetes */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Juguetes"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(primerrango.checked == false && juguetes.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "16 resultados"
            cantidadProductosMobile.innerHTML = "16 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Relevancia"
            divOpciones.style.opacity = "1"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    /* segundo rango */
    segundorango.addEventListener && accesorios.addEventListener("click", () => {

        if(segundorango.checked && accesorios.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones "
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(segundorango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            tituloGato.innerText = "Accesorios "
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    segundorango.addEventListener && comida.addEventListener("click", () => {

        if(segundorango.checked && comida.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(segundorango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Comida"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    segundorango.addEventListener && higiene.addEventListener("click", () => {

        if(segundorango.checked && higiene.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(segundorango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Higiene"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } 
    })

    segundorango.addEventListener && juguetes.addEventListener("click", () => {

        if(segundorango.checked && juguetes.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(segundorango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Juguetes"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    /* tercer rango */
    tercerrango.addEventListener && accesorios.addEventListener("click", () => {

        if(tercerrango.checked && accesorios.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(tercerrango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloGato.innerText = "Accesorios"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    tercerrango.addEventListener && comida.addEventListener("click", () => {

        if(tercerrango.checked && comida.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(tercerrango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Comida"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    tercerrango.addEventListener && higiene.addEventListener("click", () => {

        if(tercerrango.checked && higiene.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(tercerrango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Higiene"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } 
    })

    tercerrango.addEventListener && juguetes.addEventListener("click", () => {

        if(tercerrango.checked && juguetes.checked == false){ /* SOLO 3er rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(tercerrango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Juguetes"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    /* cuarto rango */
    cuartorango.addEventListener && accesorios.addEventListener("click", () => {

        if(cuartorango.checked && accesorios.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(cuartorango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Accesorios"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    cuartorango.addEventListener && comida.addEventListener("click", () => {

        if(cuartorango.checked && comida.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(cuartorango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloGato.innerText = "Comida"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })

    cuartorango.addEventListener && higiene.addEventListener("click", () => {

        if(cuartorango.checked && higiene.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(cuartorango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloGato.innerText = "Higiene"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } 
    })

    cuartorango.addEventListener && juguetes.addEventListener("click", () => {

        if(cuartorango.checked && juguetes.checked == false){ /* SOLO 4to rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            tituloGato.innerText = "Promociones"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            comida.disabled = false
            accesorios.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(cuartorango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloGato.innerText = "Juguetes"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        }
    })


    /* CATEGORIAS + PRECIOS */
    /* accesorios */
    accesorios.addEventListener && primerrango.addEventListener("click", () => {

        if(accesorios.checked && primerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(accesorios.checked && primerrango.checked == false){  /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    accesorios.addEventListener && segundorango.addEventListener("click", () => {

        if(accesorios.checked && segundorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(accesorios.checked && segundorango.checked == false){   /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }

    })

    accesorios.addEventListener && tercerrango.addEventListener("click", () => {

        if(accesorios.checked && tercerrango.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(accesorios.checked && tercerrango.checked == false){  /* SOLO ACC */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }

    })

    accesorios.addEventListener && cuartorango.addEventListener("click", () => {

        if(accesorios.checked && cuartorango.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(accesorios.checked && cuartorango.checked == false){   /* SOLO ACC */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }
    })

    /* comida */
    comida.addEventListener && primerrango.addEventListener("click", () => {

        if(comida.checked && primerrango.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(comida.checked && primerrango.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }
    })

    comida.addEventListener && segundorango.addEventListener("click", () => {

        if(comida.checked && segundorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(comida.checked && segundorango.checked == false){  /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }
    })

    comida.addEventListener && tercerrango.addEventListener("click", () => {

        if(comida.checked && tercerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(comida.checked && tercerrango.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        
        }

    })

    comida.addEventListener && cuartorango.addEventListener("click", () => {

        if(comida.checked && cuartorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(comida.checked && cuartorango.checked == false){   /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }
    })

    /* higiene */
    higiene.addEventListener && primerrango.addEventListener("click", () => {

        if(higiene.checked && primerrango.checked){  /* AMBOS */
 
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(higiene.checked && primerrango.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }
    })

    higiene.addEventListener && segundorango.addEventListener("click", () => {

        if(higiene.checked && segundorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(higiene.checked && segundorango.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }

    })

    higiene.addEventListener && tercerrango.addEventListener("click", () => {

        if(higiene.checked && tercerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(higiene.checked && tercerrango.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    higiene.addEventListener && cuartorango.addEventListener("click", () => {

        if(higiene.checked && cuartorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(higiene.checked && cuartorango.checked == false){  /* SOLO HIGIENE */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
             
        }

    })

    /* juguetes */
    juguetes.addEventListener && primerrango.addEventListener("click", () => {

        if(juguetes.checked && primerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(juguetes.checked && primerrango.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }

    })

    juguetes.addEventListener && segundorango.addEventListener("click", () => {

        if(juguetes.checked && segundorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(juguetes.checked && segundorango.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }

    })

    juguetes.addEventListener && tercerrango.addEventListener("click", () => {

        if(juguetes.checked && tercerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(juguetes.checked && tercerrango.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }

    })

    juguetes.addEventListener && cuartorango.addEventListener("click", () => {

        if(juguetes.checked && cuartorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(juguetes.checked && cuartorango.checked == false){  /* SOLO JUG */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
            
        }

    })


    /* CATEGORIAS + MASCOTAS */
    /* accesorios */
    accesorios.addEventListener && gato.addEventListener("click", () => {

        if(accesorios.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesoriosOffGato.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(accesorios.checked && gato.checked == false){  /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesoriosOffGato.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    accesorios.addEventListener && perro.addEventListener("click", () => {

        if(accesorios.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesoriosOffPerro.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(accesorios.checked && perro.checked == false){  /* SOLO ACCESORIOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesoriosOffPerro.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Accesorios"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* comida */
    comida.addEventListener && gato.addEventListener("click", () => {

        if(comida.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComidaOffGato.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(comida.checked && gato.checked == false){  /* SOLO Comida */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComidaOffGato.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    comida.addEventListener && perro.addEventListener("click", () => {

        if(comida.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComidaOffPerro.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(comida.checked && perro.checked == false){  /* SOLO com */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComidaOffPerro.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Comida"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = false
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* higiene */
    higiene.addEventListener && gato.addEventListener("click", () => {

        if(higiene.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigieneOffGato.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(higiene.checked && gato.checked == false){  /* SOLO hig */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigieneOffGato.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    higiene.addEventListener && perro.addEventListener("click", () => {

        if(higiene.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigieneOffPerro.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(higiene.checked && perro.checked == false){  /* SOLO hig */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigieneOffPerro.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Higiene"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = false
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* juguetes */
    juguetes.addEventListener && gato.addEventListener("click", () => {

        if(juguetes.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguetesOffGato.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(juguetes.checked && gato.checked == false){  /* SOLO jug */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguetesOffGato.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    juguetes.addEventListener && perro.addEventListener("click", () => {

        if(juguetes.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguetesOffPerro.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(juguetes.checked && perro.checked == false){  /* SOLO jug */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguetesOffPerro.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Juguetes"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* PRECIOS + MASCOTAS */
    /* 1ER */
    primerrango.addEventListener && gato.addEventListener("click", () => {

        if(primerrango.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde0a10OffGato.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(primerrango.checked && gato.checked == false){  /* SOLO 1er */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde0a10OffGato.style.display = "none"
            contenedorprimero.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    primerrango.addEventListener && perro.addEventListener("click", () => {

        if(primerrango.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde0a10OffPerro.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(primerrango.checked && perro.checked == false){  /* SOLO 1er */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde0a10OffPerro.style.display = "none"
            contenedorprimero.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* 2DO */
    segundorango.addEventListener && gato.addEventListener("click", () => {

        if(segundorango.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde10a20OffGato.style.display = "flex"
            contenedorsegundo.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(segundorango.checked && gato.checked == false){  /* SOLO 2do */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde10a20OffGato.style.display = "none"
            contenedorsegundo.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    segundorango.addEventListener && perro.addEventListener("click", () => {

        if(segundorango.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde10a20OffPerro.style.display = "flex"
            contenedorsegundo.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(segundorango.checked && perro.checked == false){  /* SOLO 2do */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde10a20OffPerro.style.display = "none"
            contenedorsegundo.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* 3RO */
    tercerrango.addEventListener && gato.addEventListener("click", () => {

        if(tercerrango.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde20a30OffGato.style.display = "flex"
            contenedortercero.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(tercerrango.checked && gato.checked == false){  /* SOLO 3ER */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde20a30OffGato.style.display = "none"
            contenedortercero.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    tercerrango.addEventListener && perro.addEventListener("click", () => {

        if(tercerrango.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde20a30OffPerro.style.display = "flex"
            contenedortercero.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(tercerrango.checked && perro.checked == false){  /* SOLO 3ER */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde20a30OffPerro.style.display = "none"
            contenedortercero.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    /* 4TO */
    cuartorango.addEventListener && gato.addEventListener("click", () => {

        if(cuartorango.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde30aXOffGato.style.display = "flex"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(cuartorango.checked && gato.checked == false){  /* SOLO 4to */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde30aXOffGato.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })

    cuartorango.addEventListener && perro.addEventListener("click", () => {

        if(cuartorango.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde30aXOffPerro.style.display = "flex"
            contenedorcuarto.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(cuartorango.checked && perro.checked == false){  /* SOLO 4to */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde30aXOffPerro.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none"  
            tituloGato.innerText = "Promociones"
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })


    /* MASCOTAS + CATEGORIAS */
    /* accesorios */
    


    

    

})