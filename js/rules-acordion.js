const titles = document.querySelectorAll('.faq__title');
const contents = document.querySelectorAll('.faq-descr');
const icons = document.querySelectorAll('.faq-plus');

titles.forEach((title, index) => {
    title.addEventListener('click', function () {
        // Закриваємо всі інші елементи перед відкриттям нового
        contents.forEach((content, contentIndex) => {
            if (contentIndex !== index) {
                content.style.display = "none";
                icons[contentIndex].textContent = "+";
            }
        });

        toggle(contents[index], icons[index]);
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