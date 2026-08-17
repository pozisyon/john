// ===============================
// MOBILE MENU
// ===============================

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


// ===============================
// CAROUSEL
// ===============================

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");


let currentSlide = 0;


function showSlide(index) {

    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    dots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[index]
        .classList.add("active");

    dots[index]
        .classList.add("active");

}


function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            slides.length - 1;

    }

    showSlide(currentSlide);

}


nextBtn.addEventListener(
    "click",
    nextSlide
);


prevBtn.addEventListener(
    "click",
    previousSlide
);


// dots

dots.forEach(dot => {

    dot.addEventListener(
        "click",
        function () {

            currentSlide =
                parseInt(
                    this.dataset.slide
                );

            showSlide(currentSlide);

        }
    );

});


// automatic carousel

let autoSlide =
    setInterval(nextSlide, 6000);


const carousel =
    document.querySelector(".carousel");


carousel.addEventListener(
    "mouseenter",
    () => {

        clearInterval(autoSlide);

    }
);


carousel.addEventListener(
    "mouseleave",
    () => {

        autoSlide =
            setInterval(
                nextSlide,
                6000
            );

    }
);


// ===============================
// LIGHTBOX
// ===============================

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );

const lightbox =
    document.getElementById(
        "lightbox"
    );

const lightboxImage =
    document.getElementById(
        "lightboxImage"
    );

const closeLightbox =
    document.getElementById(
        "closeLightbox"
    );


galleryItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const image =
                item.dataset.image;

            lightboxImage.src =
                image;

            lightbox.classList
                .add("active");

        }
    );

});


closeLightbox.addEventListener(
    "click",
    () => {

        lightbox.classList
            .remove("active");

    }
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            lightbox.classList
                .remove("active");

        }

    }
);


// ESCAPE KEY

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            lightbox.classList
                .remove("active");

        }

    }
);


// ===============================
// HEADER SHADOW
// ===============================

window.addEventListener(
    "scroll",
    () => {

        const header =
            document.querySelector(
                ".header"
            );

        if (
            window.scrollY > 50
        ) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);
