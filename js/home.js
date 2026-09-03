/* =========================================
   MAS ISMAIL
   JAVASCRIPT KHUSUS HOME
========================================= */


/* =========================================
   1. HOME REVEAL
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const elements =
            document.querySelectorAll(
                ".hero-content, .about-content, .brands-grid"
            );

        if (!elements.length) return;


        elements.forEach((element) => {

            element.classList.add("reveal");

        });


        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

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


        elements.forEach((element) => {

            observer.observe(element);

        });

    }
);
"use strict";

/*
 * HOME.JS
 *
 * Fungsi:
 * 1. Scroll reveal animation
 * 2. Back to Hero
 */


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   BACK TO HERO
========================================= */

const backToHero =
    document.getElementById("backToHero");


if (backToHero) {

    backToHero.addEventListener(
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
   SHOW / HIDE BACK BUTTON
========================================= */

function updateBackToHero() {

    if (!backToHero) {
        return;
    }

    if (window.scrollY > 450) {

        backToHero.classList.add("show");

    } else {

        backToHero.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToHero,
    {
        passive: true
    }
);


updateBackToHero();
