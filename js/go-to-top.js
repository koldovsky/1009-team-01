window.addEventListener("load", () => {
	debugger
	window.addEventListener("scroll", scrollFunction);
});

const topBtn = createGoUpButton();

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function createGoUpButton() {
	const button = document.createElement("button");
	const img = document.createElement("img");

	button.addEventListener("click", topFunction);
	button.setAttribute("id", "topBtn");
	button.setAttribute("title", "Go to top");

	img.setAttribute("src", "images/new-bouquets/arrow-up-circle.svg");
	img.setAttribute("alt", "Arrow to go to top");
	img.setAttribute("class", "go-to-top-btn");

	button.appendChild(img);

	document.body.appendChild(button);

	return button;
}
