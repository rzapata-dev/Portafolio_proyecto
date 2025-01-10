// Seleccionamos todos los enlaces del menú que tienen la clase "menu__itens"
const menuLinks = document.querySelectorAll('.menu__itens');

// Recorremos todos los enlaces seleccionados
menuLinks.forEach(link => {
    // Añadimos un event listener para escuchar el evento 'click' en cada enlace
    link.addEventListener('click', function(event) {
        // Verificamos si el enlace tiene un href que comienza con 'mailto:', si es así, no aplicamos el scroll
        if (link.getAttribute('href').startsWith('mailto:')) {
            return; // Salimos de la función, evitando que el código de desplazamiento se ejecute
        }

        // Prevent default evita que el navegador haga el comportamiento por defecto (ir al enlace)
        event.preventDefault();

        // Obtenemos el id del destino del enlace (el #id de href) y eliminamos el símbolo "#"
        const targetId = link.getAttribute('href').substring(1);

        // Usamos el id para encontrar el elemento del DOM al que debemos desplazarnos
        const targetElement = document.getElementById(targetId);

        // Hacemos el desplazamiento suave hasta el elemento encontrado
        window.scrollTo({
            // Desplazamos al elemento y le restamos 100px para que no se quede justo al inicio de la ventana
            top: targetElement.offsetTop - 100,
            // Esto aplica el efecto de desplazamiento suave
            behavior: 'smooth'
        });
    });
});
