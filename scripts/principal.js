// Menú hamburguesa
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', function () {
    menu.classList.toggle('abierto');
});

// Carrito de compras
const carrito = [];
const contador = document.getElementById('contadorCarrito');
const botonesAgregar = document.querySelectorAll('.btn-agregar');

botonesAgregar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const tarjeta = boton.closest('.tarjeta');
        const nombre = tarjeta.querySelector('h3').textContent;
        carrito.push(nombre);
        contador.textContent = carrito.length;
    });
});