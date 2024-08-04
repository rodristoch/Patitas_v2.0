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
    

    /* ------- capturo los divs -------- */
    /* de precios */
    let contenedorprimero = document.querySelector(".lista_flexbox_desktop---de0a10")
    let contenedorsegundo = document.querySelector(".lista_flexbox_desktop---de10a20")
    let contenedortercero = document.querySelector(".lista_flexbox_desktop---de20a30")
    let contenedorcuarto = document.querySelector(".lista_flexbox_desktop---de30aX")
    /* de precios */
    let contenedorProdDescuentos = document.querySelector(".lista_flexbox_desktop---off")
    
    /* ------- capturo los divs para COMBINACIONES -------- */
    /* de precios */
    let contenedorPrimeroOff = document.querySelector(".lista_flexbox_desktop---de0a10ConOff")
    let contenedorSegundoOff = document.querySelector(".lista_flexbox_desktop---de10a20ConOff")
    let contenedorTerceroOff = document.querySelector(".lista_flexbox_desktop---de20a30ConOff")
    let contenedorCuartoOff = document.querySelector(".lista_flexbox_desktop---de30aXConOff")
    
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
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
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

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorprimero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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

        }
    })


    /* PRECIOS */
    primerrango.addEventListener("click", () => {

        if(primerrango.checked){

            contenedorprimero.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
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

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
        }
    })

    tercerrango.addEventListener("click", () => {

        if(tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"
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

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados" 
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
            /* off */
            off.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
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

        } else if(off.checked && primerrango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none"   
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "flex" 
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
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

        } else if(off.checked == false && primerrango.checked){  /* SOLO 1ER RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
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

        } else if(off.checked == false && primerrango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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

        } else if(off.checked && segundorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
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

        } else if(off.checked == false && segundorango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorSegundoOff.style.display = "none" 
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
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
            
        } else if(off.checked == false && tercerrango.checked){  /* SOLO 3er RANGO */

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

        } else if(off.checked == false && tercerrango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedortercero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
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

        } else if(off.checked && cuartorango.checked){  /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
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
            
        } else if(off.checked == false && cuartorango.checked){  /* SOLO 4to RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
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
            /* off */
            off.disabled = false

        } else if(off.checked == false && cuartorango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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

        }
    })



    /* precios con descuento */
    primerrango.addEventListener && off.addEventListener("click", () => {

        if(primerrango.checked && off.checked){   /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
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

        } else if(primerrango.checked && off.checked == false){   /* SOLO 1ER */

            contenedorprimero.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorPrimeroOff.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            cantidadProductos.innerHTML = "2 resultados"
            cantidadProductosMobile.innerHTML = "2 resultados"
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

        }
    })

    segundorango.addEventListener && off.addEventListener("click", () => {

        if(segundorango.checked && off.checked){   /* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
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

        } else if (segundorango.checked && off.checked == false){   /* SOLO 2DO */

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
        }
    })

    tercerrango.addEventListener && off.addEventListener("click", () => {

        if(tercerrango.checked && off.checked){   /* AMBOS */

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

        } else if (tercerrango.checked && off.checked == false) {   /* SOLO 3ER */

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
        }
    })

    cuartorango.addEventListener && off.addEventListener("click", () => {

        if(cuartorango.checked && off.checked){   /* AMBOS */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "flex" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
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

        } else if (cuartorango.checked && off.checked == false){   /* SOLO 4TO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
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
            /* off */
            off.disabled = false
        }
    })
})