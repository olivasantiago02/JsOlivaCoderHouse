// Cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos elementos del DOM
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const productList = document.getElementById("product-list");
    const clearCartButton = document.getElementById("clear-cart-button");

    // Variables para el carrito y el total
    let cart = [];
    let total = 0;

    // Función para actualizar la interfaz del carrito
    function updateCartUI() {
        cartItems.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
        cartTotal.textContent = total.toFixed(2);
    }

    // Función para agregar un producto al carrito
    function addToCart(name, price) {
        cart.push({ name, price });
        total += price;
        updateCartUI();
    }

    // Evento para vaciar el carrito al hacer clic en "Vaciar Carrito"
    clearCartButton.addEventListener("click", function () {
        cart = [];
        total = 0;
        updateCartUI();
    });

    // Evento para agregar un producto al carrito al hacer clic en "Agregar al Carrito"
    productList.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-to-cart-btn")) {
            // Encontrar el elemento "product" más cercano en la jerarquía del DOM
            const product = event.target.closest(".product");
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));
            addToCart(name, price);
        }
    });
});
