"use strict";

/*
 * =========================================================
 * MAS MAIL BAROKAH
 * JavaScript khusus halaman barokah.html
 *
 * Fungsi:
 * 1. Mobile Navigation
 * 2. Back to Top
 * 3. Active Navigation
 * 4. Reveal Animation
 * 5. Interaksi Card
 * 6. Animasi Hero
 * 7. Header Scroll State
 * =========================================================
 */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const barokahMenuToggle =
    document.querySelector(".barokah-menu-toggle");

const barokahMobileNavigation =
    document.querySelector(".barokah-mobile-navigation");

const barokahMobileLinks =
    document.querySelectorAll(
        ".barokah-mobile-nav-link"
    );


function openBarokahMenu() {

    if (
        !barokahMenuToggle ||
        !barokahMobileNavigation
    ) {
        return;
    }


    barokahMenuToggle.classList.add("is-active");

    barokahMobileNavigation.classList.add(
        "is-open"
    );


    barokahMenuToggle.setAttribute(
        "aria-expanded",
        "true"
    );


    barokahMenuToggle.setAttribute(
        "aria-label",
        "Tutup menu navigasi"
    );


    document.body.classList.add(
        "menu-open"
    );

}


function closeBarokahMenu() {

    if (
        !barokahMenuToggle ||
        !barokahMobileNavigation
    ) {
        return;
    }


    barokahMenuToggle.classList.remove(
        "is-active"
    );


    barokahMobileNavigation.classList.remove(
        "is-open"
    );


    barokahMenuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    barokahMenuToggle.setAttribute(
        "aria-label",
        "Buka menu navigasi"
    );


    document.body.classList.remove(
        "menu-open"
    );

}


function toggleBarokahMenu() {

    if (
        !barokahMenuToggle ||
        !barokahMobileNavigation
    ) {
        return;
    }


    const isOpen =
        barokahMobileNavigation.classList.contains(
            "is-open"
        );


    if (isOpen) {

        closeBarokahMenu();

    } else {

        openBarokahMenu();

    }

}


/*
 * Tombol hamburger
 */

if (barokahMenuToggle) {

    barokahMenuToggle.addEventListener(
        "click",
        toggleBarokahMenu
    );

}


/*
 * Tutup menu ketika link dipilih.
 */

barokahMobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            closeBarokahMenu();

        }
    );

});


/*
 * Tutup ketika klik di luar menu.
 */

document.addEventListener(
    "click",
    (event) => {

        if (
            !barokahMobileNavigation ||
            !barokahMenuToggle
        ) {
            return;
        }


        const clickedInsideNavigation =
            barokahMobileNavigation.contains(
                event.target
            );


        const clickedToggle =
            barokahMenuToggle.contains(
                event.target
            );


        const isOpen =
            barokahMobileNavigation.classList.contains(
                "is-open"
            );


        if (
            isOpen &&
            !clickedInsideNavigation &&
            !clickedToggle
        ) {

            closeBarokahMenu();

        }

    }
);


/*
 * Tutup dengan tombol Escape.
 */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key !== "Escape") {
            return;
        }


        if (
            barokahMobileNavigation &&
            barokahMobileNavigation.classList.contains(
                "is-open"
            )
        ) {

            closeBarokahMenu();


            if (barokahMenuToggle) {

                barokahMenuToggle.focus();

            }

        }

    }
);


/*
 * Jika layar menjadi desktop,
 * tutup menu mobile.
 */

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 768) {

            closeBarokahMenu();

        }

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTopButton =
    document.querySelector(".back-to-top");


function updateBackToTop() {

    if (!backToTopButton) {
        return;
    }


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
    {
        passive: true
    }
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


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const barokahSections =
    document.querySelectorAll(
        "main section[id]"
    );


const barokahNavLinks =
    document.querySelectorAll(
        ".barokah-nav-link, .barokah-mobile-nav-link"
    );


function updateActiveNavigation() {

    if (!barokahSections.length) {
        return;
    }


    const scrollPosition =
        window.scrollY + 180;


    let currentSection = "";


    barokahSections.forEach((section) => {

        const sectionTop =
            section.offsetTop;


        const sectionBottom =
            sectionTop +
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    if (!currentSection) {
        return;
    }


    barokahNavLinks.forEach((link) => {

        const linkTarget =
            link.getAttribute("href");


        if (
            linkTarget ===
            `#${currentSection}`
        ) {

            link.classList.add(
                "active"
            );

        } else {

            link.classList.remove(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


window.addEventListener(
    "resize",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealSelectors = [

    ".barokah-section-heading",

    ".barokah-about-content",

    ".barokah-service-card",

    ".barokah-advantages-content",

    ".barokah-advantage-item",

    ".barokah-store-card",

    ".barokah-link-card"

];


const revealElements = [];


revealSelectors.forEach(
    (selector) => {

        document
            .querySelectorAll(selector)
            .forEach((element) => {

                element.classList.add(
                    "reveal"
                );

                revealElements.push(
                    element
                );

            });

    }
);


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "is-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "is-visible"
            );

        }
    );

}


/* =========================================================
   SERVICE CARD INTERACTION
========================================================= */

const serviceCards =
    document.querySelectorAll(
        ".barokah-service-card"
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


/* =========================================================
   HERO LOAD ANIMATION
========================================================= */

const heroContent =
    document.querySelector(
        ".barokah-hero-content"
    );


const heroVisual =
    document.querySelector(
        ".barokah-hero-visual"
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


/* =========================================================
   HEADER SCROLL STATE
========================================================= */

const barokahHeader =
    document.querySelector(
        ".barokah-header"
    );


function updateHeaderState() {

    if (!barokahHeader) {
        return;
    }


    if (window.scrollY > 30) {

        barokahHeader.classList.add(
            "is-scrolled"
        );

    } else {

        barokahHeader.classList.remove(
            "is-scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeaderState,
    {
        passive: true
    }
);


updateHeaderState();


/* =========================================================
   STORE CARD INTERACTION
========================================================= */

const storeCard =
    document.querySelector(
        ".barokah-store-card"
    );


if (storeCard) {

    storeCard.addEventListener(
        "pointerenter",
        () => {

            storeCard.classList.add(
                "is-hovered"
            );

        }
    );


    storeCard.addEventListener(
        "pointerleave",
        () => {

            storeCard.classList.remove(
                "is-hovered"
            );

        }
    );

}


/* =========================================================
   LINK CARD INTERACTION
========================================================= */

const linkCard =
    document.querySelector(
        ".barokah-link-card"
    );


if (linkCard) {

    linkCard.addEventListener(
        "pointerenter",
        () => {

            linkCard.classList.add(
                "is-hovered"
            );

        }
    );


    linkCard.addEventListener(
        "pointerleave",
        () => {

            linkCard.classList.remove(
                "is-hovered"
            );

        }
    );

}


/* =========================================================
   SELESAI
========================================================= */
