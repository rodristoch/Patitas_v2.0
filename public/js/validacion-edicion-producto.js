window.addEventListener('load', () => {

    //capturo los elementos (inputs)
    let form = document.getElementById ('formulario');
    let nombre = document.getElementById ('nombre_producto');
    let precio = document.getElementById ('precio_producto');
    let marca = document.getElementById ('marca');
    let mascota = document.getElementById ('mascota')
    let categoria = document.getElementById ('categoria');
    let descuento = document.getElementById ('descuento');
    let descripcion = document.getElementById ('descripcion');

    let button = document.getElementById ('sumbit');


    //capturo los elementos de error (smalls dentro de los divs)
    let errorNombre = document.querySelector('.errorNombre');
    let errorPrecio = document.querySelector('.errorPrecio');
    let errorMarca = document.querySelector('.errorMarca');
    let errorMascota = document.querySelector('.errorMascota');
    let errorCategoria = document.querySelector('.errorCategoria');
    let errorDescuento = document.querySelector('.errorDescuento');
    let errorDescripcion = document.querySelector('.errorDescripcion');

    //capturo los titulos de los inputs
    let nombreTitulo   = document.querySelector('.titulo-nombre');
    let precioTitulo = document.querySelector('.titulo-precio');
    let marcaTitulo    = document.querySelector('.titulo-marca');
    let mascotaTitulo     = document.querySelector('.titulo-mascota');
    let categoriaTitulo   = document.querySelector('.titulo-categoria');
    let descuentoTitulo     = document.querySelector('.titulo-descuento');
    let descripcionTitulo   = document.querySelector('.titulo-descripcion');

    //capturo los spans de los signitos
    let iconExclNombre = document.querySelector('#iconExclNombre');
    let iconCheckNombre = document.querySelector('#iconCheckNombre');

    let iconExclPrecio = document.querySelector('#iconExclPrecio');
    let iconCheckPrecio = document.querySelector('#iconCheckPrecio');

    let iconExclMarca = document.querySelector('#iconExclMarca');
    let iconCheckMarca = document.querySelector('#iconCheckMarca');

    let iconExclMascota = document.querySelector('#iconExclMascota');
    let iconCheckMascota = document.querySelector('#iconCheckMascota');

    let iconExclCategoria = document.querySelector('#iconExclCategoria');
    let iconCheckCategoria = document.querySelector('#iconCheckCategoria');

    let iconExclDescuento = document.querySelector('#iconExclDescuento');
    let iconCheckDescuento = document.querySelector('#iconCheckDescuento');
    
    let iconExclDescripcion = document.querySelector('#iconExclDescripcion');
    let iconCheckDescripcion = document.querySelector('#iconCheckDescripcion');



    /* PARA LAS KEYUP EN CADA CAMPO QUE TE CORRIJE A MEDIDA Q ESCRIBIS */
    nombre.addEventListener("keyup", () => {

        let errores = {};

        //Validaciones de nombre
        if (nombre.value.length < 1 ) {
            errores.nombre = '- Este campo debe estar completo'
            nombreTitulo.style.color = "red"
            iconExclNombre.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckNombre.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (!/^[a-zA-Z]+$/.test(nombre.value)) {
            errores.nombre = '- El nombre solo puede contener letras';
            nombreTitulo.style.color = "red"
            iconExclNombre.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckNombre.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if(nombre.value.length < 4) {
            errores.nombre = '- El nombre debe tener al menos 4 caracteres'
            nombreTitulo.style.color = "red"
            iconExclNombre.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckNombre.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            nombreTitulo.style.color = "green" 
            iconCheckNombre.style.display = "inline"
            iconExclNombre.style.display = "none"
            nombre.style.border = "1px solid green"
            nombre.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';

        } else {

            errorNombre.innerText = '';
        }

    })

    precio.addEventListener("keyup", () => {

        let errores = {};

        //validaciones de precio 
        if (precio.value.length < 1) {
            errores.precio = '- Este campo debe estar completo';
            precioTitulo.style.color = "red"
            iconExclPrecio.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckPrecio.style.display = "none"  /* saco el icon del signo del check */
            precio.style.border = "1px solid red"  /* le pongo eso al input */
            precio.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (!/^\d+(\.\d+)?$/.test(precio.value)) {
            errores.precio = '- El precio debe ser un número';
            precioTitulo.style.color = "red"
            iconExclPrecio.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckPrecio.style.display = "none"  /* saco el icon del signo del check */
            precio.style.border = "1px solid red"  /* le pongo eso al input */
            precio.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (parseFloat(precio.value) < 4) {
            errores.precio = '- El precio debe ser mayor que 4';
            precioTitulo.style.color = "red"
            iconExclPrecio.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckPrecio.style.display = "none"  /* saco el icon del signo del check */
            precio.style.border = "1px solid red"  /* le pongo eso al input */
            precio.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            precioTitulo.style.color = "green" 
            iconCheckPrecio.style.display = "inline"
            iconExclPrecio.style.display = "none"
            precio.style.border = "1px solid green"
            precio.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorPrecio.innerText = (errores.precio) ? errores.precio : '';

        } else {

            errorPrecio.innerText = '';
        }

    })

    descripcion.addEventListener("keyup", () => {

        let errores = {};

        //validación descripción
        if (descripcion.value.length <1) {
            errores.descripcion = '- Este campo debe estar completo'
            descripcionTitulo.style.color = "red"
            iconExclDescripcion.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckDescripcion.style.display = "none"  /* saco el icon del signo del check */
            descripcion.style.border = "1px solid red"  /* le pongo eso al input */
            descripcion.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (descripcion.value. length <10) {
            errores.descripcion =  '- Ingresa una descripción'
            descripcionTitulo.style.color = "red"
            iconExclDescripcion.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckDescripcion.style.display = "none"  /* saco el icon del signo del check */
            descripcion.style.border = "1px solid red"  /* le pongo eso al input */
            descripcion.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            descripcionTitulo.style.color = "green" 
            iconCheckDescripcion.style.display = "inline"
            iconExclDescripcion.style.display = "none"
            descripcion.style.border = "1px solid green"
            descripcion.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorDescripcion.innerText = (errores.descripcion) ? errores.descripcion : '';

        } else {

            errorDescripcion.innerText = '';
        }

    })


    /* PARA QUE NO SE MANDE ALGUN ERROR AL APRETAR EN EL BOTON DE SUBMIT */
    button.addEventListener('click', (event) => {

        event.preventDefault();
        
        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        //Validaciones de nombre
        if (nombre.value.length < 1 ) {
            errores.nombre = '- Este campo debe estar completo'
            nombreTitulo.style.color = "red"
            iconExclNombre.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckNombre.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (!/^[a-zA-Z]+$/.test(nombre.value)) {
            errores.nombre = '- El nombre solo puede contener letras';
            nombreTitulo.style.color = "red"
            iconExclNombre.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckNombre.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if(nombre.value.length < 4) {
            errores.nombre = '- El nombre debe tener al menos 4 caracteres'
            nombreTitulo.style.color = "red"
            iconExclNombre.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckNombre.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            nombreTitulo.style.color = "green" 
            iconCheckNombre.style.display = "inline"
            iconExclNombre.style.display = "none"
            nombre.style.border = "1px solid green"
            nombre.style.backgroundColor = "rgb(232, 255, 232)"
        }
        

        //validaciones de precio 
        if (precio.value.length < 1) {
            errores.precio = '- Este campo debe estar completo';
            precioTitulo.style.color = "red"
            iconExclPrecio.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckPrecio.style.display = "none"  /* saco el icon del signo del check */
            precio.style.border = "1px solid red"  /* le pongo eso al input */
            precio.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (!/^\d+(\.\d+)?$/.test(precio.value)) {
            errores.precio = '- El precio debe ser un número';
            precioTitulo.style.color = "red"
            iconExclPrecio.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckPrecio.style.display = "none"  /* saco el icon del signo del check */
            precio.style.border = "1px solid red"  /* le pongo eso al input */
            precio.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (parseFloat(precio.value) < 4) {
            errores.precio = '- El precio debe ser mayor que 4';
            precioTitulo.style.color = "red"
            iconExclPrecio.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckPrecio.style.display = "none"  /* saco el icon del signo del check */
            precio.style.border = "1px solid red"  /* le pongo eso al input */
            precio.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            precioTitulo.style.color = "green" 
            iconCheckPrecio.style.display = "inline"
            iconExclPrecio.style.display = "none"
            precio.style.border = "1px solid green"
            precio.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //validaciones marca
         const id_brand = parseInt(marca.value)
        if (id_brand == -1){
            errores.marca = '- Selecciona una marca';
            marcaTitulo.style.color = "red"
            iconExclMarca.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckMarca.style.display = "none"  /* saco el icon del signo del check */
            marca.style.border = "1px solid red"  /* le pongo eso al input */
            marca.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            marcaTitulo.style.color = "green" 
            iconCheckMarca.style.display = "inline"
            iconExclMarca.style.display = "none"
            marca.style.border = "1px solid green"
            marca.style.backgroundColor = "rgb(232, 255, 232)"

        }

        // Validación mascota
        const id_pet = parseInt(mascota.value)
        if (id_pet == -1) {
            errores.mascota = '- Selecciona una mascota'
            mascotaTitulo.style.color = "red"
            iconExclMascota.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckMascota.style.display = "none"  /* saco el icon del signo del check */
            mascota.style.border = "1px solid red"  /* le pongo eso al input */
            mascota.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            mascotaTitulo.style.color = "green" 
            iconCheckMascota.style.display = "inline"
            iconExclMascota.style.display = "none"
            mascota.style.border = "1px solid green"
            mascota.style.backgroundColor = "rgb(232, 255, 232)"

        }

        //Validación categoria
        const id_category = parseInt(categoria.value)
        if(id_category == -1) {
            errores.categoria = '- Selecciona una categoria'
            categoriaTitulo.style.color = "red"
            iconExclCategoria.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckCategoria.style.display = "none"  /* saco el icon del signo del check */
            categoria.style.border = "1px solid red"  /* le pongo eso al input */
            categoria.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            categoriaTitulo.style.color = "green" 
            iconCheckCategoria.style.display = "inline"
            iconExclCategoria.style.display = "none"
            categoria.style.border = "1px solid green"
            categoria.style.backgroundColor = "rgb(232, 255, 232)"

        }

        // validación descuento
        const id_discount = parseInt(descuento.value)
        if (id_discount == -1) {
            errores.descuento = "- Selecciona una opción de descuento"
            descuentoTitulo.style.color = "red"
            iconExclDescuento.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckDescuento.style.display = "none"  /* saco el icon del signo del check */
            descuento.style.border = "1px solid red"  /* le pongo eso al input */
            descuento.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            descuentoTitulo.style.color = "green" 
            iconCheckDescuento.style.display = "inline"
            iconExclDescuento.style.display = "none"
            descuento.style.border = "1px solid green"
            descuento.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //validación descripción
        if (descripcion.value.length <1) {
            errores.descripcion = '- Este campo debe estar completo'
            descripcionTitulo.style.color = "red"
            iconExclDescripcion.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckDescripcion.style.display = "none"  /* saco el icon del signo del check */
            descripcion.style.border = "1px solid red"  /* le pongo eso al input */
            descripcion.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else if (descripcion.value. length <10) {
            errores.descripcion =  '- Ingresa una descripción'
            descripcionTitulo.style.color = "red"
            iconExclDescripcion.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            iconCheckDescripcion.style.display = "none"  /* saco el icon del signo del check */
            descripcion.style.border = "1px solid red"  /* le pongo eso al input */
            descripcion.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        } else {
            descripcionTitulo.style.color = "green" 
            iconCheckDescripcion.style.display = "inline"
            iconExclDescripcion.style.display = "none"
            descripcion.style.border = "1px solid green"
            descripcion.style.backgroundColor = "rgb(232, 255, 232)"
        }

        
        if(Object.keys(errores).length >=1) {

            errorNombre.innerText = (errores.nombre) ? errores.nombre : '' ;
            errorPrecio.innerText = (errores.precio) ? errores.precio : '' ;
            errorMarca.innerText = (errores.marca) ? errores.marca : '' ;
            errorDescripcion.innerText = (errores.descripcion) ? errores.descripcion : '';
            errorMascota.innerText = (errores.mascota) ? errores.mascota : '';
            errorCategoria.innerText = (errores.categoria) ? errores.categoria : '';
            errorDescuento.innerText = (errores.descuento) ? errores.descuento : '';
       
        } else {
            form.submit();
        }

    })
})