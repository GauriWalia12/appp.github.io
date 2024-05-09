document.getElementById("loginButton").addEventListener("click", function() {
    var loginFormPopup = document.getElementById("loginFormPopup");
    if (loginFormPopup.style.display === "none") {
        loginFormPopup.style.display = "block";
    } else {
        loginFormPopup.style.display = "none";
    }
});

document.getElementById("signupButton").addEventListener("click", function() {
    var signupFormPopup = document.getElementById("signupFormPopup");
    if (signupFormPopup.style.display === "none") {
        signupFormPopup.style.display = "block";
    } else {
        signupFormPopup.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all slider images
    var sliderImages = document.querySelectorAll(".slider-image");
    var currentIndex = 0;

    // Show the first image initially
    sliderImages[currentIndex].classList.add("active");

    // Function to change active image
    function changeImage() {
        // Hide current active image
        sliderImages[currentIndex].classList.remove("active");
        // Move to the next image
        currentIndex = (currentIndex + 1) % sliderImages.length;
        // Show the next image
        sliderImages[currentIndex].classList.add("active");
    }

    // Set interval to change image every 3 seconds (adjust as needed)
    setInterval(changeImage, 1500);
});