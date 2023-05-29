const featuresList = document.querySelector('.features__list');

const determineTheHighestFeaturesItem = function (featuresItems) {
	return Array.from(featuresItems).map(
		featuresItem => parseFloat(featuresItem.offsetHeight)).reduce(
		(maxFeaturesItemHeight, featuresItemHeight) =>
			featuresItemHeight > maxFeaturesItemHeight ? featuresItemHeight : maxFeaturesItemHeight);
}

const changeFeaturesListItemsOrder = function() {
	const featuresItems = document.querySelectorAll('.features__item');
	
	let featuresListHTMLContent = "";
	
	for (let i = 1; i < featuresItems.length; i++) {
		featuresListHTMLContent += '<li class="features__item">';
		featuresListHTMLContent += featuresItems[i].innerHTML;
		featuresListHTMLContent += '</li>';
	}
	
	featuresListHTMLContent += '<li class="features__item">';
	featuresListHTMLContent += featuresItems[0].innerHTML;
	featuresListHTMLContent += '</li>';
	
	if (window.innerWidth >= 992) {
		featuresList.style.gridTemplateRows = determineTheHighestFeaturesItem(featuresItems) + 'px';
	} else if (window.innerWidth >= 768) {
		featuresList.style.gridTemplateRows =
			determineTheHighestFeaturesItem(featuresItems) + 'px ' +
			determineTheHighestFeaturesItem(featuresItems) + 'px';
	}
	
	featuresList.innerHTML = featuresListHTMLContent;
}

setInterval(changeFeaturesListItemsOrder,  1000);