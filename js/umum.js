"use strict";

/* =========================================
   MAS MAIL
   JAVASCRIPT UMUM
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
     * Kita mendukung dua kemungkinan class
     * agar Home dan Digital tetap aman
     *
     * .nav-toggle  → sistem utama
     * .menu-toggle → kompatibilitas dengan HTML lama
     */

    const navToggle =
        document.querySelector(
            "#navToggle, .nav-toggle, .menu-toggle"
        );

    const navMenu =
        document.querySelector(".nav-menu");


    if (!navToggle || !navMenu) {
        return;
    }


    /* =====================================
       OPEN / CLOSE MENU
    ===================================== */

    function openMenu() {

        navToggle.classList.add("active");

        navMenu.classList.add("active");

        navToggle.setAttribute(
            "aria-expanded",
            "true"
        );

    }


    function closeMenu() {

        navToggle.classList.remove("active");

        navMenu.classList.remove("active");

        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    function toggleMenu() {

        const isOpen =
            navMenu.classList.contains("active");


        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    }


    /* =====================================
       HAMBURGER CLICK
    ===================================== */

    navToggle.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggleMenu();

        }
    );


    /* =====================================
       CLICK MENU
    ===================================== */

    navMenu
        .querySelectorAll(".nav-link")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMenu();

                }
            );

        });


    /* =====================================
       CLICK DI LUAR MENU
    ===================================== */

    document.addEventListener(
        "click",
        (event) => {

            const clickedInsideMenu =
                navMenu.contains(event.target);

            const clickedToggle =
                navToggle.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedToggle
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================
       ESCAPE KEY
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );

});


/* =========================================
   2. HEADER SAAT SCROLL
========================================= */

const header =
    document.querySelector(".site-header");


function updateHeader() {

    if (!header) {
        return;
    }


    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


/* =========================================
   3. SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (revealElements.length > 0) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "revealed"
                    );


                    observer.unobserve(
                        entry.target
                    );

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
   4. PAGE TRANSITION
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
           CURRENT PAGE
        ===================================== */

        const currentPage =
            window.location.pathname
                .split("/")
                .pop() || "index.html";


        const currentInfo =
            pageInfo[currentPage] ||
            pageInfo["index.html"];


        /* =====================================
           SHOW TRANSITION
        ===================================== */

        function showTransition(
            info,
            duration = 1400
        ) {

            transitionTitle.textContent =
                info.title;

            transitionSubtitle.textContent =
                info.subtitle;


            pageTransition.classList.add(
                "active"
            );


            setTimeout(
                () => {

                    pageTransition.classList.remove(
                        "active"
                    );

                },
                duration
            );

        }


        /* =====================================
           OPENING TRANSITION
        ===================================== */

        const openingPlayed =
            sessionStorage.getItem(
                "masMailOpeningPlayed"
            );


        if (!openingPlayed) {

            showTransition(
                currentInfo,
                1400
            );


            sessionStorage.setItem(
                "masMailOpeningPlayed",
                "true"
            );

        }


        /* =====================================
           PAGE NAVIGATION
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


                        showTransition(
                            info,
                            650
                        );


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


        /* =====================================
           BROWSER BACK / FORWARD
        ===================================== */

        window.addEventListener(
            "pageshow",
            (event) => {

                /*
                 * Jika halaman dikembalikan
                 * melalui browser history / BFCache,
                 * tampilkan transition kembali.
                 */

                const navigationEntries =
                    performance.getEntriesByType(
                        "navigation"
                    );

                const navigationEntry =
                    navigationEntries.length > 0
                        ? navigationEntries[0]
                        : null;


                const isHistoryNavigation =
                    navigationEntry &&
                    navigationEntry.type ===
                        "back_forward";


                const isBFCacheRestore =
                    event.persisted === true;


                if (
                    isHistoryNavigation ||
                    isBFCacheRestore
                ) {

                    showTransition(
                        currentInfo,
                        1400
                    );

                }

            }
        );

    }
);
