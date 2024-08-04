window.addEventListener("load", () => {

    let tituloPerro = document.querySelector("#h2tituloPerro")
    let cantidadProductos = document.querySelector("#cantidad-prod")
    let cantidadProductosMobile = document.querySelector("#cantidad-prod-mobile")

    /* ------- capturo los checkbox ------- */
    /* de categorias */
    let accesorios = document.querySelector("#accesorios")
    let comida = document.querySelector("#comida")
    let higiene = document.querySelector("#higiene")
    let juguetes = document.querySelector("#juguetes")
    /* de precios */
    let primerrango = document.querySelector("#pato")
    let segundorango = document.querySelector("#mono")
    let tercerrango = document.querySelector("#perro")
    let cuartorango = document.querySelector("#gato")
    /* de 20% OFF */
    let off = document.querySelector("#off")
    /* de marcas */
    let eukanuba = document.querySelector("#eukanuba")
    let royal = document.querySelector("#royal")
    let proplan = document.querySelector("#proplan")
    let otrasmarcas = document.querySelector("#otrasmarcas")
    
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
    /* de off */
    let contenedorProdDescuentos = document.querySelector(".lista_flexbox_desktop---off")
    /* de marcas */
    let contenedorcheckboxEukanuba = document.querySelector(".lista_flexbox_desktop---checkboxEukanuba")
    let contenedorcheckboxRoyal = document.querySelector(".lista_flexbox_desktop---checkboxRoyal")
    let contenedorcheckboxProPlan = document.querySelector(".lista_flexbox_desktop---checkboxProPlanPerro")
    let contenedorcheckboxOtrasMarcas = document.querySelector(".lista_flexbox_desktop---checkboxOtrasMarcasPerro")
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

    /* de mayor precio */
    let contenedorMayorPrecio = document.querySelector(".lista_flexbox_desktop---mayorPrecio")
    /* de menor precio */
    let contenedorMenorPrecio = document.querySelector(".lista_flexbox_desktop---menorPrecio")
    
    /* otros */
    let btnver = document.querySelector(".div-btnver")

    let botonOrdenar = document.querySelector("#btn-ordenarPor")
    let ordenar = document.querySelector("#ordenarPor")
    let flechitaAbajo = document.querySelector("#flechita-abajo")
    let flechitaRecta = document.querySelector("#flechita-recta")
    let divOpciones = document.querySelector(".contendor_opciones-Desktop")


    let opciones = document.querySelector("#divOpciones")

    /* let contenedorInvisible = document.querySelector(".lista_flexbox_desktop---invisible") */
    let contenedorVisible = document.querySelector(".lista_flexbox_desktop")

    /* ------- capturo los divs para FILTROS de ORDENAR POR -------- */
    /* de categorias */
    /* let contenedorAccesorioMePre = document.querySelector(".lista_flexbox_desktop---accesorioMePre")
    let contenedorComidaMePre = document.querySelector(".lista_flexbox_desktop---comidaMePre")
    let contenedorHigieneMePre = document.querySelector(".lista_flexbox_desktop---higieneMePre")
    let contenedorJugueteMePre = document.querySelector(".lista_flexbox_desktop---jugueteMePre")

    let contenedorAccesorioMaPre = document.querySelector(".lista_flexbox_desktop---accesorioMaPre")
    let contenedorComidaMaPre = document.querySelector(".lista_flexbox_desktop---comidaMaPre")
    let contenedorHigieneMaPre = document.querySelector(".lista_flexbox_desktop---higieneMaPre")
    let contenedorJugueteMaPre = document.querySelector(".lista_flexbox_desktop---jugueteMaPre") */
    /* de precios */
    /* let contenedorprimeroMePre = document.querySelector(".lista_flexbox_desktop---de0a10MePre")
    let contenedorsegundoMePre = document.querySelector(".lista_flexbox_desktop---de10a20MePre")
    let contenedorterceroMePre = document.querySelector(".lista_flexbox_desktop---de20a30MePre")
    let contenedorcuartoMePre = document.querySelector(".lista_flexbox_desktop---de30aXMePre")

    let contenedorprimeroMaPre = document.querySelector(".lista_flexbox_desktop---de0a10MaPre")
    let contenedorsegundoMaPre = document.querySelector(".lista_flexbox_desktop---de10a20MaPre")
    let contenedorterceroMaPre = document.querySelector(".lista_flexbox_desktop---de20a30MaPre")
    let contenedorcuartoMaPre = document.querySelector(".lista_flexbox_desktop---de30aXMaPre") */
    /* de off */
    /* let contenedorProdDescuentosMePre = document.querySelector(".lista_flexbox_desktop---offMePre")

    let contenedorProdDescuentosMaPre = document.querySelector(".lista_flexbox_desktop---offMaPre") */
    /* de marcas */
    /* let contenedorcheckboxEukanubaMePre = document.querySelector(".lista_flexbox_desktop---checkboxEukanubaMePre")
    let contenedorcheckboxRoyalMePre = document.querySelector(".lista_flexbox_desktop---checkboxRoyalMePre")
    let contenedorcheckboxProPlanMePre = document.querySelector(".lista_flexbox_desktop---checkboxProPlanPerroMePre")
    let contenedorcheckboxOtrasMarcasMePre = document.querySelector(".lista_flexbox_desktop---checkboxOtrasMarcasPerroMePre")

    let contenedorcheckboxEukanubaMaPre = document.querySelector(".lista_flexbox_desktop---checkboxEukanubaMaPre")
    let contenedorcheckboxRoyalMaPre = document.querySelector(".lista_flexbox_desktop---checkboxRoyalMaPre")
    let contenedorcheckboxProPlanMaPre = document.querySelector(".lista_flexbox_desktop---checkboxProPlanPerroMaPre")
    let contenedorcheckboxOtrasMarcasMaPre = document.querySelector(".lista_flexbox_desktop---checkboxOtrasMarcasPerroMaPre") */


    /* SIMPLES:
    CATEGORIAS...LISTO
    PRECIOS...LISTO
    DESCUENTO...LISTO
    MARCAS...LISTO
    
    DOBLES:
    CATEGORIAS + PRECIOS...LISTO
    CATEGORIAS + DESCUENTOS...LISTO
    CATEGORIAS + MARCAS...NO

    PRECIOS + DESCUENTOS...LISTO
    PRECIOS + CATEGORIAS...FALTA
    PRECIOS + MARCAS...FALTA
      
    DESCUENTOS + CATEGORIAS...LISTO
    DESCUENTOS + PRECIOS...LISTO
    DESCUENTOS + MARCAS...FALTA
    
    MARCAS + CATEGORIAS...NO
    MARCAS + PRECIOS...FALTA
    MARCAS + DESCUENTOS...FALTA */

    /* CATEGORIAS */
    accesorios.addEventListener("click", () => {

        if(accesorios.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            tituloPerro.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            tituloPerro.innerText = "Productos Perro"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
        
    })

    comida.addEventListener("click", () => {

        if(comida.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida.style.display = "flex"
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorComida.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })

    higiene.addEventListener("click", () => {

        if(higiene.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene.style.display = "flex"
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorHigiene.style.display = "none"
            tituloPerro.innerText = "Productos Perro"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })

    juguetes.addEventListener("click", () => {

        if(juguetes.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "flex"
            tituloPerro.innerText = "Juguetes Perro"
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
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorJuguete.style.display = "none"
            tituloPerro.innerText = "Productos Perro"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })


    /* PRODUCTOS CON DESCUENTO (TODOS) */
    off.addEventListener("click", () => {

        if(off.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorPrimeroOff.style.display = "none" 
            contenedorprimero.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorprimero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })


    /* DESCUENTO CON CATEGORIAS */
    off.addEventListener && comida.addEventListener("click", () => {

        if(off.checked && comida.checked == false){  /* solo off */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorComidaOff.style.display = "none" 
            contenedorComida.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked && comida.checked){  /* ambos */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorComidaOff.style.display = "flex" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
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
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if(off.checked == false && comida.checked){  /* solo comida */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorComidaOff.style.display = "none" 
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && comida.checked == false){  /* ninguno */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorComidaOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })

    off.addEventListener && higiene.addEventListener("click", () => {

        if(off.checked && higiene.checked == false){  /* solo off */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorHigieneOff.style.display = "none" 
            contenedorHigiene.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked && higiene.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorHigieneOff.style.display = "flex" 
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
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if(off.checked == false && higiene.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorHigieneOff.style.display = "none" 
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && higiene.checked == false){

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorHigiene.style.display = "none" 
            contenedorHigieneOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })

    off.addEventListener && juguetes.addEventListener("click", () => {

        if(off.checked && juguetes.checked == false){  /* solo off */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorJuguetesOff.style.display = "none" 
            contenedorJuguete.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked && juguetes.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorJuguetesOff.style.display = "flex" 
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
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if(off.checked == false && juguetes.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorJuguetesOff.style.display = "none" 
            cantidadProductos.innerHTML = "6 resultados"
            cantidadProductosMobile.innerHTML = "6 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && juguetes.checked == false){

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorJuguete.style.display = "none" 
            contenedorJuguetesOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })


    /* PRECIOS */
    primerrango.addEventListener("click", () => {

        if(primerrango.checked){

            contenedorprimero.style.display = "flex"
            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            cantidadProductos.innerHTML = "15 resultados"  /* son 6 resultados */
            cantidadProductosMobile.innerHTML = "15 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorprimero.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"  /* son 40 resultados */
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
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
            cantidadProductos.innerHTML = "10 resultados"  /* son 15 resultados */
            cantidadProductosMobile.innerHTML = "10 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            primerrango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorsegundo.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"  /* son 40 resultados */
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            primerrango.disabled = false
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
            cantidadProductos.innerHTML = "8 resultados"  /* son 11 resultados */
            cantidadProductosMobile.innerHTML = "8 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            primerrango.disabled = true
            segundorango.disabled = true
            cuartorango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedortercero.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"  /* son 40 resultados */
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            primerrango.disabled = false
            segundorango.disabled = false
            cuartorango.disabled = false
        }
    })

    cuartorango.addEventListener("click", () => {

        if(cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"
            cantidadProductos.innerHTML = "7 resultados"  /* son 6 resultados */
            cantidadProductosMobile.innerHTML = "7 resultados"
            botonOrdenar.style.display = "none"
            ordenar.style.display = "none"
            flechitaAbajo.style.display = "none"
            divOpciones.style.opacity = "0"
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcuarto.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"  /* son 40 resultados */
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
        }
    })



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
            cantidadProductos.innerHTML = "15 resultados"
            cantidadProductosMobile.innerHTML = "15 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
            tituloPerro.innerText = "Accesorios Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && accesorios.checked){ /* SOLO ACCESORIO */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
            tituloPerro.innerText = "Accesorios Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && accesorios.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloPerro.innerText = "Productos Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

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
            cantidadProductos.innerHTML = "15 resultados"
            cantidadProductosMobile.innerHTML = "15 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && comida.checked){ /* SOLO COMIDA */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && comida.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloPerro.innerText = "Productos Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

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
            cantidadProductos.innerHTML = "15 resultados"
            cantidadProductosMobile.innerHTML = "15 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
            tituloPerro.innerText = "Higiene Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && higiene.checked){ /* SOLO higiene */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
            tituloPerro.innerText = "Higiene Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && higiene.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloPerro.innerText = "Productos Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

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
            cantidadProductos.innerHTML = "15 resultados"
            cantidadProductosMobile.innerHTML = "15 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none" 
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Juguetes Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && juguetes.checked){ /* SOLO Juguetes */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Juguetes Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked == false && juguetes.checked == false){ /* NINGUNO DE LOS 2 */

            contenedorVisible.style.display = "flex"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            tituloPerro.innerText = "Productos Perro"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

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
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(segundorango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloPerro.innerText = "Accesorios Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(segundorango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(segundorango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloPerro.innerText = "Higiene Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(segundorango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Juguetes Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }
    })

    /* tercer rango */
    tercerrango.addEventListener && accesorios.addEventListener("click", () => {

        if(tercerrango.checked && accesorios.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "8 resultados"
            cantidadProductosMobile.innerHTML = "8 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(tercerrango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
            tituloPerro.innerText = "Accesorios Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }
    })

    tercerrango.addEventListener && comida.addEventListener("click", () => {

        if(tercerrango.checked && comida.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "8 resultados"
            cantidadProductosMobile.innerHTML = "8 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(tercerrango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }
    })

    tercerrango.addEventListener && higiene.addEventListener("click", () => {

        if(tercerrango.checked && higiene.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "8 resultados"
            cantidadProductosMobile.innerHTML = "8 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(tercerrango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Higiene Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } 
    })

    tercerrango.addEventListener && juguetes.addEventListener("click", () => {

        if(tercerrango.checked && juguetes.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "flex" 
            cantidadProductos.innerHTML = "8 resultados"
            cantidadProductosMobile.innerHTML = "8 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(tercerrango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Juguetes Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }
    })

    /* cuarto rango */
    cuartorango.addEventListener && accesorios.addEventListener("click", () => {

        if(cuartorango.checked && accesorios.checked == false){ /* SOLO 2do rango */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "flex" 
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(cuartorango.checked && accesorios.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Accesorios Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(cuartorango.checked && comida.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(cuartorango.checked && higiene.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Higiene Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
            tituloPerro.innerText = "Productos Perro"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(cuartorango.checked && juguetes.checked){/* AMBOS */

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none" 
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
            tituloPerro.innerText = "Juguetes Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

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
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && primerrango.checked){  /* SOLO 1ER RANGO */

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorprimero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "15 resultados"
            cantidadProductosMobile.innerHTML = "15 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && primerrango.checked == false){  /* NINGUNO */

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorprimero.style.display = "none"
            contenedorPrimeroOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })

    off.addEventListener && segundorango.addEventListener("click", () => {

        if(off.checked && segundorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorSegundoOff.style.display = "none" 
            contenedorsegundo.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked && segundorango.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "flex" 
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
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if(off.checked == false && segundorango.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "none" 
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && segundorango.checked == false){

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorSegundoOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })

    off.addEventListener && tercerrango.addEventListener("click", () => {

        if(off.checked && tercerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorTerceroOff.style.display = "none" 
            contenedortercero.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked && tercerrango.checked){

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
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if(off.checked == false && tercerrango.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "8 resultados"
            cantidadProductosMobile.innerHTML = "8 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && tercerrango.checked == false){

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedortercero.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })

    off.addEventListener && cuartorango.addEventListener("click", () => {

        if(off.checked && cuartorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorProdDescuentos.style.display = "flex"
            contenedorCuartoOff.style.display = "none" 
            contenedorcuarto.style.display = "none" 
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
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked && cuartorango.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "flex" 
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
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if(off.checked == false && cuartorango.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(off.checked == false && cuartorango.checked == false){

            contenedorVisible.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
            divOpciones.style.opacity = "1"
            /* categorias */
            accesorios.disabled = false
            comida.disabled = false
            higiene.disabled = false
            juguetes.disabled = false
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = false
            tercerrango.disabled = false
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        }
    })


    /* MARCAS */
    eukanuba.addEventListener("click", () => {

        if(eukanuba.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcheckboxEukanuba.style.display = "flex"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcheckboxEukanuba.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })

    royal.addEventListener("click", () => {

        if(royal.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcheckboxRoyal.style.display = "flex"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = false
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcheckboxRoyal.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })

    proplan.addEventListener("click", () => {

        if(proplan.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcheckboxProPlan.style.display = "flex"
            cantidadProductos.innerHTML = "0 resultados"
            cantidadProductosMobile.innerHTML = "0 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = false
            otrasmarcas.disabled = true

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcheckboxProPlan.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })

    otrasmarcas.addEventListener("click", () => {

        if(otrasmarcas.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcheckboxOtrasMarcas.style.display = "flex"
            cantidadProductos.innerHTML = "30 resultados"
            cantidadProductosMobile.innerHTML = "30 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = false

        } else {

            contenedorVisible.style.display = "flex"
            contenedorcheckboxOtrasMarcas.style.display = "none"
            cantidadProductos.innerHTML = "40 resultados"
            cantidadProductosMobile.innerHTML = "40 resultados"
            botonOrdenar.style.display = "flex"
            ordenar.style.display = "flex"
            flechitaAbajo.style.display = "flex"
            botonOrdenar.innerHTML = "Categoría"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false
        }
    })


    /* COMBINACIONES */
    /* CATEGORIAS + DESCUENTO */
    accesorios.addEventListener && off.addEventListener("click", () => {

        if(accesorios.checked && off.checked){  /* si acc y off estan chequeadas */

            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesoriosOff.style.display = "flex"  /* el contenedor accesorio con dscto SI */
            contenedorAccesorio.style.display = "none"  /* el contenedor accesorio NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Accesorios Perro"  /* sigue siendo accesorio de Perro */
            cantidadProductos.innerHTML = "3 resultados"  /* son 2 resultados */
            cantidadProductosMobile.innerHTML = "3 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if (accesorios.checked && off.checked == false){  /* si acc esta chequeada y off no */
    
            contenedorAccesorio.style.display = "flex"  /* el contenedor comida SI */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorAccesoriosOff.style.display = "none"  /* el contenedor accesorio con dscto NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Accesorios Perro"  /* sigue siendo comida de Perro */
            cantidadProductos.innerHTML = "11 resultados"  /* son 11 resultados */
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } 
    })

    comida.addEventListener && off.addEventListener("click", () => {

        if(comida.checked && off.checked){  /* si comida y off estan chequeadas */

            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComidaOff.style.display = "flex"  /* el contenedor comida con dscto SI */
            contenedorComida.style.display = "none"  /* el contenedor comida NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Comida Perro"  /* sigue siendo comida de Perro */
            cantidadProductos.innerHTML = "3 resultados"  /* son 3 resultados */
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if (comida.checked && off.checked == false){  /* si comida esta chequeada y off no */
    
            contenedorComida.style.display = "flex"  /* el contenedor comida SI */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorComidaOff.style.display = "none"  /* el contenedor comida con dscto NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Comida Perro"  /* sigue siendo comida de Perro */
            cantidadProductos.innerHTML = "10 resultados"  /* son 10 resultados */
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }
    
    })

    higiene.addEventListener && off.addEventListener("click", () => {

        if(higiene.checked && off.checked){  /* si hig y off estan chequeadas */

            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigieneOff.style.display = "flex"  /* el contenedor higiene con dscto SI */
            contenedorHigiene.style.display = "none"  /* el contenedor higiene NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Higiene Perro"  /* sigue siendo higiene de Perro */
            cantidadProductos.innerHTML = "0 resultados"  /* son 3 resultados */
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if (higiene.checked && off.checked == false){  /* si hig esta chequeada y off no */
    
            contenedorHigiene.style.display = "flex"  /* el contenedor higiene SI */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorHigieneOff.style.display = "none"  /* el contenedor higiene con dscto NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Higiene Perro"  /* sigue siendo higiene de Perro */
            cantidadProductos.innerHTML = "9 resultados"  /* son 11 resultados */
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
        } 
    })

    juguetes.addEventListener && off.addEventListener("click", () => {

        if(juguetes.checked && off.checked){  /* si ju y off estan chequeadas */

            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguetesOff.style.display = "flex"  /* el contenedor juguetes con dscto SI */
            contenedorJuguete.style.display = "none"  /* el contenedor juguetes NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Juguetes Perro"  /* sigue siendo juguetes de Perro */
            cantidadProductos.innerHTML = "0 resultados"  /* son 2 resultados */
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        } else if (juguetes.checked && off.checked == false){  /* si ju esta chequeada y off no */
    
            contenedorJuguete.style.display = "flex"  /* el contenedor juguetes SI */
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorVisible.style.display = "none"  /* el contenedor ppal NO */
            contenedorJuguetesOff.style.display = "none"  /* el contenedor juguetes con dscto NO */
            contenedorProdDescuentos.style.display = "none"  /* el contenedor dsctos NO */
            tituloPerro.innerText = "Juguetes Perro"  /* sigue siendo juguetes de Perro */
            cantidadProductos.innerHTML = "10 resultados"  /* son 10 resultados */
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
        } 
    })


    /* precios con descuento */
    primerrango.addEventListener && off.addEventListener("click", () => {

        if(primerrango.checked && off.checked){

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
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = false
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(primerrango.checked && off.checked == false){

            contenedorprimero.style.display = "flex"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorPrimeroOff.style.display = "none"
            contenedorVisible.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            cantidadProductos.innerHTML = "15 resultados"
            cantidadProductosMobile.innerHTML = "15 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }
    })

    segundorango.addEventListener && off.addEventListener("click", () => {

        if(segundorango.checked && off.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "none"
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "flex" 
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
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if (segundorango.checked && off.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorsegundo.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorSegundoOff.style.display = "none"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
        }
    })

    tercerrango.addEventListener && off.addEventListener("click", () => {

        if(tercerrango.checked && off.checked){

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
            /* categorias */
            accesorios.disabled = true
            comida.disabled = true
            higiene.disabled = true
            juguetes.disabled = true
            /* precios */
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if (tercerrango.checked && off.checked == false) {

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedortercero.style.display = "flex"   
            contenedorProdDescuentos.style.display = "none"
            contenedorTerceroOff.style.display = "none" 
            cantidadProductos.innerHTML = "8 resultados"
            cantidadProductosMobile.innerHTML = "8 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
        }
    })

    cuartorango.addEventListener && off.addEventListener("click", () => {

        if(cuartorango.checked && off.checked){

            contenedorVisible.style.display = "none" 
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "none"   
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "flex" 
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
            cuartorango.disabled = false
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if (cuartorango.checked && off.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorcuarto.style.display = "flex"
            contenedorProdDescuentos.style.display = "none"
            contenedorCuartoOff.style.display = "none" 
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
        }
    })

    /* categorias por precio */
    /* accesorios */
    accesorios.addEventListener && primerrango.addEventListener("click", () => {

        if(accesorios.checked && primerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "1 resultados"
            cantidadProductosMobile.innerHTML = "1 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(accesorios.checked && primerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio0a10.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        }

    })

    accesorios.addEventListener && segundorango.addEventListener("click", () => {

        if(accesorios.checked && segundorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
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
            primerrango.disabled = true
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(accesorios.checked && segundorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio10a20.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    accesorios.addEventListener && tercerrango.addEventListener("click", () => {

        if(accesorios.checked && tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
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
            primerrango.disabled = true
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(accesorios.checked && tercerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio20a30.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
        }

    })

    accesorios.addEventListener && cuartorango.addEventListener("click", () => {

        if(accesorios.checked && cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "flex"
            contenedorAccesorio.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(accesorios.checked && cuartorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorAccesorio30aX.style.display = "none"
            contenedorAccesorio.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Accesorios Perro"
            cantidadProductos.innerHTML = "11 resultados"
            cantidadProductosMobile.innerHTML = "11 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }
    })

    /* comida */
    comida.addEventListener && primerrango.addEventListener("click", () => {

        if(comida.checked && primerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(comida.checked && primerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida0a10.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }
    })

    comida.addEventListener && segundorango.addEventListener("click", () => {

        if(comida.checked && segundorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(comida.checked && segundorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida10a20.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }
    })

    comida.addEventListener && tercerrango.addEventListener("click", () => {

        if(comida.checked && tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "3 resultados"
            cantidadProductosMobile.innerHTML = "3 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(comida.checked && tercerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida20a30.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    comida.addEventListener && cuartorango.addEventListener("click", () => {

        if(comida.checked && cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "flex"
            contenedorComida.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "7 resultados"
            cantidadProductosMobile.innerHTML = "7 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(comida.checked && cuartorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorComida30aX.style.display = "none"
            contenedorComida.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Comida Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }
    })

    /* higiene */
    higiene.addEventListener && primerrango.addEventListener("click", () => {

        if(higiene.checked && primerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "4 resultados"
            cantidadProductosMobile.innerHTML = "4 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(higiene.checked && primerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene0a10.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }
    })

    higiene.addEventListener && segundorango.addEventListener("click", () => {

        if(higiene.checked && segundorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "5 resultados"
            cantidadProductosMobile.innerHTML = "5 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(higiene.checked && segundorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene10a20.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    higiene.addEventListener && tercerrango.addEventListener("click", () => {

        if(higiene.checked && tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
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
            segundorango.disabled = true
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        } else if(higiene.checked && tercerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene20a30.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    higiene.addEventListener && cuartorango.addEventListener("click", () => {

        if(higiene.checked && cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "flex"
            contenedorHigiene.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
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
            segundorango.disabled = true
            tercerrango.disabled = true
            cuartorango.disabled = false
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = false
            royal.disabled = false
            proplan.disabled = false
            otrasmarcas.disabled = false

        } else if(higiene.checked && cuartorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorHigiene30aX.style.display = "none"
            contenedorHigiene.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "9 resultados"
            cantidadProductosMobile.innerHTML = "9 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    /* juguetes */
    juguetes.addEventListener && primerrango.addEventListener("click", () => {

        if(juguetes.checked && primerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(juguetes.checked && primerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete0a10.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorprimero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    juguetes.addEventListener && segundorango.addEventListener("click", () => {

        if(juguetes.checked && segundorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
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
            segundorango.disabled = false
            tercerrango.disabled = true
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(juguetes.checked && segundorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete10a20.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorsegundo.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    juguetes.addEventListener && tercerrango.addEventListener("click", () => {

        if(juguetes.checked && tercerrango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
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
            tercerrango.disabled = false
            cuartorango.disabled = true
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(juguetes.checked && tercerrango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete20a30.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedortercero.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })

    juguetes.addEventListener && cuartorango.addEventListener("click", () => {

        if(juguetes.checked && cuartorango.checked){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "flex"
            contenedorJuguete.style.display = "none"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
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
            /* off */
            off.disabled = true
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true

        } else if(juguetes.checked && cuartorango.checked == false){

            contenedorVisible.style.display = "none"
            contenedorMenorPrecio.style.display = "none"
            contenedorMayorPrecio.style.display = "none"
            contenedorJuguete30aX.style.display = "none"
            contenedorJuguete.style.display = "flex"
            contenedorcuarto.style.display = "none"  
            tituloPerro.innerText = "Higiene Perro"
            cantidadProductos.innerHTML = "10 resultados"
            cantidadProductosMobile.innerHTML = "10 resultados"
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
            /* off */
            off.disabled = false
            /* marcas */
            eukanuba.disabled = true
            royal.disabled = true
            proplan.disabled = true
            otrasmarcas.disabled = true
            
        }

    })


    
  
})
