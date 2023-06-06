const catalogGreetContent = document.querySelector('.catalog__content-greet');
const catalogThankContent = document.querySelector('.catalog__content-thank');
const catalogGoodContent = document.querySelector('.catalog__content-good');

function renderContent(bouquets) {
    bouquets.forEach((bouquet) => {
        if (bouquet.id <= 3) {
            if (bouquet.oldPrice) {
                catalogGreetContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a id="${bouquet.id}" href="shop/bouquet-page.html"><img src="${bouquet.imgSrc}" alt="${bouquet.name}" class="catalog-item__image" /></a>
                        <a href="shop/bouquet-page.html" class="catalog-item__name">${bouquet.name}</a>
                        <div id="${bouquet.id}" class="catalog-item__prices">
                            <div class="catalog-item__old-price">${bouquet.oldPrice}</div>
                            <div class="catalog-item__price">$${bouquet.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            } else {
                catalogGreetContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="shop/bouquet-page.html"><img src="${bouquet.imgSrc}" alt="${bouquet.name}" class="catalog-item__image" /></a>
                        <a href="shop/bouquet-page.html" class="catalog-item__name">${bouquet.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__price">$${bouquet.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            }
        } else if (bouquet.id > 3 && bouquet.id < 8) {
            if (bouquet.oldPrice) {
                catalogThankContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="shop/bouquet-page.html"><img src="${bouquet.imgSrc}" alt="${bouquet.name}" class="catalog-item__image" /></a>
                        <a href="shop/bouquet-page.html" class="catalog-item__name">${bouquet.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">${bouquet.oldPrice}</div>
                            <div class="catalog-item__price">$${bouquet.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            } else {
                catalogThankContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="shop/bouquet-page.html"><img src="${bouquet.imgSrc}" alt="${bouquet.name}" class="catalog-item__image" /></a>
                        <a href="shop/bouquet-page.html" class="catalog-item__name">${bouquet.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__price">$${bouquet.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            }
        } else {
            if (bouquet.oldPrice) {
                catalogGoodContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="shop/bouquet-page.html"><img src="${bouquet.imgSrc}" alt="${bouquet.name}" class="catalog-item__image" /></a>
                        <a href="shop/bouquet-page.html" class="catalog-item__name">${bouquet.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__old-price">${bouquet.oldPrice}</div>
                            <div class="catalog-item__price">$${bouquet.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            } else {
                catalogGoodContent.innerHTML += `
                <div class="catalog-item">
                    <div class="catalog-item__wrapper">
                        <a href="shop/bouquet-page.html"><img src="${bouquet.imgSrc}" alt="${bouquet.name}" class="catalog-item__image" /></a>
                        <a href="shop/bouquet-page.html" class="catalog-item__name">${bouquet.name}</a>
                        <div class="catalog-item__prices">
                            <div class="catalog-item__price">$${bouquet.price},00USD</div>
                        </div>
                        <button class="catalog-item__btn btn btn--primary">Add to cart</button>
                    </div>
                </div>`
            }
        }
    })
}

renderContent(bouquets);