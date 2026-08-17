/* =========================================
   ELEMENTOS
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

const galleryButtons = document.querySelectorAll(".gallery-image-button");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

const currentYear = document.getElementById("currentYear");


/* =========================================
   MENÚ MÓVIL
========================================= */

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


const navLinks = document.querySelectorAll(
    ".nav-link, .nav-button"
);

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   FILTROS
========================================= */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.filter;


        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        portfolioItems.forEach((item) => {

            const itemCategory =
                item.dataset.category;


            if (selectedCategory === "todos") {

                item.classList.remove("hidden");

                return;
            }


            if (itemCategory === selectedCategory) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   LIGHTBOX
========================================= */

galleryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const image =
            button.querySelector("img");

        const imageUrl =
            image.src;

        const imageTitle =
            button.dataset.title;

        lightboxImage.src =
            imageUrl;

        lightboxImage.alt =
            image.alt;

        lightboxTitle.textContent =
            imageTitle;

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "lightbox-open"
        );

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "lightbox-open"
    );

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    }
);


/* =========================================
   AÑO
========================================= */

currentYear.textContent =
    new Date().getFullYear();