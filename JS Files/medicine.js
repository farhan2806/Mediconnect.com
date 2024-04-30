function featureBrands(data) {
	let slider = document.getElementById("featured-brands");

	data.forEach((ele) => {
		let brand_item = document.createElement("div");
		brand_item.className = "brand-item";
		let image = document.createElement("img");
		image.src = `${ele.image}`;

		let name = document.createElement("p");
		name.innerHTML = `${ele.title}`;

		brand_item.append(image, name);
		slider.append(brand_item);
	});
	window.brandsSlideR = slideRight;
	window.brandsSlideL = slideLeft;
	function slideRight() {
		let left_arrow = document.querySelectorAll(".leftArrow")[1];
		slider.scrollLeft += 1200;
		left_arrow.style.display = "block";
	}

	function slideLeft() {
		slider.scrollLeft -= 1200;
		// right_arrow.style.display = "block";
	}
}

function topSlideR() {
    const slider = document.getElementById('top-seller');
    slider.scrollLeft += slider.offsetWidth; // Scrolls to the right by the width of the slider
}

function topSlideL() {
    const slider = document.getElementById('top-seller');
    slider.scrollLeft -= slider.offsetWidth; // Scrolls to the left by the width of the slider
}
