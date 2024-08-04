window.addEventListener("load", () => {

    //capturo elementos
    let form = document.querySelector('.formulario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let errorEmail = document.querySelector('.errorEmail');
    let errorPassword = document.querySelector('.errorPassword');

    //capturo los titulos de los inputs
    let emailTitulo = document.querySelector('.titulo-email');
    let passTitulo = document.querySelector('.titulo-pass');

    //capturo los spans de los signitos
    let exclamation3 = document.querySelector('#span32');
    let check3       = document.querySelector('#span3');
    let exclamation4 = document.querySelector('#span42');
    let check4       = document.querySelector('#span4');


    form.addEventListener('submit', (event) => {
        
        event.preventDefault();

        let errores = {};

        let reg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        //Validaciones de email
        if (email.value.length < 1) {
            emailTitulo.style.color = "red"
            errores.email = '- Debes colocar tu email'
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
            errores.password = '- Debes colocar tu contraseña'
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

        errorEmail.innerText = errores.email || '';
        errorPassword.innerText = errores.password || ''; 
            
        if (Object.keys(errores).length == 0) {
            form.submit();
        }
    });
});
