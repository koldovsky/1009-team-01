window.onload = () => {
	let topBtn = document.getElementById("topBtn");

	window.onscroll = function () {
		scrollFunction();
	};

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
