const services = ['decoration', 'events', 'floral-design'];

services.forEach(service => {
    const titles = document.querySelectorAll(`.our-services__${service}-title`);
    const contents = document.querySelectorAll(`.our-services__${service}-content`);
    const icons = document.querySelectorAll(`.toggle-icon-${service}`);

    titles.forEach((title, index) => {
        title.addEventListener('click', function () {
            toggle(contents[index], icons[index]);
        });
    });
});

function toggle(contentElement, iconElement) {
    const isDisplayed = contentElement.style.display === "block";

    if (isDisplayed) {
        contentElement.style.display = "none";
        iconElement.textContent = "+";
    }
    else {
        contentElement.style.display = "block";
        iconElement.textContent = "-";
    }
}
