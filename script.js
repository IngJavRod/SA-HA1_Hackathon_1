// -------------------- Carrusel --------------------
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
function changeSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}
setInterval(changeSlide, 5000);
slides[currentIndex].classList.add('active');

// -------------------- Carrito --------------------
let cart = [];
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
    alert(`${product} ha sido agregado al carrito.`);
}
function buyNow(product) {
    alert(`Redirigiendo para comprar ${product}`);
    window.location.href = "/compra";
}
const cartMenu = document.querySelector('.cart-menu');
const cartLink = document.querySelector('.cart-link');
const cartDropdownContainer = document.querySelector('.cart-dropdown-container');
function updateCartDisplay() {
    cartMenu.innerHTML = '';
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
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}
cartLink.addEventListener('click', function(event) {
    event.preventDefault();
    cartMenu.classList.toggle('show');
    if (cartMenu.classList.contains('show')) {
        updateCartDisplay();
    }
});
cartDropdownContainer.addEventListener('mouseleave', function() {
    cartMenu.classList.remove('show');
});
document.addEventListener('click', function(event) {
    if (!cartDropdownContainer.contains(event.target)) {
        cartMenu.classList.remove('show');
    }
});
document.addEventListener('DOMContentLoaded', updateCartDisplay);

// -------------------- Dropdown MENÚ DESPLEGABLE para todos --------------------
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownMenus = {};
    dropdownToggles.forEach(toggle => {
        const menuId = toggle.getAttribute('data-menu');
        const menu = document.getElementById(menuId);
        if (menu) {
            dropdownMenus[menuId] = menu;
            // Cerrar el menú en mobile al inicio
            if (window.innerWidth <= 600) {
                menu.classList.remove('show-dropdown');
            }
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 600) {
                    e.preventDefault();
                    // Cierra otros menús abiertos
                    Object.keys(dropdownMenus).forEach(id => {
                        if (id !== menuId) dropdownMenus[id].classList.remove('show-dropdown');
                    });
                    menu.classList.toggle('show-dropdown');
                }
            });
        }
    });

    // Cierra el menú al hacer click fuera en móvil
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 600) {
            let clickedToggle = false;
            dropdownToggles.forEach(toggle => {
                if (toggle === e.target) clickedToggle = true;
            });
            if (!clickedToggle) {
                Object.values(dropdownMenus).forEach(menu => menu.classList.remove('show-dropdown'));
            }
        }
    });

    // Al cambiar el tamaño de pantalla, cierra todos los menús si no es móvil
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            Object.values(dropdownMenus).forEach(menu => menu.classList.remove('show-dropdown'));
        }
    });
});