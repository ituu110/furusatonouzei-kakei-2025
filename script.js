document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#ffffff";
            nav.style.boxShadow = "0px 4px 2px -2px gray";
        } else {
            nav.style.backgroundColor = "transparent";
            nav.style.boxShadow = "none";
        }
    });
});
