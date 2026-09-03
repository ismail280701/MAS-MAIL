"use strict";

/*
 * =========================================
 * MAS ISMAIL — HOME JAVASCRIPT
 * =========================================
 *
 * Fungsi:
 * 1. Scroll reveal
 * 2. Back to Hero
 */


/* =========================================
   1. DOM READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add("active");

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    }


    /* =====================================
       BACK TO HERO
    ===================================== */

    const backToHero =
        document.getElementById("backToHero");


    if (!backToHero) {
        return;
    }


    /* =====================================
       SHOW / HIDE BUTTON
    ===================================== */

    const updateBackToHero = () => {

        if (window.scrollY > 350) {

            backToHero.classList.add("show");

        } else {

            backToHero.classList.remove("show");

        }

    };


    /* =====================================
       CLICK → RETURN TO HERO
    ===================================== */

    backToHero.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================
       SCROLL EVENT
    ===================================== */

    window.addEventListener(
        "scroll",
        updateBackToHero,
        {
            passive: true
        }
    );


    /* =====================================
       INITIAL STATE
    ===================================== */

    updateBackToHero();

});
