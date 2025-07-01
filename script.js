// -------------------- Funciones para Carrusel --------------------
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
setInterval(changeSlide, 5000); // Cambia de imagen cada 5 segundos

// Inicializamos la primera imagen con la clase 'active'
slides[currentIndex].classList.add('active');


// -------------------- Funciones para "Agregar al carrito" y "Comprar" --------------------
// Inicializamos el carrito como un array vacío
let cart = [];

// Función para agregar al carrito
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
    alert(`${product} ha sido agregado al carrito.`);
}

// Función para simular la compra inmediata
function buyNow(product) {
    alert(`Redirigiendo para comprar ${product}`);
    // Redirigir a la página de compra (por ejemplo)
    window.location.href = "/compra"; // Asegúrate de que esta URL sea válida
}

// Obtener elementos del DOM para el carrito
const cartMenu = document.querySelector('.cart-menu');
const cartLink = document.querySelector('.cart-link'); // El botón "Carrito"
const cartDropdownContainer = document.querySelector('.cart-dropdown-container'); // El contenedor padre del botón y el menú

// Función para mostrar el contenido del carrito en el menú desplegable
function updateCartDisplay() {
    cartMenu.innerHTML = ''; // Limpiar el menú de carrito actual

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item}</p>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            `;
            cartMenu.appendChild(cartItem);
        });
    } else {
        cartMenu.innerHTML = '<p>No hay productos en el carrito.</p>';
    }
}

// Función para eliminar productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Eliminar producto del carrito
    updateCartDisplay(); // Actualizar el carrito en pantalla
}

// Mostrar/Ocultar el carrito al hacer clic en "Carrito"
cartLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    cartMenu.classList.toggle('show');
    // Asegurarse de que el carrito esté actualizado al abrirlo
    if (cartMenu.classList.contains('show')) {
        updateCartDisplay();
    }
});

// Ocultar el carrito cuando el cursor sale del contenedor (botón + menú)
cartDropdownContainer.addEventListener('mouseleave', function() {
    cartMenu.classList.remove('show');
});

// Opcional: Ocultar el carrito si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!cartDropdownContainer.contains(event.target)) {
        cartMenu.classList.remove('show');
    }
});

// Inicializar la visualización del carrito al cargar la página
// (Esto es útil si tienes items guardados en localStorage, aunque tu carrito es temporal ahora)
document.addEventListener('DOMContentLoaded', updateCartDisplay);