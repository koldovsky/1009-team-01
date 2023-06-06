const buttonAutumn = document.getElementById('');

const bouquetPage = document.querySelector('.bouquet-page');

const renderPage = () => {
    bouquetPage.innerHTML += `
    <div class="loop"><p class="lop">${bouquet.id}</p></div> 
    `
}

buttonAutumn.addEventListener('click', () => {
    renderPage();
})