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

setInterval(changeFeaturesListItemsOrder,  5000);

window.addEventListener('resize', function() {
	const featureTitles = document.querySelectorAll('.feature__title');
	const theHighestFeatureTitle = Array.from(featureTitles).map(
		featureTitle => parseFloat(featureTitle.offsetHeight)).reduce(
		(maxFeatureTitleHeight, featureTitleHeight) =>
			featureTitleHeight > maxFeatureTitleHeight ? featureTitleHeight : maxFeatureTitleHeight
	);
	
	for (const featureTitle of featureTitles) {
		featureTitle.style.height = theHighestFeatureTitle + 'px';
	}
	
	if (window.innerWidth > 992 && window.innerWidth < 1069) {
		Array.from(document.querySelectorAll('.feature__divider')).forEach(
			featureDivider => featureDivider.style.marginTop = '30px');
	} else {
		Array.from(document.querySelectorAll('.feature__divider')).forEach(
			featureDivider => featureDivider.style.marginTop = '15px');
	}
})