document.addEventListener("DOMContentLoaded", function() {
    const nutritionTips = [
        "Drink plenty of water throughout the day to stay hydrated and support bodily functions.",
        "Carry a refillable water bottle with you to make it easy to stay hydrated while on the go.",
        "Monitor the color of your urine; pale yellow or clear urine indicates proper hydration.",
        "Stay hydrated before, during, and after physical activity by drinking water to replenish lost fluids.",
        "Incorporate hydrating foods such as fruits and vegetables into your diet to increase your water intake.",
        "Limit your intake of sugary and caffeinated drinks, as they can contribute to dehydration."
    ];

    const nutritionTipsList = document.getElementById("hydration-tips");
    nutritionTips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        nutritionTipsList.appendChild(li);
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { 
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); 
    }
});
