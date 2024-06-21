/*Tema claro a oscuro*/
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.switch input');

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
});


/*Esto es el scroll del header, para que siga hacia abajo*/
const header = document.querySelector('.header');
const headerOffsetTop = header.offsetTop;

function fixHeader() {
    if (window.scrollY > headerOffsetTop) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
}
/*Hace que haga el scroll a la ventana */
window.addEventListener('scroll', fixHeader);


/*Advertencia del formulario de los contactos*/

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form'); // Selecciona el formulario por la clase 'form'
    const nameInput = document.getElementById('name');
    const edadInput = document.getElementById('edad');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío automático del formulario

        if (!validateName()) {
            alert('Por favor, ingresa tu nombre');
            return;
        }

        if (!validateEdad()) {
            alert('Por favor, ingresa tu edad');
            return;
        }

        if (!validateEmail()) {
            alert('El correo electrónico no es válido');
            return;
        }

        if (!validateMessage()) {
            alert('Por favor, ingresa tus datos personales');
            return;
        }

        // Si todas las validaciones pasan, el formulario se envía
        form.submit();
    });

    function validateName() {
        const nameValue = nameInput.value.trim();
        return nameValue !== '';
    }

    function validateEdad() {
        const edadValue = edadInput.value.trim();
        return edadValue !== '';
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Corregido el patrón de validación del correo electrónico
        return emailPattern.test(emailValue);
    }

    function validateMessage() {
        const messageValue = messageInput.value.trim();
        return messageValue !== '';
    }




// Esto es del menú hamburguesa
menuHamburguesa.addEventListener('click', function() {
    menu.classList.toggle('active'); 
});


const links = menu.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        menu.classList.remove('active');
    });
}


document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideHamburguesa = menuHamburguesa.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideHamburguesa) {
        menu.classList.remove('active');
    }
});
});
