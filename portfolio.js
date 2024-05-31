/*Tema claro a oscuro*/
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('.switch input');

    toggleSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
});


