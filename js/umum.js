/* =========================================
   MAS ISMAIL
   JAVASCRIPT UMUM
========================================= */


/* =========================================
   1. MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    const isOpen =
        navMenu.classList.contains("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


    /* Menutup menu setelah link diklik */

    const navLinks = navMenu.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

menuToggle.classList.remove("active");

menuToggle.setAttribute(
    "aria-expanded",
    "false"
);
        });

    });

}


/* =========================================
   2. HEADER SAAT SCROLL
========================================= */

const header = document.querySelector(".site-header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* =========================================
   3. REVEAL ELEMENT
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}
/* =========================================
   MOBILE NAVIGATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const navToggle =
            document.getElementById("navToggle");

        const navMenu =
            document.querySelector(".nav-menu");


        if (!navToggle || !navMenu) {
            return;
        }


        /* ================================
           OPEN / CLOSE
        ================================= */

        navToggle.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const isOpen =
                    navToggle.classList.toggle("active");

                navMenu.classList.toggle(
                    "open",
                    isOpen
                );

                navToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );


        /* ================================
           CLICK OUTSIDE
        ================================= */

        document.addEventListener(
            "click",
            (event) => {

                if (
                    !navMenu.contains(event.target) &&
                    !navToggle.contains(event.target)
                ) {

                    navToggle.classList.remove(
                        "active"
                    );

                    navMenu.classList.remove(
                        "open"
                    );

                    navToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );


        /* ================================
           CLICK MENU → CLOSE
        ================================= */

        navMenu
            .querySelectorAll(".nav-link")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navToggle.classList.remove(
                            "active"
                        );

                        navMenu.classList.remove(
                            "open"
                        );

                        navToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }
);
/* =========================================
   PAGE TRANSITION SYSTEM
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const pageTransition =
            document.getElementById(
                "pageTransition"
            );

        const transitionTitle =
            document.getElementById(
                "transitionTitle"
            );

        const transitionSubtitle =
            document.getElementById(
                "transitionSubtitle"
            );


        if (
            !pageTransition ||
            !transitionTitle ||
            !transitionSubtitle
        ) {
            return;
        }


        /* =====================================
           PAGE INFORMATION
        ===================================== */

        const pageInfo = {

            "index.html": {
                title: "Mas Mail",
                subtitle:
                    "Satu Identitas, Dua Perjalanan."
            },

            "digital.html": {
                title: "Mas Mail Digital",
                subtitle:
                    "Digital Creative & Solusi Digital"
            },

            "barokah.html": {
                title: "Mas Mail Barokah",
                subtitle:
                    "Mitra Alfamart & Toko Online"
            }

        };


        /* =====================================
           GET CURRENT PAGE
        ===================================== */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop() || "index.html";


        /* =====================================
           OPENING TRANSITION
           
           Hanya dijalankan ketika website
           pertama kali dibuka / direfresh.
        ===================================== */

        const openingPlayed =
            sessionStorage.getItem(
                "masMailOpeningPlayed"
            );


        if (!openingPlayed) {

            const info =
                pageInfo[currentPage] ||
                pageInfo["index.html"];


            transitionTitle.textContent =
                info.title;

            transitionSubtitle.textContent =
                info.subtitle;


            pageTransition.classList.add(
                "active"
            );


            sessionStorage.setItem(
                "masMailOpeningPlayed",
                "true"
            );


            setTimeout(
                () => {

                    pageTransition.classList.remove(
                        "active"
                    );

                },
                1400
            );

        }


        /* =====================================
           PAGE NAVIGATION TRANSITION
           
           Dipakai ketika berpindah halaman.
        ===================================== */

        document
            .querySelectorAll(
                'a[href$=".html"]'
            )
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !href ||
                            href.startsWith("#") ||
                            link.target === "_blank"
                        ) {
                            return;
                        }


                        const targetPage =
                            href
                                .split("/")
                                .pop();


                        const info =
                            pageInfo[targetPage];


                        if (!info) {
                            return;
                        }


                        event.preventDefault();


                        /* =====================
                           SET TRANSITION TEXT
                        ===================== */

                        transitionTitle.textContent =
                            info.title;

                        transitionSubtitle.textContent =
                            info.subtitle;


                        /* =====================
                           SHOW TRANSITION
                        ===================== */

                        pageTransition.classList.add(
                            "active"
                        );


                        /* =====================
                           MOVE TO PAGE
                        ===================== */

                        setTimeout(
                            () => {

                                window.location.href =
                                    href;

                            },
                            650
                        );

                    }
                );

            });

    }
);
