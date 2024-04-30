document.addEventListener("DOMContentLoaded", function() {
    const nutritionTips = [
        "Include a variety of fruits and vegetables in your diet to ensure you get a wide range of vitamins and minerals.",
        "Balance your macronutrients by incorporating carbohydrates, proteins, and healthy fats into your meals.",
        "Stay hydrated throughout the day by drinking plenty of water to support bodily functions.",
        "Limit your intake of processed foods and foods high in added sugars for better overall health.",
        "Practice portion control to prevent overeating and support weight management.",
        "Read food labels to make informed choices about the nutritional content of foods."
    ];

    const nutritionTipsList = document.getElementById("nutrition-tips");
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
