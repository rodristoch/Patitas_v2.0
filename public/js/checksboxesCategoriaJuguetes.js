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
    /* de 20% OFF */
    let off = document.querySelector("#off")
    /* de mascotas */
    let gato = document.querySelector("#catit")
    let perro = document.querySelector("#cancat")
    

    /* ------- capturo los divs -------- */
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")
    /* de precios */
    let contenedorProdDescuentos = document.querySelector(".lista_flexbox_desktop---off")
    /* de mascotas */
    let contenedorProdGato = document.querySelector(".lista_flexbox_desktop---gato")
    let contenedorProdPerro = document.querySelector(".lista_flexbox_desktop---perro")
    
    /* ------- capturo los divs para COMBINACIONES -------- */
    /* de precios */
    let contenedorPrimeroOff = document.querySelector(".lista_flexbox_desktop---de0a10ConOff")
    let contenedorSegundoOff = document.querySelector(".lista_flexbox_desktop---de10a20ConOff")
    let contenedorTerceroOff = document.querySelector(".lista_flexbox_desktop---de20a30ConOff")
    let contenedorCuartoOff = document.querySelector(".lista_flexbox_desktop---de30aXConOff")
    /* de precios x mascota */
    /* 1ER */
    let contenedorde0a10Gato = document.querySelector(".lista_flexbox_desktop---de0a10gato")
    let contenedorde0a10Perro = document.querySelector(".lista_flexbox_desktop---de0a10perro")
    /* 2DO */
    let contenedorde10a20Gato = document.querySelector(".lista_flexbox_desktop---de10a20gato")
    let contenedorde10a20Perro = document.querySelector(".lista_flexbox_desktop---de10a20perro")
    /* 3RO */
    let contenedorde20a30Gato = document.querySelector(".lista_flexbox_desktop---de20a30gato")
    let contenedorde20a30Perro = document.querySelector(".lista_flexbox_desktop---de20a30perro")
    /* 4TO */
    let contenedorde30aXGato = document.querySelector(".lista_flexbox_desktop---de30aXgato")
    let contenedorde30aXPerro = document.querySelector(".lista_flexbox_desktop---de30aXperro")
    /* de mascotas */
    let contenedorProdDescuentosGato = document.querySelector(".lista_flexbox_desktop---gatoOff")
    let contenedorProdDescuentosPerro = document.querySelector(".lista_flexbox_desktop---perroOff")
    
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
    PRECIOS...LISTO
    DESCUENTO...LISTO
    
    DOBLES:
    PRECIOS + DESCUENTOS...LISTO
    DESCUENTOS + PRECIOS...LISTO
    

    /* PRODUCTOS CON DESCUENTO (TODOS) */
    off.addEventListener("click", () => {

        if(off.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorPrimeroOff.style.display = "none" 
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorprimero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
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
            cantidadProductos.innerHTML = "13 resultados"
            cantidadProductosMobile.innerHTML = "13 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
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
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
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
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"  /* son 8 resultados */
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
            /* off */
            off.disabled = false
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
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
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
            contenedorProdGato.style.display = "flex"
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
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
            contenedorProdPerro.style.display = "flex"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
        
    })


    /* MASCOTAS + OFF */
    gato.addEventListener && off.addEventListener("click", () => {

        if(gato.checked && off.checked == false){  /* SOLO gato */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none" 
            contenedorProdGato.style.display = "flex" 
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(gato.checked && off.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"   
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosGato.style.display = "flex" 
            contenedorProdGato.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } 

        
    })

    perro.addEventListener && off.addEventListener("click", () => {

        if(perro.checked && off.checked == false){  /* SOLO perro */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none" 
            contenedorProdPerro.style.display = "flex" 
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(perro.checked && off.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"   
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "flex" 
            contenedorProdPerro.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } 

            
    })

    

    /* DESCUENTO + PRECIOS */
    off.addEventListener && primerrango.addEventListener("click", () => {

        if(off.checked && primerrango.checked == false){  /* SOLO OFF */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorPrimeroOff.style.display = "none" 
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked && primerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"   
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "flex" 
            contenedorprimero.style.display = "none" 
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(off.checked == false && primerrango.checked){  /* SOLO 1ER RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "13 resultados"
            cantidadProductosMobile.innerHTML = "13 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked == false && primerrango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    off.addEventListener && segundorango.addEventListener("click", () => {

        if(off.checked && segundorango.checked == false){  /* SOLO OFF */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorSegundoOff.style.display = "none" 
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked && segundorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(off.checked == false && segundorango.checked){  /* SOLO 2do RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "none" 
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked == false && segundorango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorSegundoOff.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    off.addEventListener && tercerrango.addEventListener("click", () => {

        if(off.checked && tercerrango.checked == false){  /* SOLO OFF */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorTerceroOff.style.display = "none" 
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked && tercerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "flex" 
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(off.checked == false && tercerrango.checked){  /* SOLO 3ER RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked == false && tercerrango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedortercero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    off.addEventListener && cuartorango.addEventListener("click", () => {

        if(off.checked && cuartorango.checked == false){  /* SOLO OFF */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorCuartoOff.style.display = "none" 
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked && cuartorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true
            
        } else if(off.checked == false && cuartorango.checked){  /* SOLO 4TO RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked == false && cuartorango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })


    /* DESCUENTO + MASCOTAS */
    off.addEventListener && gato.addEventListener("click", () => {

        if(off.checked && gato.checked == false){  /* SOLO OFF */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorProdDescuentosGato.style.display = "none" 
            contenedorProdGato.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked && gato.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"   
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosGato.style.display = "flex" 
            contenedorProdGato.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(off.checked == false && gato.checked){  /* SOLO gato */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdGato.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none" 
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(off.checked == false && gato.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdGato.style.display = "none"
            contenedorProdDescuentosGato.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    off.addEventListener && perro.addEventListener("click", () => {

        if(off.checked && perro.checked == false){  /* SOLO OFF */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorProdDescuentosPerro.style.display = "none" 
            contenedorProdPerro.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        } else if(off.checked && perro.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"   
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "flex" 
            contenedorProdPerro.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(off.checked == false && perro.checked){  /* SOLO perro */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdPerro.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none" 
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(off.checked == false && perro.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorProdPerro.style.display = "none"
            contenedorProdDescuentosPerro.style.display = "none" 
            cantidadProductos.innerHTML = "19 resultados"
            cantidadProductosMobile.innerHTML = "19 resultados"
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })



    /* precios con descuento */
    primerrango.addEventListener && off.addEventListener("click", () => {

        if(primerrango.checked && off.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "flex" 
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if(primerrango.checked && off.checked == false){  /* SOLO 1ER RANGO */

            contenedorprimero.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorPrimeroOff.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            cantidadProductos.innerHTML = "13 resultados"
            cantidadProductosMobile.innerHTML = "13 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }
    })

    segundorango.addEventListener && off.addEventListener("click", () => {

        if(segundorango.checked && off.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if (segundorango.checked && off.checked == false){  /* SOLO 2DO RANGO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    tercerrango.addEventListener && off.addEventListener("click", () => {

        if(tercerrango.checked && off.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "flex" 
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
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if (tercerrango.checked && off.checked == false) {  /* SOLO 3ER RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false
        }
    })

    cuartorango.addEventListener && off.addEventListener("click", () => {

        if(cuartorango.checked && off.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = true
            perro.disabled = true

        } else if (cuartorango.checked && off.checked == false){  /* SOLO 4TO RANGO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
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
            contenedorde0a10Gato.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorProdGato.style.display = "none"
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
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(primerrango.checked && gato.checked == false){  /* SOLO 1er */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde0a10Gato.style.display = "none"
            contenedorprimero.style.display = "flex"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "13 resultados"
            cantidadProductosMobile.innerHTML = "13 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
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
            contenedorde0a10Perro.style.display = "flex"
            contenedorprimero.style.display = "none"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(primerrango.checked && perro.checked == false){  /* SOLO 1er */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde0a10Perro.style.display = "none"
            contenedorprimero.style.display = "flex"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "13 resultados"
            cantidadProductosMobile.innerHTML = "13 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
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
            contenedorde10a20Gato.style.display = "flex"
            contenedorsegundo.style.display = "none"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(segundorango.checked && gato.checked == false){  /* SOLO 2do */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde10a20Gato.style.display = "none"
            contenedorsegundo.style.display = "flex"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
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
            contenedorde10a20Perro.style.display = "flex"
            contenedorsegundo.style.display = "none"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(segundorango.checked && perro.checked == false){  /* SOLO 2do */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde10a20Perro.style.display = "none"
            contenedorsegundo.style.display = "flex"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
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
            contenedorde20a30Gato.style.display = "flex"
            contenedortercero.style.display = "none"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(tercerrango.checked && gato.checked == false){  /* SOLO 3ER */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde20a30Gato.style.display = "none"
            contenedortercero.style.display = "flex"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
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
            contenedorde20a30Perro.style.display = "flex"
            contenedortercero.style.display = "none"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(tercerrango.checked && perro.checked == false){  /* SOLO 3ER */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde20a30Perro.style.display = "none"
            contenedortercero.style.display = "flex"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
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
            contenedorde30aXGato.style.display = "flex"
            contenedorcuarto.style.display = "none"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = false
            perro.disabled = true

        } else if(cuartorango.checked && gato.checked == false){  /* SOLO 2do */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde30aXGato.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdGato.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
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
            contenedorde30aXPerro.style.display = "flex"
            contenedorcuarto.style.display = "none"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* mascotas */
            gato.disabled = true
            perro.disabled = false

        } else if(cuartorango.checked && perro.checked == false){  /* SOLO 1er */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorde30aXPerro.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdPerro.style.display = "none"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* mascotas */
            gato.disabled = false
            perro.disabled = false

        }

    })
})