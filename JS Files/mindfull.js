document.addEventListener("DOMContentLoaded", function() {
    const mindfulnessTips = [
        "Start your day with a few minutes of mindful breathing to center yourself and set a positive tone for the day.",
        "Slow down and savor each bite during meals, paying attention to the taste, texture, and sensation of the food.",
        "Set aside time throughout the day for short mindfulness breaks to reset and recenter your mind and body.",
        "Practice gratitude and compassion towards yourself and others to promote emotional well-being and resilience.",
        "Incorporate activities like yoga, tai chi, or walking meditation to cultivate mindfulness through movement.",
        "End your day with a few minutes of mindful breathing to unwind and prepare your mind for restful sleep."
    ];

    const mindfulnessTipsList = document.getElementById("mindfulness-tips");
    mindfulnessTips.forEach(tip => {
        const li = document.createElement("li");
        li.textContent = tip;
        mindfulnessTipsList.appendChild(li);
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
