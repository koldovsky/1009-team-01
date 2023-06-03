const catalogGreetContent = document.querySelector('.catalog__content-greet');
const catalogThankContent = document.querySelector('.catalog__content-thank');
const catalogGoodContent = document.querySelector('.catalog__content-good');

function renderContent() {
    products.forEach((product) => {
        if (product.id <= 3) {
            if (product.oldPrice) {
                catalogGreetContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="catalog-item__image" /></a>
                        <a href="#" class="catalog-item__name">${product.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">${product.oldPrice}</div>
                            <div class="catalog-item__price">$${product.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            } else {
                catalogGreetContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="catalog-item__image" /></a>
                        <a href="#" class="catalog-item__name">${product.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__price">$${product.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            }
        } else if (product.id > 3 && product.id < 8) {
            if (product.oldPrice) {
                catalogThankContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="catalog-item__image" /></a>
                        <a href="#" class="catalog-item__name">${product.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">${product.oldPrice}</div>
                            <div class="catalog-item__price">$${product.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            } else {
                catalogThankContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="catalog-item__image" /></a>
                        <a href="#" class="catalog-item__name">${product.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__price">$${product.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            }
        } else {
            if (product.oldPrice) {
                catalogGoodContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="catalog-item__image" /></a>
                        <a href="#" class="catalog-item__name">${product.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">${product.oldPrice}</div>
                            <div class="catalog-item__price">$${product.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            } else {
                catalogGoodContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="catalog-item__image" /></a>
                        <a href="#" class="catalog-item__name">${product.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__price">$${product.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            }
        }
    })
}

renderContent();