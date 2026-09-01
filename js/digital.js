"use strict";

/*
 * MAS MAIL DIGITAL
 * JavaScript khusus halaman digital.html
 *
 * Fungsi:
 * 1. Back to Top
 * 2. Active navigation berdasarkan section
 * 3. Menambahkan efek reveal pada elemen
 * 4. Menjaga navigasi internal tetap nyaman di mobile
 */


/* =========================================
   BACK TO TOP
========================================= */

const backToTopButton =
    document.querySelector(".back-to-top");


function updateBackToTop() {

    if (!backToTopButton) return;


    /*
     * Tombol muncul setelah pengguna
     * cukup jauh melakukan scroll.
     */
    if (window.scrollY > 500) {

        backToTopButton.classList.add(
            "is-visible"
        );

    } else {

        backToTopButton.classList.remove(
            "is-visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
);


updateBackToTop();


if (backToTopButton) {

    backToTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const digitalSections =
    document.querySelectorAll(
        "main section[id]"
    );


const digitalNavLinks =
    document.querySelectorAll(
        ".digital-nav-link, .digital-mobile-nav-link"
    );


function updateActiveNavigation() {

    if (!digitalSections.length) return;


    const scrollPosition =
        window.scrollY + 180;


    let currentSection = "";


    digitalSections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSection =
                section.getAttribute("id");
        }

    });


    if (!currentSection) return;


    digitalNavLinks.forEach((link) => {

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


window.addEventListener(
    "resize",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================
   REVEAL ELEMENTS
========================================= */

/*
 * Elemen-elemen penting pada halaman
 * diberikan class "reveal" secara otomatis.
 *
 * CSS nanti akan menentukan bentuk
 * animasinya.
 */

const revealSelectors = [
    ".digital-section-heading",
    ".digital-intro-content",
    ".digital-service-card",
    ".digital-advantages-content",
    ".digital-advantage-item",
    ".digital-workflow-item",
    ".digital-cta-card"
];


const revealElements = [];


revealSelectors.forEach((selector) => {

    document
        .querySelectorAll(selector)
        .forEach((element) => {

            element.classList.add("reveal");

            revealElements.push(element);

        });

});


/*
 * IntersectionObserver digunakan agar
 * animasi hanya aktif ketika elemen
 * mendekati area layar.
 */
if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "is-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    /*
     * Fallback untuk browser lama.
     */
    revealElements.forEach((element) => {

        element.classList.add(
            "is-visible"
        );

    });

}


/* =========================================
   SERVICE CARD INTERACTION
========================================= */

const serviceCards =
    document.querySelectorAll(
        ".digital-service-card"
    );


serviceCards.forEach((card) => {

    card.addEventListener(
        "pointerenter",
        () => {

            card.classList.add(
                "is-hovered"
            );

        }
    );


    card.addEventListener(
        "pointerleave",
        () => {

            card.classList.remove(
                "is-hovered"
            );

        }
    );

});


/* =========================================
   HERO LOAD ANIMATION
========================================= */

const heroContent =
    document.querySelector(
        ".digital-hero-content"
    );


const heroVisual =
    document.querySelector(
        ".digital-hero-visual"
    );


window.addEventListener(
    "load",
    () => {

        if (heroContent) {

            heroContent.classList.add(
                "is-loaded"
            );

        }


        if (heroVisual) {

            heroVisual.classList.add(
                "is-loaded"
            );

        }

    }
);


/* =========================================
   HEADER SCROLL STATE
========================================= */

const digitalHeader =
    document.querySelector(
        ".digital-header"
    );


function updateHeaderState() {

    if (!digitalHeader) return;


    if (window.scrollY > 30) {

        digitalHeader.classList.add(
            "is-scrolled"
        );

    } else {

        digitalHeader.classList.remove(
            "is-scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeaderState,
    { passive: true }
);


updateHeaderState();
