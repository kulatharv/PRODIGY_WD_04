// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.style.background = window.scrollY > 50 ? "rgba(0, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)";
});

// Smooth Scroll
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
