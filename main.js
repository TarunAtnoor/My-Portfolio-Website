// TYPING EFFECT

var typed = new Typed(".text", {
    strings: [
        "Frontend Developer",
        "Java Developer",
        "Full Stack Developer",
        "Web Designer"
    ],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ACTIVE NAVBAR LINK

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        }

    });

};


// BUTTON HOVER EFFECT

const buttons = document.querySelectorAll(".btn-box, .read, .send");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});


// CONTACT FORM

const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});


// DARK MODE TOGGLE

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // ICON CHANGE

    const icon = darkModeToggle.querySelector("i");

    if(document.body.classList.contains("light-mode")){
        icon.classList.remove("bx-moon");
        icon.classList.add("bx-sun");
    }
    else{
        icon.classList.remove("bx-sun");
        icon.classList.add("bx-moon");
    }

});