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
setInterval(changeSlide, 5000); // Cambia de imagen cada 3 segundos

// Inicializamos la primera imagen con la clase 'active'
slides[currentIndex].classList.add('active');



// -------------------- Funciones para "Agregar al carrito" y "Comprar" --------------------
// Inicializamos el carrito como un array vacío
let cart = [];

// Función para agregar al carrito
function addToCart(product) {
    // Agregar el producto al carrito (simulado aquí con un array)
    cart.push(product);
    updateCartDisplay();
    alert(`${product} ha sido agregado al carrito.`);
}

// Función para simular la compra inmediata
function buyNow(product) {
    alert(`Redirigiendo para comprar ${product}`);
    // Redirigir a la página de compra (por ejemplo)
    window.location.href = "/compra";
}

// Función para mostrar el contenido del carrito en el menú desplegable
function updateCartDisplay() {
    const cartMenu = document.querySelector('.cart-menu');
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

// Mostrar el carrito al hacer clic en "Mi carrito"
document.querySelector('.cart-link').addEventListener('click', function() {
    const cartMenu = document.querySelector('.cart-menu');
    cartMenu.classList.toggle('show');
});

