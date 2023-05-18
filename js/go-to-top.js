window.onload = () => {
	window.onscroll = function () {
		scrollFunction();
	};

	// Create scroll to up button
	const topBtn = createGoUpButton();

	function scrollFunction() {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			topBtn.style.display = "block";
		} else {
			topBtn.style.display = "none";
		}
	}
};

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function createGoUpButton() {
	// Create new elements
	var button = document.createElement("button");
	var img = document.createElement("img");

	// Set the attributes for the button
    button.onclick = topFunction;
	button.setAttribute("id", "topBtn");
	button.setAttribute("title", "Go to top");

	// Set the attributes for the img
	img.setAttribute("src", "images/new-bouquets/arrow-up-circle.svg");
	img.setAttribute("alt", "Arrow to go to top");
	img.setAttribute("class", "go-to-top-btn");

	// Append img to the button
	button.appendChild(img);

	// Append the button to the body
	document.body.appendChild(button);

	return button;
}
