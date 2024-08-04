window.addEventListener("load", () => {

    //capturo los elementos (inputs)
    let form = document.querySelector('#formulario');
    let nombre = document.querySelector('#nombre');
    let apellido = document.querySelector('#apellido');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let passwordrepeat = document.querySelector('#passwordrepeat');
    let btnSubmit = document.querySelector('#btnSubmit');

    //capturo los elementos de error (smalls dentro de los divs)
    let errorNombre = document.querySelector('.errorNombre');
    let errorApellido = document.querySelector('.errorApellido');
    let errorEmail = document.querySelector('.errorEmail');
    let errorPassword = document.querySelector('.errorPassword');
    let errorPasswordrepeat = document.querySelector('.errorPasswordrepeat');

    //capturo los titulos de los inputs
    let nombreTitulo   = document.querySelector('.titulo-nombre');
    let apellidoTitulo = document.querySelector('.titulo-apellido');
    let emailTitulo    = document.querySelector('.titulo-email');
    let passTitulo     = document.querySelector('.titulo-pass');
    let repassTitulo   = document.querySelector('.titulo-repass');

    //capturo los spans de los signitos
    let exclamation1 = document.querySelector('#span12');
    let check1       = document.querySelector('#span1');
    let exclamation2 = document.querySelector('#span22');
    let check2       = document.querySelector('#span2');
    let exclamation3 = document.querySelector('#span32');
    let check3       = document.querySelector('#span3');
    let exclamation4 = document.querySelector('#span42');
    let check4       = document.querySelector('#span4');
    let exclamation5 = document.querySelector('#span52');
    let check5       = document.querySelector('#span5');



    /* PARA LAS KEYUP Y FOCUS EN CADA CAMPO QUE TE CORRIJE A MEDIDA Q ESCRIBIS */
    /* --------------- Eventos en el campo nombre ---------------- */
    nombre.addEventListener("focus", () => {

        let errores = {};

        //Validaciones de nombre
        if (nombre.value.length < 1) {
            nombreTitulo.style.color = "red"  /* le pongo eso al titulo */
            errores.nombre = "- Debes colocar un nombre"
            exclamation1.style.display = "inline"  /* le pone el icon del signo de exclamacion inline */
            check1.style.display = "none"  /* saco el icon del signo del check */
            nombre.style.border = "1px solid red"  /* le pongo eso al input */
            nombre.style.backgroundColor = "rgb(255, 236, 236)"  /* le pongo eso al input */
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {
            
            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';

        }

    })

    nombre.addEventListener("keyup", () => {

        let errores = {};

        //Validaciones de nombre
        if (nombre.value.length < 1) {
            nombreTitulo.style.color = "red"
            errores.nombre = "- Debes colocar un nombre"
            exclamation1.style.display = "inline"
            check1.style.display = "none"
            nombre.style.border = "1px solid red"
            nombre.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (nombre.value.length < 2) {
            nombreTitulo.style.color = "red"
            errores.nombre = '- El nombre debe tener al menos 2 caracteres' 
            exclamation1.style.display = "inline"
            check1.style.display = "none"
            nombre.style.border = "1px solid red"
            nombre.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            nombreTitulo.style.color = "green" 
            check1.style.display = "inline"
            exclamation1.style.display = "none"
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


    /* --------------- Eventos en el campo apellido ---------------- */
    apellido.addEventListener("focus", () => {

        let errores = {};

        //Validaciones de apellido
        if (apellido.value.length < 1) {
            apellidoTitulo.style.color = "red"
            errores.apellido = '- Debes colocar un apellido'
            exclamation2.style.display = "inline"
            check2.style.display = "none"
            apellido.style.border = "1px solid red"
            apellido.style.backgroundColor = "rgb(255, 236, 236)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {
            
            errorApellido.innerText = (errores.apellido) ? errores.apellido : '';

        }

    })

    apellido.addEventListener("keyup", () => {

        let errores = {};

        //Validaciones de apellido
        if (apellido.value.length < 1) {
            apellidoTitulo.style.color = "red"
            errores.apellido = '- Debes colocar un apellido'
            exclamation2.style.display = "inline"
            check2.style.display = "none"
            apellido.style.border = "1px solid red"
            apellido.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (apellido.value.length < 2) {
            apellidoTitulo.style.color = "red"
            errores.apellido = '- El apellido debe tener al menos 2 caracteres'
            exclamation2.style.display = "inline"
            check2.style.display = "none"
            apellido.style.border = "1px solid red"
            apellido.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            apellidoTitulo.style.color = "green" 
            check2.style.display = "inline"
            exclamation2.style.display = "none"
            apellido.style.border = "1px solid green"
            apellido.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorApellido.innerText = (errores.apellido) ? errores.apellido : '';

        } else {

            errorApellido.innerText = '';
        }

    })


    /* --------------- Eventos en el campo email ---------------- */
    email.addEventListener("focus", () => {

        let errores = {};

        //Validaciones de email
        if (email.value.length < 1) {
            emailTitulo.style.color = "red"
            errores.email = '- Debes colocar un email'
            exclamation3.style.display = "inline"
            check3.style.display = "none"
            email.style.border = "1px solid red"
            email.style.backgroundColor = "rgb(255, 236, 236)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {
            
            errorEmail.innerText = (errores.email) ? errores.email : '';

        }

    })

    email.addEventListener("keyup", () => {

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        let errores = {};

        //Validaciones de email
        if (email.value.length < 1) {
            emailTitulo.style.color = "red"
            errores.email = '- Debes colocar un email'
            exclamation3.style.display = "inline"
            check3.style.display = "none"
            email.style.border = "1px solid red"
            email.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (!reg.test(email.value)) {
            emailTitulo.style.color = "red"
            errores.email = '- El email introducido no es válido'
            exclamation3.style.display = "inline"
            check3.style.display = "none"
            email.style.border = "1px solid red"
            email.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            emailTitulo.style.color = "green"
            check3.style.display = "inline"
            exclamation3.style.display = "none"
            email.style.border = "1px solid green"
            email.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorEmail.innerText = (errores.email) ? errores.email : '';

        } else {

            errorEmail.innerText = '';
        }

    })


    /* --------------- Eventos en el campo contraseña ---------------- */
    password.addEventListener("focus", () => {

        let errores = {};

        //Validaciones de password
        if (password.value.length < 1) {
            passTitulo.style.color = "red"
            errores.password = '- Debes colocar una contraseña'
            exclamation4.style.display = "inline"
            check4.style.display = "none"
            password.style.border = "1px solid red"
            password.style.backgroundColor = "rgb(255, 236, 236)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {
            
            errorPassword.innerText = (errores.password) ? errores.password : '';

        }

    })

    password.addEventListener("keyup", () => {

        let errores = {};

        //Validaciones de password
        if (password.value.length < 1) {
            passTitulo.style.color = "red"
            errores.password = '- Debes colocar una contraseña'
            exclamation4.style.display = "inline"
            check4.style.display = "none"
            password.style.border = "1px solid red"
            password.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (password.value.length < 8) {
            passTitulo.style.color = "red"
            errores.password = '- La cantraseña debe tener al menos 8 caracteres'
            exclamation4.style.display = "inline"
            check4.style.display = "none"
            password.style.border = "1px solid red"
            password.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            passTitulo.style.color = "green"
            check4.style.display = "inline"
            exclamation4.style.display = "none"
            password.style.border = "1px solid green"
            password.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorPassword.innerText = (errores.password) ? errores.password : '';

        } else {

            errorPassword.innerText = '';
        }

    })


    /* --------------- Eventos en el campo repetir contraseña ---------------- */
    passwordrepeat.addEventListener("focus", () => {

        let errores = {};

        //Validaciones de repeat password
        if (passwordrepeat.value.length < 1) {
            repassTitulo.style.color = "red"
            errores.passwordrepeat = '- Vuelve a escribir tu contraseña'
            exclamation5.style.display = "inline"
            check5.style.display = "none"
            passwordrepeat.style.border = "1px solid red"
            passwordrepeat.style.backgroundColor = "rgb(255, 236, 236)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {
            
            errorPasswordrepeat.innerText = (errores.passwordrepeat) ? errores.passwordrepeat : '';

        }

    })

    passwordrepeat.addEventListener("keyup", () => {

        let errores = {};

        //Validaciones de repeat password
        if (passwordrepeat.value.length < 1) {
            repassTitulo.style.color = "red"
            errores.passwordrepeat = '- Vuelve a escribir tu contraseña'
            exclamation5.style.display = "inline"
            check5.style.display = "none"
            passwordrepeat.style.border = "1px solid red"
            passwordrepeat.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (passwordrepeat.value != password.value) {
            repassTitulo.style.color = "red"
            errores.passwordrepeat = '- Las contraseñas no coinciden'
            exclamation5.style.display = "inline"
            check5.style.display = "none"
            passwordrepeat.style.border = "1px solid red"
            passwordrepeat.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            repassTitulo.style.color = "green"
            check5.style.display = "inline"
            exclamation5.style.display = "none"
            passwordrepeat.style.border = "1px solid green"
            passwordrepeat.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Verificacion del objeto de errores
        if (Object.keys(errores).length  >= 1) {

            errorPasswordrepeat.innerText = (errores.passwordrepeat) ? errores.passwordrepeat : '';

        } else {

            errorPasswordrepeat.innerText = '';
        }

    })


    /* PARA QUE NO SE MANDE ALGUN ERROR AL APRETAR EN EL BOTON DE SUBMIT */
    /* -------------------- Eventos en el formulario ------------------- */
    btnSubmit.addEventListener('click', (event) => {

        event.preventDefault();
        
        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        //Validaciones de nombre
        if (nombre.value.length < 1) {
            nombreTitulo.style.color = "red"
            errores.nombre = "- Debes colocar un nombre"
            exclamation1.style.display = "inline"
            check1.style.display = "none"
            nombre.style.border = "1px solid red"
            nombre.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (nombre.value.length < 2) {
            nombreTitulo.style.color = "red"
            errores.nombre = '- El nombre debe tener al menos 2 caracteres' 
            exclamation1.style.display = "inline"
            check1.style.display = "none"
            nombre.style.border = "1px solid red"
            nombre.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            nombreTitulo.style.color = "green" 
            check1.style.display = "inline"
            exclamation1.style.display = "none"
            nombre.style.border = "1px solid green"
            nombre.style.backgroundColor = "rgb(232, 255, 232)"
        }
        
        //Validaciones de apellido
        if (apellido.value.length < 1) {
            apellidoTitulo.style.color = "red"
            errores.apellido = '- Debes colocar un apellido'
            exclamation2.style.display = "inline"
            check2.style.display = "none"
            apellido.style.border = "1px solid red"
            apellido.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (apellido.value.length < 2) {
            apellidoTitulo.style.color = "red"
            errores.apellido = '- El apellido debe tener al menos 2 caracteres'
            exclamation2.style.display = "inline"
            check2.style.display = "none"
            apellido.style.border = "1px solid red"
            apellido.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            apellidoTitulo.style.color = "green" 
            check2.style.display = "inline"
            exclamation2.style.display = "none"
            apellido.style.border = "1px solid green"
            apellido.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Validaciones de email
        if (email.value.length < 1) {
            emailTitulo.style.color = "red"
            errores.email = '- Debes colocar un email'
            exclamation3.style.display = "inline"
            check3.style.display = "none"
            email.style.border = "1px solid red"
            email.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (!reg.test(email.value)) {
            emailTitulo.style.color = "red"
            errores.email = '- El email introducido no es válido'
            exclamation3.style.display = "inline"
            check3.style.display = "none"
            email.style.border = "1px solid red"
            email.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            emailTitulo.style.color = "green"
            check3.style.display = "inline"
            exclamation3.style.display = "none"
            email.style.border = "1px solid green"
            email.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Validaciones de password
        if (password.value.length < 1) {
            passTitulo.style.color = "red"
            errores.password = '- Debes colocar una contraseña'
            exclamation4.style.display = "inline"
            check4.style.display = "none"
            password.style.border = "1px solid red"
            password.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (password.value.length < 8) {
            passTitulo.style.color = "red"
            errores.password = '- La cantraseña debe tener al menos 8 caracteres'
            exclamation4.style.display = "inline"
            check4.style.display = "none"
            password.style.border = "1px solid red"
            password.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            passTitulo.style.color = "green"
            check4.style.display = "inline"
            exclamation4.style.display = "none"
            password.style.border = "1px solid green"
            password.style.backgroundColor = "rgb(232, 255, 232)"
        }

        //Validaciones de repeat password
        if (passwordrepeat.value.length < 1) {
            repassTitulo.style.color = "red"
            errores.passwordrepeat = '- Vuelve a escribir tu contraseña'
            exclamation5.style.display = "inline"
            check5.style.display = "none"
            passwordrepeat.style.border = "1px solid red"
            passwordrepeat.style.backgroundColor = "rgb(255, 236, 236)"
        } else if (passwordrepeat.value != password.value) {
            repassTitulo.style.color = "red"
            errores.passwordrepeat = '- Las contraseñas no coinciden'
            exclamation5.style.display = "inline"
            check5.style.display = "none"
            passwordrepeat.style.border = "1px solid red"
            passwordrepeat.style.backgroundColor = "rgb(255, 236, 236)"
        } else {
            repassTitulo.style.color = "green"
            check5.style.display = "inline"
            exclamation5.style.display = "none"
            passwordrepeat.style.border = "1px solid green"
            passwordrepeat.style.backgroundColor = "rgb(232, 255, 232)"
        }
        

        //Verificacion del objeto de errores
        if (Object.keys(errores).length >= 1) {

            errorNombre.innerText = (errores.nombre) ? errores.nombre : '';
            errorApellido.innerText = (errores.apellido) ? errores.apellido : '';
            errorEmail.innerText = (errores.email) ? errores.email : '';
            errorPassword.innerText = (errores.password) ? errores.password : '';
            errorPasswordrepeat.innerText = (errores.passwordrepeat) ? errores.passwordrepeat : '';

        } else {
            form.submit();
        }
    });
});
