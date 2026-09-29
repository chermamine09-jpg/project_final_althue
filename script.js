// Gestion des boutons de taille
const sizeButtons = document.querySelectorAll('.size-btn');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Gestion des boutons de couleur
const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Trouve le conteneur parent pour ne changer que les couleurs du bloc concerné
        const parentContainer = button.closest('.color-options');
        parentContainer.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Gestion de la quantité
const minusBtn = document.querySelector('.qty-btn.minus');
const plusBtn = document.querySelector('.qty-btn.plus');
const qtyValue = document.querySelector('.qty-value');

let quantity = 1;

minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        qtyValue.textContent = quantity;
    }
});

plusBtn.addEventListener('click', () => {
    quantity++;
    qtyValue.textContent = quantity;
});

// Animation du bouton Ajouter au panier
const addToCartBtn = document.querySelector('.add-to-cart');

addToCartBtn.addEventListener('click', () => {
    const originalText = addToCartBtn.textContent;
    addToCartBtn.textContent = "Added to Cart ! ✓";
    addToCartBtn.style.backgroundColor = "#28a745"; // Vert succès

    setTimeout(() => {
        addToCartBtn.textContent = originalText;
        addToCartBtn.style.backgroundColor = "var(--primary-orange)";
    }, 2000);
});

// Galerie d'images interactive
const mainImage = document.querySelector('.container-one img');
const thumbnails = document.querySelectorAll('.product-images img');

thumbnails.forEach(thumb => {
    thumb.style.cursor = 'pointer';
    thumb.addEventListener('click', () => {
        const tempSrc = mainImage.src;
        mainImage.src = thumb.src;
        thumb.src = tempSrc; // Permet d'échanger les images
    });
});

