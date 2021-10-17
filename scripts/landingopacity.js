const landing = document.querySelector(".landing");
const landingHeight = landing.clientHeight;

window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;
    let headerOpacity = ((landingHeight - scrollPosition * 1.3) / (landingHeight));
    landing.style.opacity = headerOpacity;
})