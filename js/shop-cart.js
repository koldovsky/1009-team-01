let cart = [];

function addToCart (id) {
    if(cart.some((item) => item.id === id)) {
        alert('Bouquet already in cart!');
    } else {
        const item = bouquets.find((bouquet) => bouquet.id === id)

    cart.push({
        ...item,
        numberOfUnits: 0
    });

    console.log(cart);

    updateCart();
    }
}

function updateCart() {
    renderCartItems();
    // renderSubtotal();
}

function renderCartItems() {

}

addToCart(bouquets[3].id)
