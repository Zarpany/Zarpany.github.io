window.onload = function() {
    // Ejemplo: Agregar una alerta al cargar la página
    alert("¡Bienvenido a la Página de Fans de Laufey!");

    // Ejemplo: Cambiar el color de fondo de los divs con la clase 'song-info' al hacer clic
    const songInfoDivs = document.querySelectorAll('.song-info');
    songInfoDivs.forEach(div => {
        div.addEventListener('click', () => {
            div.style.backgroundColor = "#e6e6e6";
        });
    });
};
