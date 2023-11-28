'use strict'
class ValidadorFormulario {
    constructor(formId) {
        this.form = document.getElementById(formId);
        //seleccionar inputs
        this.nombre = document.getElementById('nombre');
        this.email = document.getElementById('email');
        this.contrasena = document.getElementById('contrasena');

        // seleccinar span de error
        this.nombreError = document.getElementById('nombreError');
        this.emailError = document.getElementById('emailError');
        this.contrasenaError = document.getElementById('contrasenaError');

        // escuchar eventos del usuario
        this.form.addEventListener('submit', (event) => {
            event.preventDefault(); // evitar el envio del formulario por defecto

            if (this.validarFormulario()) {
                alert('Formulario Enviando Información')
            }
        });
    }

    validarFormulario() {
        console.log('ingreso al metodo');

        let valid = true;

        if (this.nombre.value === "") {
            this.nombreError.textContent = 'El nombre de usuario es obligatorio';
            this.nombre.classList.add('error-input');
            valid = false;
        } else {
            this.nombreError.textContent = "";
            this.nombre.classList.remove('error-input');
        }

        if (this.email.value === "") {
            this.emailError.textContent = 'El correo es obligatorio';
            this.email.classList.add('error-input');
            valid = false;
        } else {
            this.emailError.textContent = "";
            this.email.classList.remove('error-input');
        }
        if (this.contrasena.value === "") {
            this.contrasenaError.textContent = 'Digite la contraseña';
            this.contrasena.classList.add('error-input');
            valid = false;
        } else {
            this.contrasenaError.textContent = "";
            this.contrasena.classList.remove('error-input');
        }

        return valid;      

        
    }
}
