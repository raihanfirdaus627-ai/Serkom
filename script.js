const testimonials = [
{
    text: "Pelayanannya cepat dan LCD iPhone saya kembali normal.",
    name: "- Rizky"
},
{
    text: "Baterai Android saya diganti dalam waktu kurang dari 30 menit.",
    name: "- Dimas"
},
{
    text: "Teknisinya ramah dan harga service sangat terjangkau.",
    name: "- Putri"
}
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= testimonials.length){
        index = 0;
    }

    document.getElementById("testimonialText").innerText =
        testimonials[index].text;

    document.getElementById("testimonialName").innerText =
        testimonials[index].name;

}, 4000);

// Menu aktif saat scroll
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {

        // Hapus class active dari semua menu
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Tambahkan class active ke menu yang diklik
        this.classList.add("active");
    });
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Menu aktif saat klik service box
const serviceBoxes = document.querySelectorAll(".service-box");

serviceBoxes.forEach(box => {
    box.addEventListener("click", () => {

        serviceBoxes.forEach(item => {
            item.classList.remove("active");
        });

        box.classList.add("active");

    });
});

// Blok klik kanan
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Blok copy
document.addEventListener("copy", function(e){
    e.preventDefault();
    alert("Konten website dilindungi.");
});

// Blok cut
document.addEventListener("cut", function(e){
    e.preventDefault();
});

// Blok Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+U, Ctrl+A, Ctrl+P
document.addEventListener("keydown", function(e){

    if (
        e.key === "F12" ||
        (e.ctrlKey && (
            e.key.toLowerCase() === "c" ||
            e.key.toLowerCase() === "x" ||
            e.key.toLowerCase() === "u" ||
            e.key.toLowerCase() === "s" ||
            e.key.toLowerCase() === "a" ||
            e.key.toLowerCase() === "p"
        ))
    ) {
        e.preventDefault();
    }

});

// Blok drag elemen
document.addEventListener("dragstart", function(e){
    e.preventDefault();
});

// Menu aktif saat klik feature card
const featureCards = document.querySelectorAll(".card");

featureCards.forEach(card => {
    card.addEventListener("click", () => {

        featureCards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });
});

//Toggle menu hubungi Kami
const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(button => {

    button.addEventListener("click", function() {

        this.classList.remove("clicked");

        setTimeout(() => {
            this.classList.add("clicked");
        }, 10);

    });

});

// Toggle menu navigasi
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(nav.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});