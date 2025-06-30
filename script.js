// Seleccionamos todas las imágenes del carrusel
const slides = document.querySelectorAll('.carousel-slide');

// Contador para cambiar de imagen
let currentIndex = 0;

// Función para cambiar la imagen activa
function changeSlide() {
    // Removemos la clase 'active' de la imagen actual
    slides[currentIndex].classList.remove('active');

    // Calculamos el siguiente índice
    currentIndex = (currentIndex + 1) % slides.length;

    // Agregamos la clase 'active' al siguiente slide
    slides[currentIndex].classList.add('active');
}

// Cambiar de imagen cada 5 segundos
setInterval(changeSlide, 5000); // Cambia de imagen cada 3 segundos

// Inicializamos la primera imagen con la clase 'active'
slides[currentIndex].classList.add('active');
